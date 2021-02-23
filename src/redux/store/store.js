import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "../reducers/productReducers";

const initialState = {};
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	combineReducers({
		products: productsReducer,
	}),
	initialState,
	composeEnhancer(applyMiddleware(thunk))
);

export default store;
