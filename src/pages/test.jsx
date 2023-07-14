import React, { useState } from "react";
import ImageUpload from "../components/ImageUpload";

const Test = () => {
  return (
    <div>
      <div className="bg-[blue] h-[170px] w-[170px] rounded-[50%] mb-[25px] ">
        <ImageUpload />
      </div>
    </div>
  );
};

export default Test;
