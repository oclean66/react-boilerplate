/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS, HANDLE_CHANGE } from './constants';
import {LOGOUT_USER} from 'containers/ProfilePage/constants';

export const initialState = {
  username: '',
  password: '',
  success: false,
  laoding: false,
  message: "",
  errors: [],
  token: ""
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HANDLE_CHANGE: 
        return {
          ...state,
          [action.name]: action.value
        }
      case LOGIN_USER_FAILED:
        return  {
          ...state,
          errors: action.errors
        }  
      case LOGIN_USER_SUCCESS:
        return  {
          ...initialState,
          message: action.message,
          success: true,
          token: action.token
        }
      case LOGOUT_USER:
        return  {
          ...initialState
        }
    }
  });

export default loginPageReducer;
