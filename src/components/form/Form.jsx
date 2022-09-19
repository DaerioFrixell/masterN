import React, { memo, useState } from "react";
import { ImagePicker } from "../imagePicker/ImagePicker";
import './form.scss'
import { Button } from "../UI/button/Button";
import { FormEmail } from "../UI/inputs/FormEmail";
import { FormLogin } from "../UI/inputs/FormLogin";
import { FormPassword } from "../UI/inputs/FormPassword";

export const Form = memo(() => {
  const [login, setLogin] = useState('')
  const [loginValue, setLoginValue] = useState('')
  const [email, setEmail] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [password, setPassword] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

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
    setLogin(loginValue)
    setEmail(emailValue)
    setPassword(passwordValue)

    setLoginValue('')
    setEmailValue('')
    setPasswordValue('')

    console.log(`вы ввели логин: ${login}`)
    console.log(`вы ввели email: ${email}`)
    console.log(`вы ввели пароль: ${password}`)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <ImagePicker />
      <FormLogin value={loginValue} setValue={changeLoginInput} />
      <FormEmail value={emailValue} setValue={changeEmailInput} />
      <FormPassword value={passwordValue} setValue={changePasswordInput} />
      <Button />
    </form>
  )
})