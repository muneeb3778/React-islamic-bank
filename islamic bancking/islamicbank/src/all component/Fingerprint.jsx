import React from "react"
import { Link } from "react-router-dom"



const Fingerprint = () => {

  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className='bg-white w-[320px] h-[568px] relative overflow-hidden'>
        <div className="absolute top-2 left-[-191px]">
        <img src="src/assets/Walletimages/BackgroungGraphic.png" alt="" />
        </div>
        <div className='w-[10px] h-[10px] absolute top-[23.93px] left-[24px]'>
            <img src="src/assets/facelogin/aeroleft.png" alt="" />
        </div>
       <div className='w-[220px] h-[256px] absolute top-[118px] left-[50px] flex flex-col items-center justify-between'>
       <div className='w-[164px] h-[164px] rounded-[50%] bg-[#FFFFFF] blur-[2px] shadow shadow-[#D4A852] flex justify-center items-center'>
        </div> 
        <div className='w-[89px] h-[89px] text-[#CCCCCC] absolute  top-[40px]'>
        <img className='z-10' src="src/assets/Fingerprint/Group 125.png" alt="" />
        </div>
        <div className="flex flex-col gap-2">
        <p className='text-center h-[32px] w-[248px] top-[306px] left-[36px] text-[28px] font-bold'>Enable Fingerprint </p>
        <p className='text-center text-[#6A6A6A] text-[12px]'>Let us call you to integrate the <br /> activation.</p>
        </div>
       </div>
       <Link to={'/fingerprint2'}>
         <button className='w-[272px] h-[38px] absolute top-[506px] left-[24px] rounded-[8px] border-[#FFFFFF] bg-[#000000] text-white'>Set Up</button>
         <img className='w-[7.07px] h-[7.07px] absolute top-[520px] left-[274px]' src="src/assets/facelogin/aeroright.png" alt="" />
       </Link>
      </div>
  </div>

  )
}

export default Fingerprint
