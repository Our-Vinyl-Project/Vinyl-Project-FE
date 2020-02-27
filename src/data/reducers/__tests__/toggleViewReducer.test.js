import { TOGGLE_VIEW } from '../../actions/toggleViewAction';
import toggleView from '../toggleViewReducer';

describe('Toggle View Reducer', () => {
  it('creates a new object in state as a means to trigger a toggle change', () => {
    const state = {};

    const action = ({
      type: TOGGLE_VIEW,
      payload: {}
    });

    expect(toggleView(state, action)).toEqual({});
    expect(toggleView(state, action)).not.toBe(state);
  });
});
