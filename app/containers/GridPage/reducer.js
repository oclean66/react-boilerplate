/*
 *
 * GridPage reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  SET_ONLINE_USER,
  SET_ONLINE_USER_ERROR,
} from './constants';

export const initialState = {
  online: [],
};

/* eslint-disable default-case, no-param-reassign */
const gridPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case SET_ONLINE_USER:
        return {
          ...state,
          online: action.result,
        };
      case SET_ONLINE_USER_ERROR:
        return {
          ...state,
          error: action.error,
        };
    }
  });

export default gridPageReducer;
