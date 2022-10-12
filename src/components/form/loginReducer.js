const ADD_LOGIN = "ADD_LOGIN";
const ADD_EMAIL = "ADD_EMAIL";
const ADD_PASSWORD = "ADD_PASSWORD";
const CLEAR_FORM = "CLEAR_FORM";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_LOGIN:
      return { ...state, login: action.payload }
    case ADD_EMAIL:
      return { ...state, email: action.payload }
    case ADD_PASSWORD:
      return { ...state, password: action.payload }

    case CLEAR_FORM:
      return {
        login: "",
        email: "",
        password: "",
        img: ""
      }


    default:
      return state;
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

export const clearForm = () => ({
  type: CLEAR_FORM
})



