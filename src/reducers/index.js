import isAuthReducer from './auth';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isAuth : isAuthReducer
});

export default allReducers;