import { combineReducers } from 'redux';
import wants from './wantsReducer';
import controls from '../reducers/controlReducer';

export default combineReducers({
  wants,
  controls
});
