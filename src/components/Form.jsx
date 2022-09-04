import React from "react";
// import { useState } from "react";
import ImagePicker from "./ImagePicker";

const Form = () => {

  // const [photo, setPhoto] = useState('null')
  // const input = document.getElementsByClassName('input')
  // let ar = []

  const click = (e) => { }



  return (
    <div >
      <form >
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