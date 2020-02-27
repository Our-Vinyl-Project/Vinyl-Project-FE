import toggleView, { TOGGLE_VIEW } from '../toggleViewAction';

describe('Toggle view action', () => {
  it('creates a toggle view action from a toggle view object', () => {
    const toggleObj = {};

    expect(toggleView(toggleObj)).toEqual({
      type: TOGGLE_VIEW,
      payload: {}
    });
  });
});
