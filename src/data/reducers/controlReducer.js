import { SET_CONTROLS } from '../actions/controlActions';

const initialState = {
  sortType: 'deal',
  condition: '0',
  maxPrice: ''
};

export default function controls(state = initialState, action){
  switch(action.type){
    case SET_CONTROLS:
      return { ...action.payload };
    default:
      return state;
  }
}
