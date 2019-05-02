import { put } from 'redux-saga/effects'
import ACTION from "../actions/actiontsTypes";
import DATA_COOKIES from '../utils/dataCookies';
import cookie from 'react-cookies';

export function * updateBasketSaga() {
    yield put({ type: ACTION.BASKET_REQUEST });
    try {
        const basket = yield cookie.load(DATA_COOKIES.BASKET);
        yield put({ type: ACTION.BASKET_RESPONSE, basket });
    } catch (err) {
        yield put({ type: ACTION.BASKET_ERROR, error: err.response.data });
    }
}