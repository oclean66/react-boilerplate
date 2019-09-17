import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_ONLINE,
  SET_ONLINE_USER,
  SET_ONLINE_USER_ERROR,
} from './constants';
import Api from '../../utils/api';

function fetchLiveUsersApi(action) {
  return axios
    .get(`${Api.getVideoAPIURL}/api/sessions`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `${Api.basicToken}`,
      },
    })
    .then(res => res);
}

function* fetchLiveUsersSaga(action) {
  try {
    let res = yield call(fetchLiveUsersApi, action);
    res =
      res.data &&
      res.data.content.filter(i => i.connections.numberOfElements > 0);
    yield put({ type: SET_ONLINE_USER, result: res });
  } catch (err) {
    yield put({ type: SET_ONLINE_USER_ERROR, error: err });
  }
}

// Individual exports for testing
export default function* gridPageSaga() {
  // See example in containers/HomePage/saga.js

  yield all([takeLatest(FETCH_ONLINE, fetchLiveUsersSaga)]);
}
