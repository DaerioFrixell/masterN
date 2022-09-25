import React, { memo } from "react";
import "./button.scss"

export const Button = memo(({ onClick, isSubmit, nameBtn }) =>
  <button
    className="button"
    onClick={onClick}
    type={isSubmit ? 'submit' : 'button'}
  >{nameBtn}</button>)

