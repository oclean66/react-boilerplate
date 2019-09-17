/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SocialAuthButtons from 'components/SocialAuthButtons';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Logo from '../../components/Logo';
import { IntroDiv, Button, H2, Input } from '../../components/UI';
import { handleChange, handleSubmit } from './actions';
import setBackgroundImage from '../../utils/setbackgroundImage';

const StyledButton = styled(Button)`
  margin: 0 auto;
  padding: 10px 20px;
  border-radius: 20px;
`;

export function LoginPage(props) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  const { username, password, errors, success, message } = props.loginPage;
  if (success) {
    props.history.push('/grid');
  }

  setBackgroundImage();

  return (
    <>
      <Logo />
      <div className="auth-container">
        <IntroDiv>
          <p>
            <FormattedMessage {...messages.enterpreneurIntro} />
          </p>
        </IntroDiv>
        <StyledButton
          onClick={() => {
            props.history.push(`/signup/${props.match.params.type}`);
          }}
        >
          Sign Up
        </StyledButton>
        <H2 style={{ textAlign: 'center' }}>OR</H2>
        {errors && errors.length > 0 && (
          <ul className="errors">
            {errors.map((error, key) => (
              <li key={key}>{error.msg || error}</li>
            ))}
          </ul>
        )}
        {success && <p className="success">{message}</p>}
        <form
          onSubmit={e => {
            e.preventDefault();
            props.dispatch(handleSubmit(username, password));
          }}
        >
          <div className="input-fields">
            <Input
              name="username"
              placeholder="Username"
              type="text"
              onChange={e =>
                props.dispatch(handleChange(e.target.name, e.target.value))
              }
            />
          </div>
          <div className="input-fields">
            <Input
              name="password"
              type="password"
              placeholder="password"
              onChange={e =>
                props.dispatch(handleChange(e.target.name, e.target.value))
              }
            />
          </div>
          <StyledButton type="submit">Login</StyledButton>
        </form>
        <Link to="/forgot-password" className="forget-link">
          <FormattedMessage {...messages.forgotPassword} />
        </Link>
      </div>
      <div>
        <div className="bottom-links">
          <Link to={`/why/${props.match.params.type}`} className="link">
            <FormattedMessage {...messages.why} />
          </Link>
          <SocialAuthButtons />
          <Link to="/" className="link">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loginPage: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(LoginPage);
