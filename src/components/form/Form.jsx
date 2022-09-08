import React, { useState } from "react";

import { ImagePicker } from "../imagePicker/ImagePicker";
import './form.scss'

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

  const hundleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div >
      <form
        className="form"
        onSubmit={hundleSubmit}>
        <ImagePicker />

        <input
          className="form__item-input"
          placeholder="введите логин"
          value={valueLogin}
          onChange={changeLoginInput}
        />

        <input
          className="form__item-input"
          placeholder="введите email"
          value={valueEmail}
          onChange={changeEmailInput} />

        <input
          className="form__item-input"
          placeholder="введите пароль"
          value={valuePassword}
          onChange={changePasswordInput} />

        <button
          className="form__item-btn"
          type="submit"
          onClick={toSubmit}
        >submit</button>
      </form>

      <div className="form__answer-item">
        ваш логин:<span className="form__answer-span" >{login}</span>
      </div>

      <div className="form__answer-item">
        ваш email: <span className="form__answer-span">{email}</span>
      </div>

      <div className="form__answer-item">
        ваш пароль: <span className="form__answer-span" >{password}</span>
      </div>
    </div>
  )
}