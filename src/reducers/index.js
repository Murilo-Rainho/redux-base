import { combineReducers } from "redux";
import reducerOne from './reducerOne';
import reducerTwo from './reducerTwo';

const rootReducers = combineReducers({ reducerOne, reducerTwo });

export default rootReducers;
