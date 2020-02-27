import { TOGGLE_VIEW } from '../actions/toggleViewAction';

export default function controls(state = {}, action){
  return action.type === TOGGLE_VIEW ? {} : state;
}
