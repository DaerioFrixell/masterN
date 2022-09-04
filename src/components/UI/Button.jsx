import React from "react";

const Button = ({ choosePhoto }) => {

  return (
    <div>
      <button onClick={() => choosePhoto()}>choosePhoto</button>
    </div>)
}

export default Button;