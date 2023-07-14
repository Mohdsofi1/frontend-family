import React from "react";
import Plus from "../components/Plus";

const Card = () => {
  return (
    <div className="top-[50px] left-[100px] flex justify-center items-center flex-col absolute h-[550px] w-[350px] rounded-[4px] shadow-shadow-1 bg-[#222] z-[3]">
      <Plus />
      <div className="bg-white h-[170px] w-[170px] rounded-[50%] mb-[25px]"></div>
      <div className="flex items-center h-[30px] w-[300px] rounded-[4px] bg-[#333] mb-[20px] font-font1 pl-[10px]">
        <textarea
          className="bg-transparent outline-none"
          name=""
          placeholder="Name"
          id=""
          cols="40"
          rows="1"
        ></textarea>
      </div>
      <div className="flex items-center h-[30px] w-[300px] rounded-[4px] bg-[#333] mb-[20px] font-font1 pl-[10px]">
        <textarea
          className="bg-transparent outline-none"
          name=""
          placeholder="No Telephone"
          id=""
          cols="40"
          rows="1"
        ></textarea>
      </div>
      <div className="flex items-center h-[30px] w-[300px] rounded-[4px] bg-[#333] mb-[20px] font-font1 pl-[10px]">
        <textarea
          className="bg-transparent outline-none"
          name=""
          placeholder="Date of Birth"
          id=""
          cols="40"
          rows="1"
        ></textarea>
      </div>
      <div className="flex items-center h-[150px] w-[300px] rounded-[4px] bg-[#333] mb-[20px] font-font1 pl-[10px]">
        <textarea
          className="bg-transparent outline-none"
          name=""
          placeholder="Home Address"
          id=""
          cols="40"
          rows="5"
        ></textarea>
      </div>
    </div>
  );
};

export default Card;
