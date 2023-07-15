import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import ImageUpload from "../components/ImageUpload";
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hook/useLocalStorage";
import axios from "axios";
import { HOST } from "../api";

const Start = () => {
  const [cards, setCards] = useState([]);
  const [leftPosition, setLeftPosition] = useState(0);
  const [topPosition, setTopPosition] = useState(0);
  const [jwt, setJwt] = useLocalStorage("token", "");
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };
  const handleNavigateToLogin = () => {
    navigate("/login");
  };
  const fetchUserAccount = () => {
    // get jwt from localStorage
    console.log(jwt);

    // run get api
    axios
      .get(`${HOST}/private`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(function (response) {
        // handle success
        console.info(response);
      })
      .catch(function (error) {
        // handle error
        console.info(error);
        // handleNavigateToLogin();
      })
      .finally(function () {
        //always executed
      });
  };
  useEffect(() => {
    fetchUserAccount();
  }, []);

  const handleDuplicate = () => {
    const newCard = {
      id: Math.random().toString(36).substring(2, 9),
      style: {
        left: `${leftPosition}px`,
      },
    };
    setCards([...cards, newCard]);
    setLeftPosition(leftPosition + 380);
  };

  const handleDuplicateTop = () => {
    const newCard = {
      id: Math.random().toString(36).substring(2, 9),
      style: {
        top: `${topPosition}px`,
      },
    };
    setCards([...cards, newCard]);
    setTopPosition(topPosition + 700);
  };

  const handleRemove = (id) => {
    const updatedCards = cards.filter((cards) => cards.id !== id);
    setCards(updatedCards);
  };

  return (
    <div className="min-h-screen bg-black ">
      <div className="absolute w-screen h-screen bg-gradient-to-t from-[#000] via-[#0f0] to-[#000] animate-moving-down"></div>
      {/* <Box /> */}
      {/* card tambah */}
      <Link
        to="/"
        className="absolute top-[40px] h-[80px] w-[180px] rounded-[7px] shadow-shadow-1 font-[700] text-[18px] flex justify-center items-center bg-[#222] text-[#0f0] font-font1"
      >
        Family Hierarchy
      </Link>
      <button
        className="absolute top-[40px] left-[220px] h-[80px] w-[180px] rounded-[7px] shadow-shadow-1 font-[700] text-[18px] flex justify-center items-center bg-[#222] text-[#0f0] font-font1"
        onClick={handleDuplicate}
      >
        Boxes
      </button>
      <div
        id="h2"
        className="absolute top-[40px] left-[440px] cursor-pointer h-[80px] w-[180px] rounded-[7px] shadow-shadow-1 font-font1"
      >
        <span
          id="h1"
          className="absolute h-[200px] w-[200px] top-[100px] bg-white p-[10px]  rounded-[7px] invisible duration-[0.5] font-font1"
        >
          You can start by click button boxes and then it will appear card
          information and just put the information{" "}
        </span>
        <span className="flex items-center text-center font-[600] h-[80px] w-[180px] rounded-[7px] bg-[#222] text-[#0f0]">
          How To Use Family Hierarchy
        </span>
      </div>
      <button
        onClick={handleLogOut}
        className="absolute top-[40px] left-[640px] h-[80px] w-[180px] rounded-[7px] shadow-shadow-1 font-[700] text-[18px] flex justify-center items-center bg-[#222] text-[#0f0] font-font1"
      >
        Log Out
      </button>
      {cards.map((card) => (
        <div
          id="card"
          style={card.style}
          key={card.id}
          className="top-[140px]  flex justify-center items-center flex-col absolute h-[550px] w-[350px] rounded-[4px] shadow-shadow-1 bg-[#222] z-[3]"
        >
          <button
            className="h-[20px] w-[20px]"
            onClick={() => handleRemove(card.id)}
          ></button>
          {/* button plus */}
          <div
            id="c1"
            className="absolute bg-transparent h-[200px] w-[25px] left-[335px] "
          >
            <div
              onClick={handleDuplicate}
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
          <div
            id="gambar-profile"
            className="bg-white h-[170px] w-[170px] rounded-[50%] mb-[25px]"
          >
            <ImageUpload />
          </div>
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
              placeholder="Relationship"
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
          <div
            id="c1"
            className="absolute bg-transparent h-[25px] w-[300px] top-[540px] "
          >
            <div
              onClick={handleDuplicateTop}
              id="c2"
              className="left-[100px] top-[-40px] absolute h-[100px] w-[100px] rotate-135 bg-[#0f0] invisible"
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
        </div>
      ))}
    </div>
  );
};

export default Start;
