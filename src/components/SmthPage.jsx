// import React from "react";

// const SmthPage = () => {
//   return (
//     <div >
//       фыв
//     </div>

//   )
// }

// export default SmthPage;

import React, { useState } from "react";

const SmthPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  // debugger;

  return (
    <div>
      {/* {selectedImage && (
        <div>
          <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
          <br />

        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event);
          setSelectedImage(event.target.files[0]);
        }}
      /> */}
      smth page
    </div>
  );
};

export default SmthPage;