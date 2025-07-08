// import { MdDiversity2 } from "react-icons/md";
// import "./sundukpay.css"
import { useContext } from "react";
// import { FaCaretRight } from "react-icons/fa";
import { AppContext } from "./Contextapi";
import { Link } from "react-router-dom";

const Home = () => {

// const data=useContext(AppContext)

// const {Card}=data
// console.log(Card())


  return (
    <div className="bg-black h-[100vh] w-[100vw] flex justify-center items-center">
      <div className='bg-white w-[320px] h-[568px] relative overflow-hidden'>
        <div className="absolute top-2 left-[-191px]">
        <img src="src/assets/Walletimages/BackgroungGraphic.png" alt="" />
        </div>
          <Link to={"/wallet"}>
        
        <div className="w-[160px] h-[86.75px] absolute top-[127.12px] left-[80px]">
         <img src="src/assets/Homeimages/sundukpay.png" alt="" />
        </div>
        <div className="h-[203.98px] w-[286.99px] absolute top-[340px] left-[80px]">
          <img src="src/assets/Homeimages/Homecard.png" alt="" />
        </div>
              </Link>

      </div>
    </div>   
  );
};

export default Home;


// src javascript folter
// project  
// sunduk/uai
// assets 
// styles
// app

// w-320
// h-568

