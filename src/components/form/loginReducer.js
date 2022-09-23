const ADD_LOGIN = "ADD_LOGIN";
const ADD_EMAIL = "ADD_EMAIL";
const ADD_PASSWORD = "ADD_PASSWORD";
const CLEAR_LOGIN = "CLEAR_LOGIN";
const CLEAR_EMAIL = "CLEAR_EMAIL";
const CLEAR_PASSWORD = "CLEAR_PASSWORD";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_LOGIN:
      return { login: action.payload }
    case ADD_EMAIL:
      return { email: action.payload }
    case ADD_PASSWORD:
      return { password: action.payload }

    case CLEAR_LOGIN:
      return { login: action.payload }
    case CLEAR_EMAIL:
      return { email: action.payload }
    case CLEAR_PASSWORD:
      return { password: action.payload }

    default:
      return { ...state }
  }
}

export const addLogin = payload => ({
  type: ADD_LOGIN,
  payload
})

export const addEmail = payload => ({
  type: ADD_EMAIL,
  payload
})

export const addPassword = payload => ({
  type: ADD_PASSWORD,
  payload
})

export const clearLogin = payload => ({
  type: CLEAR_LOGIN,
  payload
})

export const clearEmail = payload => ({
  type: CLEAR_EMAIL,
  payload
})

export const clearPassword = payload => ({
  type: CLEAR_PASSWORD,
  payload
})



