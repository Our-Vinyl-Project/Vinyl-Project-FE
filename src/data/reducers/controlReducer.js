import { SET_CONTROLS } from '../actions/controlActions';

const initialState = {
  sortType: 'amount_diff',
  condition: '0',
  maxPrice: '',
  bestOnly: true
};

export default function controls(state = initialState, action){
  switch(action.type){
    case SET_CONTROLS:
      return { ...action.payload };
    default:
      return state;
  }
}
