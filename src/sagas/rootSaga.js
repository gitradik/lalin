import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import * as basketSaga from "./basketSaga";

function* rootSaga() {
  yield takeLatest(ACTION.BASKET_UPDATE, basketSaga.updateBasketSaga);
}

export default rootSaga;
