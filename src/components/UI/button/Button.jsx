import React, { memo } from "react";
import "./button.scss"

export const Button = memo(({ name }) =>
  <button className="button" >{name}</button>)

