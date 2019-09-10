/*
 *
 * LoginPage actions
 *
 */

import { DEFAULT_ACTION, LOGIN_USER, HANDLE_CHANGE } from './constants';

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

export function handleSubmit(username, password) {
  return {
    type: LOGIN_USER,
    username,
    password
  }
}
