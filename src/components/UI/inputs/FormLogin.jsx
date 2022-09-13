import React from "react";
import './generalInputs.scss'

export const FormLogin = ({ value, setValue }) => {
  return (
    <input
      className="my-input"
      placeholder="введите логин"
      value={value}
      onChange={setValue}
    />
  )
}