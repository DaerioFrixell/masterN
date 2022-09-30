import React from "react";
import "./loader.scss"

export const Loader = ({ loading }) => {

  return (
    <div className="loader">
      <p className="loader__text">{loading}</p>
      <div className="loader__rotate"></div>
    </div>
  )
}