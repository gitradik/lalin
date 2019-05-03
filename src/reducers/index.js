import { combineReducers } from 'redux';
import basketReducer from './basketReducer';
import contactFormReducer from './contactFormReducer';

const appReducer = combineReducers({
    basketReducer, contactFormReducer
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
