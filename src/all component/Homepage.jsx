import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./Contextapi";

// Import images from the assets folder
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import SundukPay from "../assets/Homeimages/sundukpay.png";
import HomeCard from "../assets/Homeimages/Homecard.png";

const Home = () => {


const Navigate = useNavigate();

setTimeout(() => {
  Navigate("/wallet")
}, 2000);


  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white w-[320px] h-[568px] relative overflow-hidden">
        <div className="absolute top-2 left-[-191px]">
          <img src={BackgroundGraphic} alt="Background Graphic" />
        </div>
        <Link to={"/wallet"}>
          <div className="w-[160px] h-[86.75px] absolute top-[127.12px] left-[80px]">
            <img src={SundukPay} alt="SundukPay Logo" />
          </div>
          <div className="h-[203.98px] w-[286.99px] absolute top-[340px] left-[80px]">
            <img src={HomeCard} alt="Home Card" />
          </div>
        </Link>
       
      </div>
    </div>
  );
};

export default Home;
