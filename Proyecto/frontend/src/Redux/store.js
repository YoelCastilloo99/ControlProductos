import { combineReducers } from 'redux';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import productoReducer from "./reducers.js"
import logger from "redux-logger";
//import reducer from "./reducers.js";
import ventaReducer from "./Ventas/reducers"
const middlewares = [thunk,logger];

const initialState={}

const store = createStore(
    combineReducers({
    productoReducer, ventaReducer
}), initialState, applyMiddleware(...middlewares)
)
export default store