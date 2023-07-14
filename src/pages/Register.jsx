import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "../components/Box";
import Icon from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const handleSuccessNavigation = () => {
    navigate("/start");
  };
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeBlocked);
  const handleSumbit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const username = event.target[1].value;
    const password = event.target[2].value;

    // send to api
    axios
      .post(`${HOST}/api/register`, {
        email,
        username,
        password,
      })
      .then(function (response) {
        console.info(response.data);
        // navigate to start page when success
        handleSuccessNavigation();
      })
      .catch(function (error) {
        console.error(error.response);
      });
  };
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeBlocked);
      setType("password");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-black ">
      <div className="absolute w-screen h-screen bg-gradient-to-t from-[#000] via-[#0f0] to-[#000] animate-moving-down"></div>
      <Box />

      <form
        onSubmit={handleSumbit}
        className="flex justify-center items-center flex-col absolute h-[600px] w-[400px] rounded-[4px] shadow-shadow-1 bg-[#222] z-[3]"
      >
        <h1 className="text-[#0f0] text-[2em] font-font1 font-[700] mb-[35px]">
          Register
        </h1>
        <input
          className="h-[60px] w-[300px] rounded-[4px] bg-[#333] outline-none mb-[25px] font-font1 pl-[10px]"
          type="text"
          placeholder="Email"
          required
        />
        <input
          className="h-[60px] w-[300px] rounded-[4px] bg-[#333] outline-none mb-[25px] font-font1 pl-[10px]"
          type="text"
          placeholder="Username"
          required
        />
        <div className="flex items-center h-[60px] w-[300px] rounded-[4px] bg-[#333] font-font1 pl-[10px]">
          <input
            className="bg-transparent outline-none w-[260px]"
            type={type}
            placeholder="Password"
            required
          />
          <span onClick={handleToggle}>
            <Icon icon={icon} size={25} className="cursor-pointer" />
          </span>
        </div>
        <Link
          to="/login"
          className="text-[#0f0] font-font1 font-[600] mt-[25px]"
        >
          {" "}
          <span className="text-white font-font1 font-[500] pr-[10px]">
            already register?
          </span>
          Log in
        </Link>
        <button
          type="sumbit"
          className="h-[60px] w-[300px] rounded-[4px] bg-[#0f0] font-font1 text-[#000] font-[700] text-[1.35em] tracking-wider cursor-pointer mt-[30px]"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
