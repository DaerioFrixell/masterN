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

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div >
      <form
        className="form"
        onSubmit={handleSubmit}>
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

      <p className="form__answer">
        ваш логин:<span className="form__answer-value" >{login}</span>
      </p>
      <p className="form__answer">
        ваш email: <span className="form__answer-value">{email}</span>
      </p>
      <p className="form__answer">
        ваш пароль: <span className="form__answer-value" >{password}</span>
      </p>
    </div>
  )
}