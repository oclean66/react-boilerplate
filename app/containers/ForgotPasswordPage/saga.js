import { all, call, put, takeLatest } from 'redux-saga/effects';
import {SEND_RECOVER_PASSWORD_REQUEST, PASSWORD_REQUEST_SUCCESS, PASSWORD_REQUEST_FAILED} from './constants';
import Api from '../../utils/api';

function forgotPasswordApi(email) {
 return Api.post(`/auth/request-reset-password`, {email})
}


function* forgotPassword(action) {
 try {
    let resp = yield call(forgotPasswordApi, action.email)
    yield put({type: PASSWORD_REQUEST_SUCCESS, message: resp.message})
  } catch(err) {
    yield put({type: PASSWORD_REQUEST_FAILED, errors: [err.error]})
  }
}

// Individual exports for testing
export default function* forgotPasswordPageSaga() {
  yield all([
    takeLatest(SEND_RECOVER_PASSWORD_REQUEST, forgotPassword)
  ])
}