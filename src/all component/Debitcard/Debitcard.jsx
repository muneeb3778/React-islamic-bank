import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import all required images
import { ArrowLeft } from 'lucide-react'
import paymentsuccessfull from '../../assets/Debitcard/paymentsuccessfull.png'
import { AppContext } from "../Contextapi";


const Debitcard = () => {
  const data = useContext(AppContext);
  const { Cards, Quicklogin, isquicklogin,setisquicklogin } = data;

const Navigate=useNavigate()  

  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] lg:w-[412px] lg:h-[915px] relative overflow-hidden">
        <div className="absolute top-[20px] left-[20px] z-20 flex items-center gap-8 font-bold">
          <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <p className="text-[18px]">Debit card added</p>
        </div>

        <div className="w-[320px] h-[450px] absolute top-[55px] p-[16px]">
            <img className="w-[320px] h-[400px]"  src={paymentsuccessfull} alt="" />
        </div>
         <div className="w-[320px] h-[28px] absolute top-[492px] flex flex-col items-center justify-center">
            <p className="text-center text-[20px] font-bold">Debit Card Added</p>
            <p className="text-center text-sm text-[#000000] w-[300px]">Your debit card has been succeessfully added and is ready for use</p>
        </div>
        <div className="absolute w-[300px] h-[30px] top-[542px] left-[10px] text-center bg-[#c19945] rounded-[24px] flex justify-center items-center">continue</div>
      </div>
    </div>
  );
};

export default Debitcard;
// 412 x 915 pixels