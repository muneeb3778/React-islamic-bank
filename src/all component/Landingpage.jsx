import React from 'react'
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { PiQrCodeLight } from "react-icons/pi";
import { MdHome } from "react-icons/md"
const Landingpage = () => {
      const Navigate = useNavigate();
    
  return (
    <>     <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] relative overflow-hidden">
        <div className="absolute top-2 left-[-191px]">
          <img src={BackgroundGraphic} alt="Background Graphic" />

        </div>
        <div className="absolute bg-white h-[68px] w-[320px] flex gap-[220px] top-[10px] left-[0px] z-20">
                 <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
                   <ArrowLeft  size={30} onClick={()=>{Navigate('/wallet')}} className=" absolute left-[10px]" />
                 </button>
                  <Link to={"/userprofile"}>
                 <FaRegUser  className='text-2xl absolute top-3 left-[260px]' />
                 </Link>
               </div>
         
          <div className='absolute top-[90%]   border-gray-300 flex justify-center p-t-[8px] p-r-[16px] p-b-[12px] items-center border-t-2 bg-white h-[53px] w-[320px]  '>
           <div className='text-3xl absolute ml-[28px]  left-9 '> <MdHome /></div>
              <div  className='text-2xl absolute mr-[10px] text-gray-400  left-56'> <PiQrCodeLight />
</div>

          </div>
      </div>
    </div>
    </>

  )

}

export default Landingpage