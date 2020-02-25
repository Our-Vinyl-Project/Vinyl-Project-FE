import { getWantList } from '../../services/getWantlist';

export const FETCH_WANTS_LOADING = 'FETCH_WANTS_LOADING';
export const FETCH_WANTS = 'FETCH_WANTS';
export const getWants = wants => dispatch => {
  dispatch({ type: FETCH_WANTS_LOADING });
  return getWantList(wants)
    .then(wants => dispatch({
      type: FETCH_WANTS,
      payload: wants
    }));
};
