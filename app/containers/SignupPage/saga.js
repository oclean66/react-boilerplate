 import { call, put, takeLatest, all } from 'redux-saga/effects';
import {CREATE_USER, USER_CREATE_FAILED, USER_CREATE_SUCCESS} from './constants';
import Api from '../../utils/api';

function createUserApi(action) {
  const {email, username, password, userType} = action
  return Api.post(`/auth/register`, {email, username, password, type: userType})
}

function* createUser(action) {
  try {
    let resp = yield call(createUserApi, action)
    yield put({type: USER_CREATE_SUCCESS, message: resp.message})
  } catch(err) {
    if(err.error === "Invalid inputs") {
      yield put({type: USER_CREATE_FAILED, errors: err.inputs})
    } else {
      yield put({type: USER_CREATE_FAILED, errors: [err.error]})
    }
    
  }
 
}

// Individual exports for testing
export default function* signupPageSaga() {
  yield all([
    takeLatest(CREATE_USER, createUser)
  ])
}
