import React from "react";
import './generalInputs.scss';
import cn from 'classnames';

export const Input = ({
  value,
  onChange,
  placeholder = "введите значение",
  className = "",
}) => {
  return (
    <input
      className={cn("input", className)}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}
