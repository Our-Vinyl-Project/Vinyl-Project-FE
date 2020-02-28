export const SET_CONTROLS = 'SET_CONTROLS';

const setControls = controls => ({
  type: SET_CONTROLS,
  payload: { ...controls }
});

export default setControls;
