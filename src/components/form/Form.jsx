import React, { useState } from "react";

import ImagePicker from "../imagePicker/ImagePicker";
import './form.scss'

const Form = () => {
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
    <>
      <ImagePicker />
      <form
        className="form"
        onSubmit={hundleSubmit}>


        <input
          className="formItemInput"
          placeholder="введите логин"
          value={valueLogin}
          onChange={changeLoginInput}
        />

        <input
          className="formItemInput"
          placeholder="введите email"
          value={valueEmail}
          onChange={changeEmailInput} />

        <input
          className="formItemInput"
          placeholder="введите пароль"
          value={valuePassword}
          onChange={changePasswordInput} />

        <button
          className="formItemBtn"
          type="submit"
          onClick={toSubmit}
        >submit</button>
      </form>


      <div className="formAnswerItem">
        ваш логин: <span className="formAnswerSpan" >{login}</span>
      </div>

      <div className="formAnswerItem">
        ваш email: <span className="formAnswerSpan" >{email}</span>
      </div>

      <div className="formAnswerItem">
        ваш пароль: <span className="formAnswerSpan" >{password}</span>
      </div>
    </>
  )
}

export default Form