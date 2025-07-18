import React from "react";

// Importing images
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import AeroLeft from "../assets/facelogin/aeroleft.png";
import FingerprintImage from "../assets/Fingerprint/Group 125.png";
import AeroRight from "../assets/facelogin/aeroright.png";
import { ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'



const Fingerprint = () => {

  const Navigate=useNavigate()  

  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] relative overflow-hidden">
        <div className="absolute top-2 left-[-191px]">
          <img src={BackgroundGraphic} alt="" />
        </div>
        <div className="absolute top-[20px] left-[20px] z-20">
          <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <ArrowLeft size={20} onClick={()=>{Navigate('/wallet')}} className="text-gray-700" />
          </button>
        </div>

        <div className="w-[220px] h-[256px] absolute top-[118px] left-[50px] flex flex-col items-center justify-between">
          <div className="w-[164px] h-[164px] rounded-[50%] bg-[#FFFFFF] blur-[2px]  shadow-[0_0_25px_1px_#D4A852] flex justify-center items-center"></div>
          <div className="w-[89px] h-[89px] text-[#CCCCCC] absolute top-[40px]">
            <img className="z-10" src={FingerprintImage} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-center h-[32px] w-[248px] top-[306px] left-[36px] text-[28px] font-bold">
              Enable Fingerprint
            </p>
            <p className="text-center text-[#6A6A6A] text-[12px]">
              Let us call you to integrate the <br /> activation.
            </p>
          </div>
        </div>
        <Link to={"/fingerprint2"}>
          <button className="w-[272px] h-[38px] absolute top-[506px] left-[24px] rounded-[8px] border-[#FFFFFF] bg-[#000000] text-white">
            Set Up
          </button>
          <img
            className="w-[7.07px] h-[7.07px] absolute top-[520px] left-[274px]"
            src={AeroRight}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Fingerprint;
