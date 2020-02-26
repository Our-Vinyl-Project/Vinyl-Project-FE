import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducer from './data/reducers/wantsReducer';
import combineReducers from './data/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)));
