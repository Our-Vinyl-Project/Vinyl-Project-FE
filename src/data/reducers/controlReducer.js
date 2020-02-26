import { SET_CONTROLS } from '../actions/controlActions';

const initialState = {

  sortType: '',
  condition: '',
  maxPrice: ''

};

export default function controlReducer(state = initialState, action){
  switch(action.type){
    case SET_CONTROLS:
      return { ...action.payload };
    default:
      return state;
  }
}
