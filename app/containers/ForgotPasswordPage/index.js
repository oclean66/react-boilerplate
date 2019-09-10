/**
 *
 * ForgotPasswordPage
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
import makeSelectForgotPasswordPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {Button, Input} from 'components/UI';
import Logo from 'components/Logo';
import {handleChange, handleSubmit} from './actions';


export function ForgotPasswordPage(props) {
  useInjectReducer({ key: 'forgotPasswordPage', reducer });
  useInjectSaga({ key: 'forgotPasswordPage', saga });
  const {email, success, message} = props.forgotPasswordPage
  return (
    <div>
      <Logo/>
      {success && <p className="success">{message}</p>}
     <form onSubmit={(e) => {e.preventDefault(); props.dispatch(handleSubmit(email))}}>
        <div className="input-field">
          <Input name="email"  placeholder="Email" value={email} type="emai" onChange={(e) => props.dispatch(handleChange(e.target.name, e.target.value))}/>
        </div>
        <Button type="submit">Send Email Verification</Button>
      </form>
      <Button className="forget-link" onClick={() => props.history.goBack()}>Go To Login</Button>
    </div>
  );
}

ForgotPasswordPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  forgotPasswordPage: makeSelectForgotPasswordPage(),
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

export default compose(withConnect)(ForgotPasswordPage);
