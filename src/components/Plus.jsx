import React from "react";

const Plus = () => {
  return (
    <div
      id="c1"
      className="absolute bg-transparent h-[200px] w-[25px] left-[335px] "
    >
      <div
        id="c2"
        className="left-[-35px] absolute h-[100px] w-[100px] rotate-45 bg-[#0f0] invisible "
      >
        <div className="absolute top-[20px] left-[50px] rotate-45 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Plus;
