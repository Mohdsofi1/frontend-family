import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "../components/Box";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div className="flex min-h-screen bg-black ">
      <div className="absolute w-screen h-screen bg-gradient-to-t from-[#000] via-[#0f0] to-[#000] animate-moving-down"></div>
      <Box />
      <div className="z-[4]">
        <h1 className="absolute top-[40px] left-[40px] h-[80px] w-[180px] rounded-[7px] shadow-shadow-1 font-[700] text-[18px] flex justify-center items-center bg-[#222] text-[#0f0] font-font1">
          Family Hierarchy
        </h1>
        <Link
          to="/register"
          className="absolute top-[40px] right-[40px] h-[80px] w-[180px] rounded-[7px] shadow-shadow-1 font-[700] text-[18px] flex justify-center items-center bg-[#222] text-[#0f0] font-font1"
        >
          Register
        </Link>
        <Link
          to="/login"
          className="absolute top-[40px] right-[240px] h-[80px] w-[180px] rounded-[7px] shadow-shadow-1 font-[700] text-[18px] flex justify-center items-center bg-[#222] text-[#0f0] font-font1"
        >
          Log in
        </Link>
        <div
          id="h2"
          className="absolute bottom-[40px] left-[40px] cursor-pointer h-[80px] w-[180px] rounded-[7px] shadow-shadow-1 font-font1"
        >
          <span
            id="h1"
            className="absolute h-[300px] w-[300px] bottom-0 bg-white p-[10px]  rounded-[7px] invisible duration-[0.5]"
          >
            Family hierarchy refers to the organization and structure of
            authority and relationships within a family. It defines the relative
            positions and roles of family members based on factors such as age,
            gender, and generational position. Family hierarchy helps establish
            a framework for decision-making, responsibilities, and the
            distribution of power within the family unit.
          </span>
          <span className="flex items-center text-center font-[600] h-[80px] w-[180px] rounded-[7px] bg-[#222] text-[#0f0]">
            What is Family Hierarchy
          </span>
        </div>
        <div
          id="h2"
          className="absolute bottom-[40px] left-[550px] cursor-pointer h-[80px] w-[300px] rounded-[7px] shadow-shadow-1 font-font1"
        >
          <span
            id="h1"
            className="absolute h-[300px] w-[300px] bottom-0 bg-white p-[10px]  rounded-[7px] invisible duration-[0.5]"
          >
            Family hierarchy often plays a role in maintaining continuity and
            preserving family traditions. Older generations pass down their
            values, beliefs, and customs to younger family members, ensuring the
            continuation of cultural practices and family legacies.
          </span>
          <span className="flex justify-center items-center font-[600] h-[80px] w-[300px] rounded-[7px] bg-[#222] text-[#0f0]">
            What is Family Hierarchy For
          </span>
        </div>
        <div
          id="h2"
          className="absolute bottom-[40px] right-[40px] cursor-pointer h-[80px] w-[180px] rounded-[7px] shadow-shadow-1 font-font1"
        >
          <span
            id="h1"
            className="absolute h-[200px] w-[200px] bottom-0 bg-white p-[10px]  rounded-[7px] invisible duration-[0.5]"
          >
            You can start by click button boxes and then it will appear card
            information and just put the information
          </span>
          <span className="flex items-center text-center font-[600] h-[80px] w-[180px] rounded-[7px] bg-[#222] text-[#0f0]">
            How To Use Family Hierarchy
          </span>
        </div>
        <Link
          to="/start"
          className="absolute top-[250px] left-[600px] flex justify-center items-center cursor-pointer shadow-shadow-1 font-font1 font-[600] rounded-[7px] h-[80px] w-[180px] bg-[#222] text-[#0f0]"
        >
          Let's Start
        </Link>
      </div>
    </div>
  );
};

export default Home;
