/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { actionTypes, failure, loadDataSuccess, tickClock, loadPostsSuccess } from './actions';

es6promise.polyfill();

function* runClockSaga() {
  yield take(actionTypes.START_CLOCK);
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* loadPostSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/posts');
    const data = yield res.json();
    yield put(loadPostsSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([
    call(runClockSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.LOAD_POSTS, loadPostSaga)
  ]);
}

export default rootSaga;
