import { TOGGLE_VIEW } from '../../actions/toggleViewAction';
import toggleView from '../toggleViewReducer';

describe('Toggle View Reducer', () => {
  it('creates a new object in state as a means to trigger a toggle change', () => {
    const state = true;

    const action = ({
      type: TOGGLE_VIEW
    });

    expect(toggleView(state, action)).toEqual(false);
  });
});
