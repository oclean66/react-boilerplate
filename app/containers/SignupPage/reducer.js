/*
 *
 * SignupPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, HANDLE_CHANGE, USER_CREATE_FAILED, USER_CREATE_SUCCESS } from './constants';

export const initialState = {
  email: "",
  username: "",
  password: "",
  errors: [],
  success: false,
  loading: false,
  message: ""
};

/* eslint-disable default-case, no-param-reassign */
const signupPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        state
        break;
      case HANDLE_CHANGE: 
        return {
          ...state,
          [action.name]: action.value
        }
      case USER_CREATE_FAILED:
        return  {
          ...state,
          errors: action.errors
        }  
      case USER_CREATE_SUCCESS:
        return  {
          ...initialState,
          message: action.message,
          success: true
        }
    }
  });

export default signupPageReducer;
