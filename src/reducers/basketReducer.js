import ACTION from '../actions/actiontsTypes';

const initialState = {
    basket: null,
    isFetching: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION.BASKET_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            }
        }

        case ACTION.BASKET_RESPONSE: {
            return {
                ...state,
                basket: action.basket,
                isFetching: false,
                error: null
            }
        }

        case ACTION.BASKET_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }

        default: {
            return state;
        }
    }
}

