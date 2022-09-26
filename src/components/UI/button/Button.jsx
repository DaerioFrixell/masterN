import React, { memo } from "react";
import cn from "classnames";
import "./button.scss";

export const Button = memo(({ text, onClick, className }) => {
  return (
    <button className={cn("button", className)} onClick={onClick}>
      {text}
    </button>
  );
});
