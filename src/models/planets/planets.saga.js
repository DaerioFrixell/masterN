import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_PLANETS,
  fetchPlanetsAction,
  addPlanetsAction,
  setErrorPlanetsAction,
} from './planet.action';
import { getPlanets } from './planet.services';

function* getPlanetsWorker() {
  try {
    yield put(fetchPlanetsAction());
    const { data } = yield call(getPlanets);
    yield put(addPlanetsAction(data.results));
  } catch (error) {
    yield put(setErrorPlanetsAction(error));
  }
}

export default function* getPlanetsWatcher() {
  yield takeEvery(GET_PLANETS, getPlanetsWorker);
}