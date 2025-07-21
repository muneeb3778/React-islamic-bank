import { useContext, useEffect } from "react";
import { AppContext } from "./Contextapi";
import { useLocation, useNavigate } from "react-router-dom";

// Import images
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import WalletCircleImage from "../assets/Walletimages/walletcircleiamge.png";
import CardImage from "../assets/Walletimages/Card.png";
import axios from "axios";
import { FcGoogle } from "react-icons/fc";

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
    // <div className="bg-black flex justify-center w-[100vw] h-[100vh] items-center">
      <div className="h-[568px] bg-white w-[320px] sm:w-[400px] sm:h-[600px] relative overflow-hidden">

        {/* Background Graphics */}
        <div>
          <img
            className="absolute w-[50%] h-[62%]"
            src={BackgroundGraphic}
            alt="Background Graphic"
          />
        </div>

        {/* Wallet UI Layer */}
        <div onClick={()=>{setisquicklogin(false)}}>
          <img
            className="h-[490px] absolute top-[-35%] w-[98%] left-[2%]"
            src={WalletCircleImage}
            alt="Decorative Wallet Circle"
          />

          <img
            className="h-[32%] absolute top-[4%] left-[8%] w-[80%]"
            src={CardImage}
            alt="Digital Card"
          />

          <p className=" absolute top-[56%] font-bold text-[28px] left-[7%]">
            Your Digital Islamic
          </p>
          <p className=" absolute top-[62%] font-bold text-[28px] left-[7%]">
            Wallet
          </p>
          
            <button  onClick={()=>{googlelogin()}} className="h-[7%] bg-gradient-to-r from-[#c7962b] to-[#b6801c] text-white font-bold text-[12px] rounded-[8px] absolute top-[71%] left-[8%] w-[85%]">
                <div className="flex gap-3 justify-center items-center">  <span><FcGoogle className="text-2xl" /></span>  <span>Log in with Google</span> </div>
            </button>



        </div>

        {/* Conditional Quick Login */}
        {isquicklogin === true && <Quicklogin />}

        {/* Render Cards */}
        {Cards()}
      </div>
    // </div>
  );
};

export default Wallet;

