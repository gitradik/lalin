import { combineReducers } from 'redux';
import basketReducer from './basketReducer';

const appReducer = combineReducers({
    basketReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
