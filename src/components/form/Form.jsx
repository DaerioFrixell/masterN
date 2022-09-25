import React, { memo, useReducer, useState } from "react";
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
  const [imgInfo, setImgInfo] = useState('')

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

  // const imgRequire = date => {
  //   return date;
  // }

  const handleSubmit = e => {
    e.preventDefault();

    console.log({
      login: stateLogin.login,
      email: stateEmail.email,
      password: statePassword.password,
      img: imgInfo
    })
    dispatchLogin(clearLogin(''))
    dispatchEmail(clearEmail(''))
    dispatchPassword(clearPassword(''))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ImagePicker setImgInfo={setImgInfo} />
      <Input value={stateLogin.login} onChange={changeLoginInput} />
      <Input value={stateEmail.email} onChange={changeEmailInput} />
      <Input value={statePassword.password} onChange={changePasswordInput} />
      <Button
        nameBtn={'sbmit'}
        onClick={() => console.log('click')}
        isSubmit={true} />
    </form>
  )
})