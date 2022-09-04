import React, {useRef} from "react";
// import { useState } from "react";

const SmthPage = () => {
  
  const myInput = useRef(null); 
  
  const click = () => {    
    // console.log(myInput) 
      // myInput.current?.focus();    
      // myInput.current?.click();
  }

  return (
      <div>   
        <div ></div>
        <input 
        type='file' 
        ref={myInput}
        />      
          <button  onClick={click}>Trigger</button>
      </div>
  );
}

export default SmthPage;


// const SmthPage = () => {
//   const [selectedImage, setSelectedImage] = useState(null);
  
//   return (
//     <div>
//       {selectedImage && (
//         <div>
//           <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
//           <br />

//         </div>
//       )}
//       <br />

//       <br />
//       <input
//         type="file"
//         name="myImage"
//         onChange={(event) => {
//           console.log(event);
//           setSelectedImage(event.target.files[0]);
//         }}
//       />
      
//     </div>
//   );
// };

// export default SmthPage;