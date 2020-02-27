import { TOGGLE_VIEW } from '../actions/toggleViewAction';

const initialState = true;

export default function controls(state = initialState, action){
  return action.type === TOGGLE_VIEW ? !state : state;
}
