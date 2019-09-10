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
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Logo from '../../components/Logo';
import {IntroDiv, Button, H2, Input} from '../../components/UI';
import {handleChange, handleSubmit} from './actions';

const StyledButton = styled(Button)`
  margin: 0 auto;
  border-radius: 20px
`;


export function LoginPage(props) {
  useInjectReducer({ key: 'loginPage', reducer });
  useInjectSaga({ key: 'loginPage', saga });
  const {username, password, errors, success, message} = props.loginPage
  if(success) {
    props.history.push('/profile')
  }
  return (
    <div>
      <Logo/>
      <IntroDiv>
        <p><FormattedMessage {...messages.enterpreneurIntro}/></p>
      </IntroDiv>
      <StyledButton onClick={() => {props.history.push('/signup/entrepreneur')}}>Sign Up</StyledButton>
      <H2 style={{textAlign: 'center'}}>OR</H2>
      {errors && errors.length > 0 && <ul className="errors">
      {errors.map((error,key) => {
      return <li key={key} >{error.msg || error  }</li>
    })}
    </ul>}
    {success && <p className="success">{message}</p>}
    <form onSubmit={(e) => {e.preventDefault();  props.dispatch(handleSubmit(username,password))}}>
        <div className="input-field">
          <Input name="username"  placeholder="Username" type="text" onChange={(e) => props.dispatch(handleChange(e.target.name, e.target.value))}/>
        </div>
        <div className="input-field">
          <Input name="password" type="password" placeholder="password" onChange={(e) => props.dispatch(handleChange(e.target.name, e.target.value))}/>
        </div>
        <StyledButton type="submit">Login</StyledButton>
      </form>
      <a href="#" className="forget-link">Forgot Password?</a>
    </div>
  );
}

LoginPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
