import { all } from 'redux-saga/effects';
import getPlanetsWatcher from '../models/planets/planets.saga';

export default function* rootSaga() {
  yield all([
    getPlanetsWatcher()
  ]);
}