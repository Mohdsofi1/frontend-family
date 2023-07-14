import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = () => {
  const [seletedImage, setSelectedImage] = useState(null);
  const handleDrop = (acceptedFiles) => {
    setSelectedImage(acceptedFiles[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: handleDrop,
  });
  return (
    <div
      {...getRootProps()}
      className="bg-white h-[170px] w-[170px] rounded-[50%]"
    >
      {seletedImage && (
        <div className="">
          {/* <h4>Selected Image:</h4> */}
          <img
            className="h-[170px] w-[170px] rounded-[50%]"
            src={URL.createObjectURL(seletedImage)}
            alt="Selected"
          />
          <div className="bg-transparent h-[20px] w-[200px] font-font1 text-[#0f0] cursor-pointer ">
            Click Here To Upload
          </div>
        </div>
      )}
      {/* <input {...getInputProps} /> */}
      {isDragActive ? (
        <p className="bg-black">here</p>
      ) : (
        <p className="text-[#0f0]"></p>
      )}
    </div>
  );
};
export default ImageUpload;
