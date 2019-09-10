/*
 *
 * ForgotPasswordPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, HANDLE_CHANGE, PASSWORD_REQUEST_SUCCESS, PASSWORD_REQUEST_FAILED } from './constants';

export const initialState = {
  email: '',
  success: false,
  laoding: false,
  message: "",
  errors: [],
};

/* eslint-disable default-case, no-param-reassign */
const forgotPasswordPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case HANDLE_CHANGE: 
        return {
          ...state,
          [action.name]: action.value
        }
      case PASSWORD_REQUEST_SUCCESS:
        return {
          ...initialState,
          success: true,
          message: action.message
        }  

    }
  });

export default forgotPasswordPageReducer;
