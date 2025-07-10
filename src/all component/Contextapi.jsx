import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

// Image imports
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import LogoutImage from "../assets/Walletimages/Logoutimage.png";
import VectorIcon from "../assets/Walletimages/Vector.png";
import FaceIcon from "../assets/Walletimages/Group 77.png";
import PasscodeIcon from "../assets/Walletimages/Group 78.png";
import UAEPassLogo from "../assets/Loginimages/Group 40.png";
import LineDivider from "../assets/Loginimages/blackline.jpg";

const AppContext = React.createContext();

const AppProvider = (props) => {
  const [islogin, setislogin] = useState(false);
  const [isquicklogin, setisquicklogin] = useState(false);

  // 💳 Login button & quick login trigger
  function Cards() {
    return (
      <div>
        <Link to={"/login"}>
          {!isquicklogin && (
            <button className="h-[38px] bg-gradient-to-r from-[#c7962b] to-[#b6801c] text-white font-bold text-[12px] rounded-[8px] absolute top-[456px] left-[24px] w-[272px]">
              Log in
            </button>
          )}
        </Link>

        {!isquicklogin && (
          <button onClick={() => setisquicklogin(true)}>
            <img
              className="h-[38px] absolute top-[506px] left-[24px] w-[272px]"
              src={LogoutImage}
              alt="Quick Login"
            />
          </button>
        )}
      </div>
    );
  }

  // 👤 UAE PASS login modal
  function Login() {
    return (
      <div className="relative bg-[#f9f4ec] w-[320px] rounded-t-2xl shadow-lg px-6 pt-3 pb-6">
        <div className="w-20 h-1.5 bg-black rounded-full mx-auto mb-4" />
        <div className="flex items-center justify-center mb-4">
          <img src={UAEPassLogo} alt="UAE PASS" />
        </div>
        <input
          type="text"
          placeholder="Emirates ID, Email or Phone"
          className="w-full border border-black rounded-md px-4 py-2 text-sm placeholder-gray-600 mb-3 focus:outline-none"
        />
        <div className="flex items-center mb-5">
          <input type="checkbox" className="accent-yellow-600 mr-2" />
          <label className="text-sm text-black">Remember Me</label>
        </div>
        <button className="w-full relative bg-black text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center">
          Log In
          <MoveRight className="absolute right-2 text-xl" />
        </button>
      </div>
    );
  }

  // 🔓 Quick login options
  function Quicklogin() {
    return (
      <div className="h-[335px] absolute bg-[#FBF6EE] top-[233px] rounded-[12px] w-[320px]">
        <img className="absolute top-[5px] left-[110px]" src={LineDivider} alt="divider" />
        <p className="absolute top-[20px] left-[24px] font-bold text-[28px]">Quick Login</p>
        <p className="absolute top-[67px] left-[24px] text-[12px] text-[#6A6A6A]">
          Quick Login Using Face ID, Fingerprint and
        </p>
        <p className="absolute top-[80px] left-[24px] text-[12px] text-[#6A6A6A]">Passcode.</p>

        {/* Fingerprint */}
        <Link to={"/fingerprint"}>
          <div className="absolute bg-white top-[117px] h-[53px] w-[272px] left-[24px]">
            <img className="absolute top-[16px] left-[10px] w-[18px] h-[20px]" src={VectorIcon} alt="Fingerprint" />
            <p className="absolute top-[7px] left-[39px] text-[12px]">Fingerprint</p>
            <p className="absolute top-[30px] left-[39px] text-[9px] text-[#6A6A6A]">Quick Login using Fingerprint</p>
            <span className="absolute top-[25px] left-[250px]">
              <MdNavigateNext />
            </span>
          </div>
        </Link>

        {/* Face ID */}
        <Link to={"/facelogin"}>
          <div className="absolute bg-white top-[190px] h-[53px] w-[272px] left-[24px]">
            <img className="absolute top-[16px] left-[10px] w-[18px] h-[20px]" src={FaceIcon} alt="Face ID" />
            <p className="absolute top-[7px] left-[39px] text-[12px]">Face ID</p>
            <p className="absolute top-[30px] left-[39px] text-[9px] text-[#6A6A6A]">Quick Login using Face ID</p>
            <span className="absolute top-[25px] left-[250px]">
              <MdNavigateNext />
            </span>
          </div>
        </Link>

        {/* Passcode */}
        <div className="absolute bg-white top-[260px] h-[53px] w-[272px] left-[24px]">
          <img className="absolute top-[16px] left-[10px] w-[18px] h-[20px]" src={PasscodeIcon} alt="Passcode" />
          <p className="absolute top-[7px] left-[39px] text-[12px]">Passcode</p>
          <p className="absolute top-[30px] left-[39px] text-[9px] text-[#6A6A6A]">Quick Login using Passcode</p>
          <span className="absolute top-[25px] left-[250px]">
            <MdNavigateNext />
          </span>
        </div>
      </div>
    );
  }

  return (
    <AppContext.Provider
      value={{
        Cards,
        Login,
        islogin,
        setislogin,
        isquicklogin,
        setisquicklogin,
        Quicklogin,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
