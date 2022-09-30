import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_USER_POSTS_REQUEST,
  CREATE_USER_POSTS_REQUEST,
  UPDATE_USER_POSTS_REQUEST,
  DELETE_USER_POSTS_REQUEST,
  userPostFetching,
  userPostSuccess,
  userPostError,
} from './UserLibrariesItems.actions';
import {
  getLibrariesItemsRequest,
  createLibrariesItemsRequest,
  updateLibrariesItemsRequest,
  deleteLibrariesItemsRequest,
} from './UserLibrariesItems.services';

function* patternLibririesItemsRequests(request, payload = {}) {
  try {
    yield put(userPostFetching());
    const titles = yield call(request, payload);
    yield put(userPostSuccess(titles.data));
  } catch (error) {
    yield put(userPostError(error));
  }
}

function* getTitles() {
  yield call(patternLibririesItemsRequests, getLibrariesItemsRequest)
}

function* createTitle(data) {
  yield call(patternLibririesItemsRequests, createLibrariesItemsRequest, data.payload);
}

function* updateTitles(data) {
  yield call(patternLibririesItemsRequests, updateLibrariesItemsRequest, data.payload);
}

function* deleteTitles(data) {
  yield call(patternLibririesItemsRequests, deleteLibrariesItemsRequest, data.payload);
}

export default function* watchUserLibrariesItems() {
  yield takeEvery(GET_USER_POSTS_REQUEST, getTitles);
  yield takeEvery(CREATE_USER_POSTS_REQUEST, createTitle);
  yield takeEvery(UPDATE_USER_POSTS_REQUEST, updateTitles);
  yield takeEvery(DELETE_USER_POSTS_REQUEST, deleteTitles);
}