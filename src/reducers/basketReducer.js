import ACTION from '../actions/actiontsTypes';

const initialState = {
    basket: undefined,
    isFetching: false,
    isSubmit: false,
    confirmation: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION.CONFIRMATION_RESPONSE: {
            return {
                ...state,
                confirmation: action.confirmation,
            }
        }

        case ACTION.BASKET_SUBMIT_RESPONSE_ON: {
            return {
                ...state,
                isSubmit: true,
            }
        }

        case ACTION.BASKET_SUBMIT_RESPONSE_OFF: {
            return {
                ...state,
                isSubmit: false,
            }
        }

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

