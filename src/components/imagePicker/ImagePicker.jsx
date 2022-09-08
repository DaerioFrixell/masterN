import React, { useState, useRef } from 'react';
import './imagePicker.scss'

export const ImagePicker = () => {
  const myInput = useRef(null);
  const [image, setImage] = useState(null)
  // const [imageName, setImageName] = useState(null) //отображать название файла

  const click = () => {
    console.log('button is pressed')
    myInput.current.click();
  }

  const handler = event => {
    event.preventDefault();
    const file = myInput.current.files;
    // setImageName(file[0]) //отображать название файла
    const url = URL.createObjectURL(file[0])
    setImage(url)
  }

  return (
    <div>
      <input
        className='input-file'
        type='file'
        ref={myInput}
        onChange={handler}
        accept=".png, .jpg, .jpeg"
      />

      <div className='wrapper-img-picker' onClick={click}>
        {image
          ? (<img className='photo-img-picker' src={image} alt={image} />)
          : (<div className='empty-img-picker-text'>choose photo</div>)}
      </div>

      {/* <div>{imageName ? imageName.name : "choose a photo"}</div> */}
    </div>
  );
};