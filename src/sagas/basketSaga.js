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
        yield put({ type: ACTION.BASKET_ERROR, error: err });
    }
}

export function * updateBasketItemCountSaga({count, id, size}) {
    yield put({ type: ACTION.BASKET_REQUEST });
    try {
        const basket = yield cookie.load(DATA_COOKIES.BASKET);
        if(count >= 0) {
            const basketItem = yield basket.find(p => (p.id === id && p.size === size));
            basketItem.count = count;
            yield cookie.save(DATA_COOKIES.BASKET, basket, {path: process.env.PUBLIC_URL});
        }
        yield put({ type: ACTION.BASKET_RESPONSE, basket });
    } catch (err) {
        yield put({ type: ACTION.BASKET_ERROR, error: err });
    }
}

export function * setConfirmationSaga({value}) {
    yield put({type: ACTION.CONFIRMATION_RESPONSE, confirmation: value})
}

export function * removeInBasketSaga({id, size}) {
    yield put({ type: ACTION.BASKET_REQUEST });
    try {
        const basket = yield cookie.load(DATA_COOKIES.BASKET);
        if(basket !== undefined) {
            const indexProd = yield basket.findIndex(p => (p.id === id && p.size === size));
            yield basket.splice(indexProd, 1);
            yield cookie.save(DATA_COOKIES.BASKET, basket, {path: process.env.PUBLIC_URL});
        }
        yield put({ type: ACTION.BASKET_RESPONSE, basket });
    } catch (err) {
        yield put({ type: ACTION.BASKET_ERROR, error: err });
    }
}

export function * pushInBasketSaga({product}) {
    yield put({ type: ACTION.BASKET_REQUEST });
    try {
        let basket = yield cookie.load(DATA_COOKIES.BASKET);
        if(basket === undefined) {
            basket = [];
        }
        let isRepeat = true;
        if(basket.findIndex(p => product.id === p.id && product.size === p.size) === -1) {
            isRepeat = false;
            yield basket.push(product);
            yield cookie.save(DATA_COOKIES.BASKET, basket, {path: process.env.PUBLIC_URL});
        }
        yield put({ type: ACTION.BASKET_RESPONSE, basket, isRepeat });
    } catch (err) {
        yield put({ type: ACTION.BASKET_ERROR, error: err });
    }
}



export function * clearBasketSaga() {
    yield put({type: ACTION.BASKET_REQUEST});
    try {
        yield cookie.remove(DATA_COOKIES.BASKET);
        yield put({type: ACTION.BASKET_RESPONSE, basket: undefined});
    } catch (err) {
        yield put({type: ACTION.BASKET_ERROR, error: err});
    }
}

export function * isBasketSubmitSaga() {
    const basket = yield cookie.load(DATA_COOKIES.BASKET);
    if(basket) {
        let check = true;
        for (let i = 0; i < basket.length; i++) {
            if(basket[i].count <= 0) {
                check = false;
                break;
            }
        }

        if(check && basket.length !== 0) {
            yield put({type: ACTION.BASKET_SUBMIT_RESPONSE_ON});
        } else {
            yield put({type: ACTION.BASKET_SUBMIT_RESPONSE_OFF});
        }
    } else {
        yield put({type: ACTION.BASKET_SUBMIT_RESPONSE_OFF});
    }
}