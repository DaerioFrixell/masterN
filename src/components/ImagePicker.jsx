import React, { useState } from "react";

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // debugger;



  return (
    <div>
      {selectedImage === null
        ? (<div className="defaultPhoto"></div>)
        : <div>
          <img
            alt="not fount"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)} />
          <div>
            <button onClick={() => setSelectedImage(null)}>remove</button>
          </div>
        </div>}
      {/* {selectedImage && (
        <div>
          <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
          <div><button onClick={() => setSelectedImage(null)}>remove</button></div>
        </div>
      )} */}

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event);
          setSelectedImage(event.target.files[0]);
        }}
      />

    </div>
  );
};

export default ImagePicker;