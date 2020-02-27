import setControls, { SET_CONTROLS } from '../controlActions';

describe('Set control actions', () => {
  it('creates a control action from a control object', () => {
    const controlsObj = {
      sortType: 'Best Deals',
      condition: '8',
      maxPrice: '100'      
    };

    expect(setControls(controlsObj)).toEqual({
      type: SET_CONTROLS,
      payload: {
        sortType: 'Best Deals',
        condition: '8',
        maxPrice: '100'      
      }
    });
  });
});
