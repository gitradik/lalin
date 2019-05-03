import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import * as basketSaga from "./basketSaga";
import * as contactFormSaga from "./contactFormSaga";

function* rootSaga() {
  yield takeLatest(ACTION.BASKET_UPDATE, basketSaga.updateBasketSaga);
  yield takeLatest(ACTION.BASKET_REMOVE, basketSaga.removeInBasketSaga);
  yield takeLatest(ACTION.BASKET_PUSH, basketSaga.pushInBasketSaga);
  yield takeLatest(ACTION.BASKET_CLEAR, basketSaga.clearBasketSaga);
  yield takeLatest(ACTION.CONTACT_FORM_THANKS_ON, contactFormSaga.thanksOnSaga);
  yield takeLatest(ACTION.CONTACT_FORM_THANKS_OFF, contactFormSaga.thanksOffSaga);
  yield takeLatest(ACTION.CONTACT_FORM_FETCHING_ON, contactFormSaga.fetchingOnSaga);
  yield takeLatest(ACTION.CONTACT_FORM_FETCHING_OFF, contactFormSaga.fetchingOffSaga);
}

export default rootSaga;
