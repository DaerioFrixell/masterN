import React from "react";

import ImagePicker from "./ImagePicker";

const Form = () => {
  const hundleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div >
      <form onSubmit={hundleSubmit}>
        <ImagePicker />
        <div><input placeholder="введите логин" /></div>
        <div><input placeholder="введите email" /></div>
        <div><input placeholder="введите пароль" /></div>
        <button type="submit" >submit</button>
      </form>
    </div>
  )
}

export default Form