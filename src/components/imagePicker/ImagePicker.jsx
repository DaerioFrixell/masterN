import React, { useState, useRef } from 'react';
import './imagePicker.scss'

export const ImagePicker = () => {
  const myInput = useRef(null);
  const [image, setImage] = useState(null)

  const click = () => {
    console.log('button is pressed')
    myInput.current.click();
  }

  const handler = event => {
    event.preventDefault();
    const file = myInput.current.files;
    const url = URL.createObjectURL(file[0])
    setImage(url)
  }

  const viewImage = image
    ? (<img className='wrapper-img-picker__photo' src={image} alt={image} />)
    : (<div className='wrapper-img-picker__text'>choose photo</div>)

  return (
    <>
      <input
        className='input-file'
        type='file'
        ref={myInput}
        onChange={handler}
        accept=".png, .jpg, .jpeg"
      />
      <div className='wrapper-img-picker' onClick={click}>
        {viewImage}
      </div>
    </>
  );
};