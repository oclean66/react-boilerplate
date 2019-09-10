/*
 *
 * SignupPage actions
 *
 */

import { DEFAULT_ACTION, HANDLE_CHANGE, CREATE_USER } from './constants';

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

export function handleSubmit(email, username, password, type) {
  return {
    type: CREATE_USER,
    email,
    username,
    password,
    userType: type
  }
}
