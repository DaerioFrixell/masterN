import React from "react";
import './generalInputs.scss'

export const FormPassword = ({ value, setValue }) => {
  return (
    <input
      className="input"
      placeholder="введите пароль"
      value={value}
      onChange={setValue}
    />
  )
}
