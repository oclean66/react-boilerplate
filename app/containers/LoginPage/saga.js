 import { takeLatest, call, put, all } from 'redux-saga/effects';
 import {LOGIN_USER, LOGIN_USER_FAILED, LOGIN_USER_SUCCESS} from './constants';
 import Api from '../../utils/api';

 function loginUserApi(action) {
  const {username, password} = action
  return Api.post(`/auth/login`, {username, password})
}


 function* loginUser(action) {

  try {
    let resp = yield call(loginUserApi, action)
    yield put({type: LOGIN_USER_SUCCESS, message: resp.message, token: resp.data.token})
  } catch(err) {
    if(err.error === "Invalid inputs") {
      yield put({type: LOGIN_USER_FAILED, errors: err.inputs})
    } else {
      yield put({type: LOGIN_USER_FAILED, errors: [err.error]})
    }
    
  }
 
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield all([
    takeLatest(LOGIN_USER, loginUser)
  ])
}
 