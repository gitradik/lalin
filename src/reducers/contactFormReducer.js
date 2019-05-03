import ACTION from '../actions/actiontsTypes';

const initialState = {
    name: '',
    phone: '',
    isThanks: false,
    isFetching: false,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION.CONTACT_FORM_RESPONSE_THANKS: {
            return {
                ...state,
                isThanks: action.isThanks
            }
        }

        case ACTION.CONTACT_FORM_RESPONSE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        default: {
            return state;
        }
    }
}

