import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Keypad from './Keypad';
import BackgroundGraphic from '../../assets/Walletimages/BackgroungGraphic.png';
import { useNavigate } from 'react-router-dom';


const Pincode = () => {
  const [pin, setPin] = useState('');
  const Navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="bg-white relative w-[320px] h-[568px] overflow-hidden rounded-lg shadow-lg">

        {/* Background Image */}
        <img
          src={BackgroundGraphic}
          alt="Background"
          className="absolute left-[-191px] h-[380px] w-[379px] object-cover"
        />

        {/* Back Arrow */}
        <div className="absolute top-[20px] left-[20px] z-20">
          <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <ArrowLeft size={20} onClick={()=>{Navigate('/wallet')}} className="text-gray-700" />
          </button>
        </div>

        {/* Ring Progress + Icon */}
        <div className="top-[46px] left-[78px] w-[164px] h-[164px] flex items-center justify-center relative">

          {/* Golden ring progress */}
          <div
            className="absolute w-full h-full rounded-full"
            style={{
              background: `conic-gradient(#AD7C20 ${(pin.length / 6) * 100}%, #f3f3f3 ${(pin.length / 6) * 100}%)`,
              transition: 'background 0.3s ease-in-out',
            }}
          ></div>

          {/* Inner white circle for masking */}
          <div className="absolute w-[148px] h-[148px] rounded-full bg-white z-10 shadow-[0_0_25px_1px_#D4A852]"></div>

          {/* Icon center */}
          <div className="w-[124px] h-[124px] rounded-full bg-white flex items-center justify-center z-20">
            <img
              src="src/assets/Pincode/Union.png"
              alt="Pincode Icon"
              className="w-[90px] h-[70px] object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="absolute top-[234px] left-1/2 transform -translate-x-1/2 text-[22px] font-bold text-black">
          Enter Pincode
        </h2>

        {/* Dots */}
        <div className="absolute top-[270px] left-1/2 transform -translate-x-1/2 flex gap-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full border border-[#c7962b] ${
                index < pin.length ? 'bg-[#c7962b]' : ''
              }`}
            ></div>
          ))}
        </div>

        {/* Keypad */}
        <Keypad pin={pin} setPin={setPin} />
      </div>
    </div>
  );
};

export default Pincode;