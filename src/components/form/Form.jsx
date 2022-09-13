import React, { useState } from "react";
import { ImagePicker } from "../imagePicker/ImagePicker";
import './form.scss'
import { MyInput } from "../UI/input/Input";
import { MyButton } from "../UI/button/Button";
import { useEffect } from "react";

export const Form = () => {
  const [login, setLogin] = useState('ваш логин')
  const [valueLogin, setValueLogin] = useState('')

  const [email, setEmail] = useState('ваш email')
  const [valueEmail, setValueEmail] = useState('')

  const [password, setPassword] = useState('ваш password')
  const [valuePassword, setValuePassword] = useState('')

  const changeLoginInput = event => {
    const value = event.target.value;
    setValueLogin(value);
  }
  const changeEmailInput = event => {
    const value = event.target.value;
    setValueEmail(value);
  }
  const changePasswordInput = event => {
    const value = event.target.value;
    setValuePassword(value);
  }

  const toSubmit = () => {
    setLogin(valueLogin)
    setEmail(valueEmail)
    setPassword(valuePassword)

    setValueLogin('')
    setValueEmail('')
    setValuePassword('')
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  useEffect(() => {
    console.log(`ваш логин: ${login}`)
    console.log(`ваш email: ${email}`)
    console.log(`ваш пароль: ${password}`)
  }, [login, email, password])

  return (
    <div >
      <form className="form" onSubmit={handleSubmit}>
        <ImagePicker />
        <MyInput
          valueLogin={valueLogin} changeLoginInput={changeLoginInput}
          valueEmail={valueEmail} changeEmailInput={changeEmailInput}
          valuePassword={valuePassword} changePasswordInput={changePasswordInput}
        />
        <MyButton toSubmit={toSubmit} />
      </form>
    </div>
  )
}