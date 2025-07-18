import { useContext, useEffect } from "react";
import { AppContext } from "./Contextapi";
import { useLocation, useNavigate } from "react-router-dom";

// Import images
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import WalletCircleImage from "../assets/Walletimages/walletcircleiamge.png";
import CardImage from "../assets/Walletimages/Card.png";
import axios from "axios";


const Wallet = () => {
  const data = useContext(AppContext);
  const { Cards, Quicklogin, isquicklogin,setisquicklogin } = data;

const navigate=useNavigate()
const location=useLocation()

  console.log(Cards());


const googlelogin = async () => {
    try {
  window.location.href = 'https://8bf14634a4a6.ngrok-free.app/api/sunduk-service/custom-login'
    } catch (error) {
      console.error('Error during login:', error);
}
}


  return (
    <div className="bg-black flex justify-center w-[100vw] h-[100vh] items-center">
      <div className="h-[568px] bg-white w-[320px] relative overflow-hidden">

        {/* Background Graphics */}
        <div>
          <img
            className="absolute w-[379px] h-[380px] left-[-150px]"
            src={BackgroundGraphic}
            alt="Background Graphic"
          />
        </div>

        {/* Wallet UI Layer */}
        <div onClick={()=>{setisquicklogin(false)}}>
          <img
            className="h-[490px] absolute top-[-190px] w-[320px]"
            src={WalletCircleImage}
            alt="Decorative Wallet Circle"
          />

          <img
            className="h-[188px] absolute top-[24px] left-[25px] w-[269px]"
            src={CardImage}
            alt="Digital Card"
          />

          <p className="h-[100px] absolute top-[327px] font-bold text-[28px] left-[24px]">
            Your Digital Islamic
          </p>
          <p className="h-[100px] absolute top-[360px] font-bold text-[28px] left-[24px]">
            Wallet
          </p>
          
            <button  onClick={()=>{googlelogin()}} className="h-[38px] bg-gradient-to-r from-[#c7962b] to-[#b6801c] text-white font-bold text-[12px] rounded-[8px] absolute top-[410px] left-[24px] w-[272px]">
              Log in with Google
            </button>
        </div>

        {/* Conditional Quick Login */}
        {isquicklogin === true && <Quicklogin />}

        {/* Render Cards */}
        {Cards()}
      </div>
    </div>
  );
};

export default Wallet;

