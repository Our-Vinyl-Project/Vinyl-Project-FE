import { combineReducers } from 'redux';
import wants from './wantsReducer';
import controls from '../reducers/controlReducer';
import toggleView from '../reducers/toggleViewReducer';

export default combineReducers({
  wants,
  controls,
  toggleView
});
