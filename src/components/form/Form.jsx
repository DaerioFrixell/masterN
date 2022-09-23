import React, { memo, useReducer } from "react";
import { ImagePicker } from "../imagePicker/ImagePicker";
import './form.scss'
import { Button } from "../UI/button/Button";
import { Input } from "../UI/inputs/Input";
import {
  reducer,
  addLogin,
  addEmail,
  addPassword,

  clearLogin,
  clearEmail,
  clearPassword,
} from "./loginReducer";

export const Form = memo(() => {
  const [state, dispatch] = useReducer(reducer, {
    login: '',
    email: '',
    password: '',
  })
  console.log(state)

  const changeLoginInput = event => {
    const login = event.target.value;
    dispatch(addLogin(login))
    console.log(login)
  }

  const changeEmailInput = event => {
    const email = event.target.value;
    dispatch(addEmail(email))
    console.log(email)
  }

  const changePasswordInput = event => {
    const password = event.target.value;
    dispatch(addPassword(password))
    console.log(password)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`вы ввели логин: ${state.login}`)
    console.log(`вы ввели email: ${state.email}`)
    console.log(`вы ввели пароль: ${state.password}`)

    dispatch(clearLogin(''))
    dispatch(clearEmail(''))
    dispatch(clearPassword(''))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ImagePicker />
      <Input value={state.login} qValue={changeLoginInput} />
      <Input value={state.email} qValue={changeEmailInput} />
      <Input value={state.password} qValue={changePasswordInput} />
      <Button />
    </form>
  )
})