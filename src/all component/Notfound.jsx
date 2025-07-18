import React from 'react'
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import { MdHome } from "react-icons/md"
import AeroLeft from "../assets/facelogin/aeroleft.png";
import { useNavigate, Link } from 'react-router-dom';

const Notfound = () => {

  const navigate = useNavigate()


  return (
        <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-2 left-[-191px]">
                  <img src={BackgroundGraphic} alt="Background Graphic" />
                </div>
                <div onClick={() => navigate(-1)} className="w-[15px] h-[10px] absolute top-[23.93px] left-[24px] cursor-pointer">
                  <img src={AeroLeft} alt="back" />
                </div>
          <div className="flex justify-center items-center min-h-screen w-[100%] bg-gray-100">
        <div className="bg-white h-[200px] w-[300px] p-6 rounded shadow-lg text-center z-0">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-700 font-bold">NOT FOUND</p>
          
          <button 
          onClick={()=>navigate('/landingpage')}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer z-10"
            >
          <MdHome/>
          </button>
        </div>
      </div>
   </div>
 </div>
  )
}

export default Notfound