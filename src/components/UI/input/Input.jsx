import React from "react";
import './input.scss'

export const MyInput = ({
  valueLogin,
  changeLoginInput,
  valueEmail,
  changeEmailInput,
  valuePassword,
  changePasswordInput

}) => {
  return (
    <>
      <input
        className="my-input"
        placeholder="введите логин"
        value={valueLogin}
        onChange={changeLoginInput}
      />
      <input
        className="my-input"
        placeholder="введите email"
        value={valueEmail}
        onChange={changeEmailInput} />
      <input
        className="my-input"
        placeholder="введите пароль"
        value={valuePassword}
        onChange={changePasswordInput} />

    </>
  )
}