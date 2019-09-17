/*
 *
 * GridPage actions
 *
 */

import { DEFAULT_ACTION, FETCH_ONLINE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchLiveUsers() {
  return {
    type: FETCH_ONLINE,
  };
}
