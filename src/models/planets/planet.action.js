export const ADD_PlANETS = "ADD_PlANETS";
export const DELETE_ALL_PLANETS = "DELETE_ALL_PLANETS";

export const addPlanetsAction = data => ({
  type: ADD_PlANETS,
  payload: data
})

export const deletePlanetsAction = () => ({
  type: DELETE_ALL_PLANETS
})
