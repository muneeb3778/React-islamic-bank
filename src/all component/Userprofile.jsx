import React from 'react'
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

// Importing images
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import AeroLeft from "../assets/facelogin/aeroleft.png";
import FingerprintImage from "../assets/Fingerprint/Group 125.png";
import AeroRight from "../assets/facelogin/aeroright.png";

const Userprofile = () => {
  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] relative overflow-hidden">
        <div className="absolute top-2 left-[-191px]">
          <img src={BackgroundGraphic} alt="" />
        </div>
        <div className="w-[15px] h-[10px] absolute top-[23.93px] left-[24px]">
          <img src={AeroLeft} alt="" />
        </div>
        <div className="w-[220px] h-[256px] absolute top-[65px] left-[50px] flex flex-col items-center justify-between">
          <div className="w-[164px] h-[164px] rounded-[50%] bg-[#FFFFFF] blur-[2px] shadow shadow-[#D4A852]"></div>
          <div className="w-[89px] h-[89px] text-[#CCCCCC] absolute top-[40px]">
            <img className="z-10" src={""} alt="" />
          </div>
          <div className="flex flex-col gap-6 absolute top-[200px]">
            <p className=" h-[32px] w-[248px] top-[306px] text-[28px] font-bold flex gap-6 mr-[30px]">
              <FiUser className='h-[30px] w-[30px]'/>   User Name
            </p>
            <p className="text-[#6A6A6A] text-[15px] flex gap-6 ml-1">
               <MdMarkEmailUnread className='h-[20px] w-[20px] text-black'/>    <span className='underline ml-2'>abc@gmail.com</span>
            </p>
            <p className="text-[#6A6A6A] text-[15px] flex gap-6 ml-1">
               <FaPhoneVolume className='h-[20px] w-[20px] text-black'/>    <span className=' ml-2'>987654321</span>
            </p>           
          </div>
        </div>
          <button className="w-[272px] h-[38px] absolute top-[506px] left-[24px] rounded-[8px] border-[#FFFFFF] bg-[#000000] text-white">
            Edit
          </button>
      </div>
    </div>
  )
}

export default Userprofile