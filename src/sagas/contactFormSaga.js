import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";

export function * thanksOnSaga() {
    yield put({ type: ACTION.CONTACT_FORM_RESPONSE_THANKS, isThanks: true });
}

export function * thanksOffSaga() {
    yield put({ type: ACTION.CONTACT_FORM_RESPONSE_THANKS, isThanks: false });
}

export function * fetchingOnSaga() {
    yield put({ type: ACTION.CONTACT_FORM_RESPONSE_FETCHING, isFetching: true });
}

export function * fetchingOffSaga() {
    yield put({ type: ACTION.CONTACT_FORM_RESPONSE_FETCHING, isFetching: false });
}