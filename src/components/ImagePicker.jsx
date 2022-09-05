import React, { useState, useRef } from 'react';
// import { useEffect } from 'react';
// import Button from './UI/Button';





const ImagePicker = () => {
  const myInput = useRef(null);
  const [image, setImage] = useState(null)
  const [imageName, setImageName] = useState(null)

  // const classes = []
  // if (image) {
  //   'true'
  // } else 'false'

  const click = () => {
    console.log('button is pressed')
    myInput.current.click();
  }

  const handler = event => {
    event.preventDefault();
    const file = myInput.current.files;
    setImageName(file[0])
    const url = URL.createObjectURL(file[0])
    setImage(url)
  }

  return (
    <div>
      <input
        className='inputFile'
        type='file'
        ref={myInput}
        onChange={handler}
        accept=".png, .jpg, .jpeg"
      />

      <div className='WrapperImgPicker' onClick={click}>
        <img className='PhotoImgPicker'
          src={image
            // ? image
            // : ('https://avatars.dzeninfra.ru/get-zen_doc/5227693/pub_6151af695f867d06a88b0899_6151af7b7b505c416854713d/scale_1200')
          }
          alt='not found'
        ></img>
      </div>
      <div>{imageName ? imageName.name : "choose a photo"}</div>
    </div>
  );
};

export default ImagePicker;