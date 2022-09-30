import React from "react";
import "./planetTemplate.scss"

export const PlanetTemplate = ({ name, population, rotate }) => {
  return (
    <div className="planet">
      <p>название: {name}</p>
      <p>население: {population}</p>
      <p>период вращения: {rotate}</p>
    </div>
  )
}