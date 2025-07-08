import { useContext } from "react";
import { AppContext } from "./Contextapi";



const Wallet = () => {

 const data=useContext(AppContext)

const {Cards,Quicklogin,isquicklogin,setisquicklogin}=data
console.log(Cards())


  return (
<div className="bg-black flex justify-center w-[100vw] h-[100vh] center items-center" >
    <div className="h-[568px] bg-white w-[320px] relative overflow-hidden">
    
    <div >
      <img className="absolute w-[379px]  h-[380px] left-[-150px]  " src="src/assets/Walletimages/BackgroungGraphic.png" alt="" />
      </div>

    <div>
            <img className="h-[490px] absolute top-[-190px]  w-[320px]" src="src/assets/Walletimages/walletcircleiamge.png" alt="" />

            <img className="h-[188px] absolute top-[24px]  left-[25px] w-[269px]" src="src/assets/Walletimages/Card.png" alt="" />
            <p className="h-[100px] absolute top-[327px]  font-bold text-[28px] left-[24px]  " >
              Your Digital Islamic  
            </p>
            <p className="h-[100px] absolute top-[360px]  font-bold text-[28px] left-[24px]">Wallet</p>
             
            </div>
    
          {isquicklogin==true?<Quicklogin/>:""}

            {Cards()}
        </div>
      
      </div>

  );
};

export default Wallet;
