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
  clearForm,
} from "./loginReducer";
import { clearPhoto } from "../imagePicker/imageReducer";

export const Form = memo(() => {
  const [state, dispatch] = useReducer(reducer, {
    login: "",
    email: "",
    password: "",
    img: ""
  })
  const [imgInfo, setImgInfo] = useState('')

  const changeLoginInput = event => {
    const login = event.target.value;
    dispatch(addLogin(login))
  }

  const changeEmailInput = event => {
    const email = event.target.value;
    dispatch(addEmail(email))
  }

  const changePasswordInput = event => {
    const password = event.target.value;
    dispatch(addPassword(password))
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log({
      login: state.login,
      email: state.email,
      password: state.password,
      img: imgInfo
    })
    dispatch(clearForm(''))
    dispatch(clearPhoto(''))
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ImagePicker setImgInfo={setImgInfo} />
      <Input value={state.login} onChange={changeLoginInput} />
      <Input value={state.email} onChange={changeEmailInput} />
      <Input value={state.password} onChange={changePasswordInput} />
      <Button
        nameBtn={'sbmit'}
        onClick={() => console.log('click')}
        isSubmit={true} />
    </form>
  )
})