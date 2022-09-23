const ADD_PHOTO = 'ADD_PHOTO'

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return { image: action.payload }
    default:
      return { ...state }
  }
}

export const addPhoto = payload => ({
  type: ADD_PHOTO,
  payload
})