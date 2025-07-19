import React, { useContext } from 'react'
import { AppContext } from './Contextapi'
import { MoveRight } from 'lucide-react'
import { useNavigate } from "react-router-dom";

// Import images
import BackgroundGraphic from '../assets/Walletimages/BackgroungGraphic.png'
import FingerprintIcon from '../assets/Loginimages/fingerprint.png'
import UAEFlag from '../assets/Loginimages/flag.png'
import { ArrowLeft } from 'lucide-react'

const LoginSundukpay = () => {
  const data = useContext(AppContext)
  const { Login, islogin, setislogin } = data

const Navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4 relative">
      <div className="bg-white relative w-[320px] h-[568px] overflow-hidden">

        {/* Background Image */}
        <img
          src={BackgroundGraphic}
          alt="Background"
          className="absolute left-[-191px] h-[380px] w-[379px] object-cover"
        />

        {/* left arrow */}
        <div className="absolute top-[20px] left-[20px] z-20">
          <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <ArrowLeft size={20} onClick={()=>{Navigate(-1)}} className="text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Header */}
          <div className="mb-6 mt-12">
            <h1
              onClick={() => setislogin(false)}
              className="text-[28px] cursor-pointer font-bold text-gray-900 leading-tight mb-2"
            >
              Log In to<br />SundukPay
            </h1>
            <p className="text-gray-500 text-sm">
              Please enter your Phone Number to log in.
            </p>
          </div>

          {/* Phone Input */}
          <div className="flex items-center border border-gray-400 rounded-lg px-3 py-2.5 mb-4">
            <img src={UAEFlag} alt="UAE Flag" className="w-6 h-4 mr-2" />
            <span className="text-black text-sm font-medium mr-2">+971</span>
            <input
              type="tel"
              placeholder="12 345 6789"
              className="outline-none flex-1 text-sm text-black placeholder:text-gray-400 bg-transparent"
            />
          </div>

          {/* UAE PASS Button */}
          <div className="mb-4">
            <button
              onClick={() => setislogin(true)}
              className="w-full flex items-center bg-gradient-to-r from-[#c7962b] to-[#b6801c] text-white font-bold py-2.5 px-4 rounded-lg shadow-md relative"
            >
              <img src={FingerprintIcon} alt="Fingerprint Icon" className="w-6 h-6 mr-3" />
              <span className="flex-1 text-left text-sm">Log In with UAE PASS</span>
              <MoveRight className="text-white text-xl" />
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mb-6 text-center">
            <p className="text-black text-sm">
              Don't have an account?{' '}
              <button className="text-[#c7962b] font-bold">Sign Up</button>
            </p>
          </div>

          {/* Next Button */}
          <div className="mt-auto">
            <button className="w-full relative bg-black text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center">
              <span>Next</span>
              <MoveRight className="absolute right-4 text-xl" />
            </button>
          </div>
        </div>

        {/* Conditional UAE PASS Card */}
        {islogin === true && (
          <div className="absolute z-20 rounded-t-2xl top-[320px] w-full">
            {Login()}
          </div>
        )}
      </div>
    </div>
  )
}

export default LoginSundukpay
// 