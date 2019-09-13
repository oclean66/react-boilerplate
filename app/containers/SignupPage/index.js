/**
 *
 * SignupPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Link } from 'react-router-dom';
import makeSelectSignupPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Logo from '../../components/Logo';
import { IntroDiv, Button, H2, Input } from '../../components/UI';
import { handleChange, handleSubmit } from './actions';

const StyledButton = styled(Button)`
  margin: 0 auto;
  border-radius: 20px;
`;

export function SignupPage(props) {
  useInjectReducer({ key: 'signupPage', reducer });
  useInjectSaga({ key: 'signupPage', saga });

  const {
    email,
    password,
    username,
    errors,
    success,
    message,
  } = props.signupPage;

  const { type } = props.match.params;

  return (
    <div>
      <div className="auth-container">
        <Logo />
        <IntroDiv>
          <p>
            <FormattedMessage {...messages.enterpreneurIntro} />
          </p>
        </IntroDiv>
        {errors && errors.length > 0 && (
          <ul className="errors">
            {errors.map((error, key) => (
              <li key={key}>{error.msg || error}</li>
            ))}
          </ul>
        )}
        {success && <p className="success">{message}</p>}

        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              props.dispatch(handleSubmit(email, username, password, type));
            }}
            style={{ maxWidth: '742px', margin: '0 auto' }}
          >
            <div className="input-field">
              <Input
                name="email"
                placeholder="Email Address"
                type="email"
                value={email}
                onChange={e =>
                  props.dispatch(handleChange(e.target.name, e.target.value))
                }
              />
            </div>
            <div className="input-field">
              <Input
                name="username"
                placeholder="Username"
                type="text"
                value={username}
                onChange={e =>
                  props.dispatch(handleChange(e.target.name, e.target.value))
                }
              />
            </div>
            <div className="input-field">
              <Input
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={e =>
                  props.dispatch(handleChange(e.target.name, e.target.value))
                }
              />
            </div>
            <H2 style={{ textAlign: 'center' }}>Have An Account Already?</H2>
            <Link
              to="/login/enterpreneur"
              className="forget-link"
              style={{ marginTop: '0' }}
            >
              Sign In Here
            </Link>
            <div className="SignUpBtn">
              <Link to="/">
                <p
                  style={{
                    textAlign: 'center',
                    margin: '2px',
                    color: '#ffffff',
                  }}
                >
                  Read Our Terms & Condition{' '}
                </p>
              </Link>
              <StyledButton
                style={{
                  marginTop: '0',
                  fontSize: '2.4vh',
                  borderRadius: '5px',
                }}
                type="submit"
              >
                Access My WePitch Profile Now
              </StyledButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  signupPage: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  signupPage: makeSelectSignupPage(),
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

export default compose(withConnect)(SignupPage);
