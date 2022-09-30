import { ADD_PlANETS, DELETE_ALL_PLANETS } from "./planet.action";

const initialState = {
  data: [],
  fetching: false,
  error: '',
}

export const planetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PlANETS:
      return {
        ...state,
        data: action.payload,
      }

    case DELETE_ALL_PLANETS:
      return {
        ...state,
        data: []
      }

    default: return state;
  }
}