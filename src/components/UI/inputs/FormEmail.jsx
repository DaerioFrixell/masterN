import React from "react";
import './generalInputs.scss'

export const FormEmail = ({ value, setValue }) => {
  return (
    <input
      className="my-input"
      placeholder="введите email"
      value={value}
      onChange={setValue}
    />

  )
}
