import React from "react";
import "./button.scss"

export const MyButton = ({ toSubmit }) => {
  return (
    <button
      className="my-button"
      type="submit"
      onClick={toSubmit}
    >submit</button>
  )
}