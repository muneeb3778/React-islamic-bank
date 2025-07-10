import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Contextapi";

// Import images using relative paths
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import AeroLeft from "../assets/facelogin/aeroleft.png";
import AeroRight from "../assets/facelogin/aeroright.png";
import CurveLine from "../assets/Fingerprint/curvline.png";
import FingerprintProgress from "../assets/Fingerprint/Group 127.png";

const Finger2 = () => {
  const navigate = useNavigate();

  // Use useEffect for side effects like navigation
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/fingerprint3");
    }, 2000);

    // Cleanup to avoid memory leaks
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] relative overflow-hidden">
        <div className="absolute top-2 left-[-191px]">
          <img src={BackgroundGraphic} alt="Background Graphic" />
        </div>
        <div className="w-[10px] h-[10px] absolute top-[23.93px] left-[24px]">
          <img src={AeroLeft} alt="Left Arrow" />
        </div>

        <div className="w-[220px] h-[256px] absolute top-[118px] left-[50px] flex flex-col items-center justify-between">
          <div className="w-[164px] h-[164px] rounded-full bg-white blur-[2px] shadow shadow-[#D4A852] flex justify-center items-center border border-[#D4A852]">
            {/* Empty circular div */}
          </div>
          <div className="w-[84.5px] h-[84.5px] absolute left-[110px]">
            <img src={CurveLine} alt="Curve Line" />
          </div>
          <div className="w-[89px] h-[89px] absolute top-[40px]">
            <img className="z-10" src={FingerprintProgress} alt="Fingerprint Icon" />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-center h-[32px] w-[248px] text-[28px] font-bold">
              Enable Fingerprint
            </p>
            <p className="text-center text-[#6A6A6A] text-[12px]">
              Let us call you to integrate the <br /> activation.
            </p>
          </div>
        </div>

        <button className="w-[272px] h-[38px] absolute top-[506px] left-[24px] rounded-[8px] border-white bg-gray-300 text-white">
          One Moment...
        </button>
        <img
          className="w-[10px] h-[7.07px] absolute top-[520px] left-[274px]"
          src={AeroRight}
          alt="Right Arrow"
        />
      </div>
    </div>
  );
};

export default Finger2;
