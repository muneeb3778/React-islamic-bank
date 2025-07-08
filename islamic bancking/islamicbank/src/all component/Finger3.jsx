import React from "react";
import { Link } from "react-router-dom";

// Import all required images
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import AeroLeft from "../assets/facelogin/aeroleft.png";
import AeroRight from "../assets/facelogin/aeroright.png";
import Ellipse from "../assets/Fingerprint/Ellipse.png";
import FingerprintComplete from "../assets/Fingerprint/Group 133.png";
import SmileyFace from "../assets/facelogin/smily.png";

const Finger3 = () => {
  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] relative overflow-hidden">
        <div className="absolute top-2 left-[-191px]">
          <img src={BackgroundGraphic} alt="Background Graphic" />
        </div>

        <Link to={"/fingerprint"}>
          <div className="w-[10px] h-[10px] absolute top-[23.93px] left-[24px]">
            <img src={AeroLeft} alt="Back Arrow" />
          </div>
        </Link>

        <div className="w-[220px] h-[256px] absolute top-[118px] left-[50px] flex flex-col items-center justify-between">
          <div className="w-[164px] h-[164px] rounded-full bg-white blur-[2px] shadow shadow-[#D4A852] flex justify-center items-center border border-[#D4A852]">
            {/* Empty circle background */}
          </div>

          <div className="w-[164px] h-[164px] absolute">
            <img src={Ellipse} alt="Elliptical Ring" />
          </div>

          <div className="w-[104px] h-[104px] absolute top-[30px] rounded-full">
            <img src={FingerprintComplete} alt="Fingerprint Complete" />
          </div>

          <div>
            <p className="text-center text-[28px] w-[300px] font-bold">
              Enable Fingerprint
            </p>
            <p className="text-center text-[#6A6A6A] text-[12px]">All Set!</p>
          </div>
        </div>

        <button className="w-[272px] h-[38px] absolute top-[506px] left-[24px] rounded-[8px] border-white bg-black text-white">
          Finish
        </button>
        <img
          className="w-[10px] h-[7.07px] absolute top-[520px] left-[274px]"
          src={AeroRight}
          alt="Next Arrow"
        />
      </div>
    </div>
  );
};

export default Finger3;