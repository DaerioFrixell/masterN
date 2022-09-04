import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Button from "./UI/Button";


const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const myInput = useRef(null);
  // debugger;

  // useEffect(() => {
  //   console.log('didUpdate')
  // }, [selectedImage])

  const choosePhoto = () => {
    myInput.current.click();
  }

  const onPhotoChange = event => {
    console.log(event.target.files[0])
    setSelectedImage(event.target.files[0]);
  }



  return (
    <div>
      {selectedImage === null
        ? (<div className="defaultPhoto"></div>)
        : <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />


          <div>
            <button onClick={() => setSelectedImage(null)}>remove</button>
          </div>
        </div>}

      <Button choosePhoto={choosePhoto} />

      <input
        className="inputFile"
        type="file"
        onChange={onPhotoChange}
        ref={myInput}
      />
    </div>
  );
};

export default ImagePicker;