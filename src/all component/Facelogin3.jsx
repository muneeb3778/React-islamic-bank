import React from 'react'

// Import assets
import BackgroundGraphic from '../assets/Walletimages/BackgroungGraphic.png'
import AeroLeft from '../assets/facelogin/aeroleft.png'
import AeroRight from '../assets/facelogin/aeroright.png'
import Smiley from '../assets/facelogin/smily.png'
import Ellipse from "../assets/Fingerprint/Ellipse.png";
import { ArrowLeft } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Facelogin3 = () => {
  
  const Navigate = useNavigate()

  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] relative overflow-hidden">
        <div className="absolute top-2 left-[-191px]">
          <img src={BackgroundGraphic} alt="Background Graphic" />
        </div>

        <div className="absolute top-[20px] left-[20px] z-20">
          <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <ArrowLeft size={20} onClick={()=>{Navigate('/facelogin')}} className="text-gray-700" />
          </button>
        </div>

        <div className="w-[220px] h-[256px] absolute top-[118px] left-[50px] flex flex-col items-center justify-between">
          <div className="w-[164px] h-[164px] rounded-full bg-white blur-[2px] shadow-[0_0_25px_1px_#D4A852] flex justify-center items-center border border-[#D4A852]" />

          <div className="w-[164px] h-[164px] absolute">
            <img src={Ellipse} alt="ellipse" />
          </div>

          <div className="w-[89px] h-[89px] absolute top-[40px]">
            <img className="z-10" src={Smiley} alt="Smiley Face" />
          </div>

          <div className="mb-2">
            <p className="text-center text-[28px] font-bold">Enable Face ID</p>
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
  )
}

export default Facelogin3
// muneeb