import { FETCH_WANTS_LOADING, FETCH_WANTS } from '../actions/wantActions';

const initialState = {
  loading: true,
  wants: []
};

export default function wantsReducer(state = initialState, action){
  switch(action.type){
    case FETCH_WANTS_LOADING:
      return { ...state, loading:true };
    case FETCH_WANTS:
      return { ...state, loading: false, wants: action.payload };
    default:
      return state;
  }
};
