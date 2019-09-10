/*
 *
 * ForgotPasswordPage actions
 *
 */

import { DEFAULT_ACTION, HANDLE_CHANGE, SEND_RECOVER_PASSWORD_REQUEST } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function handleChange(name, value) {
  return {
    type: HANDLE_CHANGE,
    name,
    value
  }
}

export function handleSubmit(email) {
  return {
    type: SEND_RECOVER_PASSWORD_REQUEST,
    email
  }
}