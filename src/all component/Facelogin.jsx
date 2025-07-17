import React from 'react'
import { Link } from 'react-router-dom'

// Importing images correctly
import BackgroundGraphic from '../assets/Walletimages/BackgroungGraphic.png'
import AeroLeft from '../assets/facelogin/aeroleft.png'
import AeroRight from '../assets/facelogin/aeroright.png'
import Smiley from '../assets/facelogin/smily.png'

const Facelogin1 = () => {
  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] relative overflow-hidden">
        <div className="absolute top-2 left-[-191px]">
          <img src={BackgroundGraphic} alt="Background Graphic" />
        </div>

        <div className="w-[10px] h-[10px] absolute top-[23.93px] left-[24px]">
          <img src={AeroLeft} alt="Back Arrow" />
        </div>

        <div className="w-[220px] h-[256px] absolute top-[118px] left-[50px] flex flex-col items-center justify-between">
          <div className="w-[164px] h-[164px] rounded-full bg-white blur-[2px] shadow-[0_0_25px_1px_#D4A852] flex justify-center items-center">
            {/* Decorative circle */}
          </div>

          <div className="w-[89px] h-[89px] absolute top-[40px]">
            <img className="z-10" src={Smiley} alt="Face ID Smiley" />
          </div>

          <div>
            <p className="text-center text-[28px] font-bold">Enable Face ID</p>
            <p className="text-center text-[#6A6A6A] text-[12px]">
              Let Us Call You To Integrate The Activation.
            </p>
          </div>
        </div>

        <Link to="/Facelogin2">
          <button className="w-[272px] h-[38px] absolute top-[506px] left-[24px] rounded-[8px] border-white bg-black text-white">
            Set Up
          </button>
          <img
            className="w-[10px] h-[7.07px] absolute top-[520px] left-[274px]"
            src={AeroRight}
            alt="Next Arrow"
          />
        </Link>
      </div>
    </div>
  )
}

export default Facelogin1
// muneeb