import React, { useState } from "react";
import { ImagePicker } from "../imagePicker/ImagePicker";
import './form.scss'
import { MyButton } from "../UI/button/Button";
import { FormEmail } from "../UI/inputs/FormEmail";
import { FormLogin } from "../UI/inputs/FormLogin";
import { FormPassword } from "../UI/inputs/FormPassword";

export const Form = () => {
  const [login, setLogin] = useState('')
  const [loginValue, setLoginValue] = useState('')
  const [email, setEmail] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [password, setPassword] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  if (login && email && password) {
    console.log(`вы ввели логин: ${login}`)
    console.log(`вы ввели email: ${email}`)
    console.log(`вы ввели пароль: ${password}`)
  }

  const toSubmit = () => {
    setLogin(loginValue)
    setEmail(emailValue)
    setPassword(passwordValue)

    setLoginValue('')
    setEmailValue('')
    setPasswordValue('')
  }

  const changeLoginInput = event => {
    const value = event.target.value;
    setLoginValue(value);
  }
  const changeEmailInput = event => {
    const value = event.target.value;
    setEmailValue(value);
  }
  const changePasswordInput = event => {
    const value = event.target.value;
    setPasswordValue(value);
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div >
      <form className="form" onSubmit={handleSubmit}>
        <ImagePicker />
        <FormLogin value={loginValue} setValue={changeLoginInput} />
        <FormEmail value={emailValue} setValue={changeEmailInput} />
        <FormPassword value={passwordValue} setValue={changePasswordInput} />
        <MyButton toSubmit={toSubmit} />
      </form>
    </div>
  )
}