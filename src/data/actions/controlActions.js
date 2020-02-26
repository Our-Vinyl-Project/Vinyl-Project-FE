
export const SET_CONTROLS = 'SET_CONTROLS';

export const setControls = controls => ({
  type: SET_CONTROLS,
  payload: { ...controls }
});
