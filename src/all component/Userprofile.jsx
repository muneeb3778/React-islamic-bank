import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

// Importing images
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import AeroLeft from "../assets/facelogin/aeroleft.png";
import axios from 'axios';

const Userprofile = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState({});

 
  useEffect(() => {
  fetch('https://8bf14634a4a6.ngrok-free.app/api/sunduk-service/custom-login', {
    method: 'GET',
    credentials: 'include',
  })
    .then((res) => {
      console.log(res.data);
      
      if (!res.ok) throw new Error('Not logged in');
      return res.json();
    })
    .then((data) => {
      console.log('User Data:', data);
      setUserData(data)
      // Set user state or navigate
    })
    .catch((err) => {
      console.log('Not logged in');

    });
}, []);



  const indexing = userdata.fullName ? userdata.fullName[0].toUpperCase() : '';

  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] relative overflow-hidden">
        <div className="absolute top-2 left-[-191px]">
          <img src={BackgroundGraphic} alt="background" />
        </div>

        <div onClick={() => navigate(-1)} className="w-[15px] h-[10px] absolute top-[23.93px] left-[24px] cursor-pointer">
          <img src={AeroLeft} alt="back" />
        </div>

        <div className="w-[220px] h-[256px] absolute top-[65px] left-[50px] flex flex-col items-center justify-between">
          <div className="w-[164px] shadow-[0_0_25px_1px_#D4A852] h-[164px] rounded-full bg-white"></div>

          <div className="w-[166px] h-[164px] rounded-full overflow-hidden text-[#CCCCCC] absolute top-0 flex items-center justify-center">
            {userdata.image ? (
              <img className="z-10 w-full h-full object-cover" src={userdata.image} alt="user" />
            ) : (
              <div className="z-10 text-6xl flex items-center justify-center bg-stone-500 text-white w-full h-full">
                {indexing}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-6 absolute top-[240px]">
            <p className="h-[32px] w-[300px] text-[28px] font-bold flex gap-3 items-center">
              <FiUser className="h-[30px] w-[30px]" />
              <span>{userdata.fullName || 'N/A'}</span>
            </p>
            <p className="text-[#6A6A6A] text-[15px] flex items-center gap-2 ml-1">
              <MdMarkEmailUnread className="h-[20px] w-[20px] text-black" />
              <span className="underline ml-2">{userdata.email || 'N/A'}</span>
            </p>
            <p className="text-[#6A6A6A] text-[15px] flex items-center gap-2 ml-1">
              <FaPhoneVolume className="h-[20px] w-[20px] text-black" />
              <span className="ml-2">{userdata.phonenumber || 'N/A'}</span>
            </p>
          </div>
        </div>

        <button className="w-[272px] h-[38px] absolute top-[506px] left-[24px] rounded-[8px] bg-black text-white">
          Edit
        </button>
      </div>
    </div>
  );
};

export default Userprofile;