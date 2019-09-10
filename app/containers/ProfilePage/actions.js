/*
 *
 * ProfilePage actions
 *
 */

import { DEFAULT_ACTION, LOGOUT_USER } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function logoutAction() {
  localStorage.clear()
  return {
    type: LOGOUT_USER
  };
}
