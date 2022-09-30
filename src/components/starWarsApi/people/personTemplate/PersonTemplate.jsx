import React from "react";
import "./peopleTemplate.scss"

export const PersonTemplate = ({ name, old, eye }) => {
  return (
    <div className="people">
      <p>имя: {name}</p>
      <p>возраст: {old}</p>
      <p>цвет глаз: {eye}</p>
    </div>
  )
}





