const ADD_PHOTO = "ADD_PHOTO";
const CLEAR_PHOTO = "CLEAR_PHOTO";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return { image: action.payload }
    case CLEAR_PHOTO:
      return { image: action.payload }
    default:
      return state;
  }
}

export const addPhoto = payload => ({
  type: ADD_PHOTO,
  payload
})

export const clearPhoto = payload => ({
  type: CLEAR_PHOTO,
  payload
})

