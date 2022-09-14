import React from "react";
import './generalInputs.scss'

export const FormEmail = ({ value, setValue }) => {
  return (
    <input
      className="input"
      placeholder="введите email"
      value={value}
      onChange={setValue}
    />

  )
}
