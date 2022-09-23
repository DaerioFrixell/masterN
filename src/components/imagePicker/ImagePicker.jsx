import React, { useRef } from 'react';
import { useReducer } from 'react';
import './imagePicker.scss'
import { addPhoto, reducer } from './imageReducer';

export const ImagePicker = () => {
  const myInput = useRef(null);
  const [state, dispatch] = useReducer(reducer, { image: null })

  const click = () => {
    myInput.current.click();
  }

  const handler = event => {
    event.preventDefault();
    const file = myInput.current.files;
    const url = URL.createObjectURL(file[0])
    dispatch(addPhoto(url))
  }

  const viewImage = state.image
    ? (<img className='wrapper-img-picker__photo' src={state.image} alt={state.image} />)
    : (<div className='wrapper-img-picker__text'>choose photo</div>)

  return (
    <>
      <input
        ref={myInput}
        className='input-file'
        type='file'
        accept=".png, .jpg, .jpeg"
        onChange={handler}

      />
      <div className='wrapper-img-picker' onClick={click}>
        {viewImage}
      </div>
    </>
  );
};