import React from "react";
import "./planets.scss"

export const Planets = ({ name, population, rotate }) => {
  return (
    <div className="planets">
      <p>название: {name}</p>
      <p>население: {population}</p>
      <p>период вращения: {rotate}</p>
    </div>
  )
}