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
  const [stateLogin, dispatchLogin] = useReducer(reducer, { login: '' })
  const [stateEmail, dispatchEmail] = useReducer(reducer, { email: '' })
  const [statePassword, dispatchPassword] = useReducer(reducer, { password: '' })

  const changeLoginInput = event => {
    const login = event.target.value;
    dispatchLogin(addLogin(login))
  }

  const changeEmailInput = event => {
    const email = event.target.value;
    dispatchEmail(addEmail(email))
  }

  const changePasswordInput = event => {
    const password = event.target.value;
    dispatchPassword(addPassword(password))
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      login: stateLogin.login,
      email: stateEmail.email,
      password: statePassword.password
    })
    dispatchLogin(clearLogin(''))
    dispatchEmail(clearEmail(''))
    dispatchPassword(clearPassword(''))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ImagePicker />
      <Input value={stateLogin.login} qValue={changeLoginInput} />
      <Input value={stateEmail.email} qValue={changeEmailInput} />
      <Input value={statePassword.password} qValue={changePasswordInput} />
      <Button />
    </form>
  )
})