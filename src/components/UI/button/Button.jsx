import React from "react";

const Button = ({ onClickchoosePhoto }) => {

  return (
    <div>
      <label onClick={onClickchoosePhoto}>choosePhoto</label>
    </div>)
}

export default Button;