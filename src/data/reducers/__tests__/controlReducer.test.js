import controls from '../controlReducer';
import { SET_CONTROLS } from '../../actions/controlActions';

describe('control Reducer reduces', () => {
  it('updates state based on control action', () => {
    const state = {
      sortType: '',
      condition: '',
      maxPrice: ''      
    };
    const action = ({
      type: SET_CONTROLS,
      payload: {
        sortType: 'Best Deals',
        condition: '8',
        maxPrice: '100'      
      }
    });
    expect(controls(state, action)).toEqual({
      sortType: 'Best Deals',
      condition: '8',
      maxPrice: '100'      
    });
  });
});
