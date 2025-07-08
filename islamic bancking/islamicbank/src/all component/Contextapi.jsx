import React, { useEffect, useState } from "react"
import { MdNavigateNext } from "react-icons/md";
import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
const AppContext= React.createContext()



const AppProvider=(props)=>{


const [islogin,setislogin]=useState(false)
const [isquicklogin,setisquicklogin]=useState(false)
function Cards(){


return  <div>
  <Link to={"/login"}>

            { isquicklogin==false? <button className="h-[38px]  bg-gradient-to-r from-[#c7962b] to-[#b6801c] text-white font-bold text-[12px] rounded-[8px] absolute top-[456px]  left-[24px] w-[272px]">
             Log in
</button> : ""}
</Link >
{ isquicklogin==false?<button onClick={()=>setisquicklogin(true)}>
<img className="h-[38px] absolute top-[506px]  left-[24px] w-[272px]" src="src/assets/Walletimages/Logoutimage.png" alt="" />
</button>:""
}           </div>
}

function Login() {
  return( 
<div className="relative bg-[#f9f4ec] w-[320px] rounded-t-2xl shadow-lg px-6 pt-3 pb-6">
  {/* Drag Indicator */}
  <div className="w-20 h-1.5 bg-black rounded-full mx-auto mb-4"></div>

  {/* UAE PASS Header */}
  <div className="flex items-center justify-center mb-4">
    <img src="src/assets/Loginimages/Group 40.png" alt="" />
  </div>

  {/* Input Field */}
  <input
    type="text"
    placeholder="Emirates ID, Email or Phone"
    className="w-full border border-black rounded-md px-4 py-2 text-sm placeholder-gray-600 mb-3 focus:outline-none"
  />

  {/* Remember Me */}
  <div className="flex items-center mb-5">
    <input type="checkbox" className="accent-yellow-600 mr-2" />
    <label className="text-sm text-black">Remember Me</label>
  </div>

  {/* Log In Button */}
  <button className="w-full relative bg-black text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center">
    Log In
    <MoveRight className="absolute right-2 text-xl" />
  </button>
</div>

  )
}


function Quicklogin(){

    return(
      <div className="h-[335px] absolute bg-[#FBF6EE] top-[233px] rounded-[12px] w-[320px]">
       
       <img className=" absolute top-[5px] left-[110px]" src="src/assets/Loginimages/blackline.jpg" alt="" /> 
        <p className="w-[162px] h-[32px] top-[20px] absolute  left-[24px] font-bold text-[28px]">Quick Login</p>

        <p className="  top-[67px] text-[12px] text-[#6A6A6A] absolute  left-[24px]"> Quick Login Using Face ID, Fingerprint and 
         </p>
         <p  className="  top-[80px] text-[12px] text-[#6A6A6A] absolute  left-[24px]"> Passcode .</p>
<Link to={"/fingerprint"}>
     <div className="absolute bg-[white] top-[117px] h-[53px] w-[272px]   left-[24px] ">
     <img className="absolute  h-[20px] top-[16px] w-[18px]  left-[10px] " src="src/assets/Walletimages/Vector.png" alt="" />
      <p className="absolute  text-[12px] top-[7px] w-[18px] left-[39px]">Fingerprint</p>
            <p className="absolute  text-[9px] top-[30px] w-[140px] text-[#6A6A6A]  h-[9px] left-[39px]">  Quick Login using Fingerprintt</p>
                       <p className="h-[10px] w-[10px] left-[250px]  absolute top-[25px]" ><MdNavigateNext /></p>
     </div>
</Link>


    
<Link to={"/facelogin"}>
       <div className="absolute bg-[white] top-[190px] h-[53px] w-[272px]   left-[24px] ">
  <img className="absolute  h-[20px] top-[16px] w-[18px]  left-[10px] " src="src/assets/Walletimages/Group 77.png" alt="" />
      <p className="absolute  text-[12px] top-[7px] w-[50px]  left-[39px]">Face ID</p>
            <p className="absolute  text-[9px] top-[30px] w-[140px] text-[#6A6A6A]  h-[9px] left-[39px]">  Quick Login using Fingerprintt</p>
                        <p className="h-[10px] w-[10px] left-[250px]  absolute top-[25px]" ><MdNavigateNext /></p>
     </div>
</Link>


       <div className="absolute bg-[white] top-[260px] h-[53px] w-[272px]   left-[24px] ">
  <img className="absolute  h-[20px] top-[16px] w-[18px]  left-[10px] " src="src/assets/Walletimages/Group 78.png" alt="" />
      <p className="absolute  text-[12px] top-[7px] w-[60px]  left-[39px]">Passcode</p>
            <p className="absolute  text-[9px] top-[30px] w-[140px] text-[#6A6A6A]  h-[9px] left-[39px]">  Quick Login using Fingerprintt</p>
            <p className="h-[10px] w-[10px] left-[250px]  absolute top-[25px]" ><MdNavigateNext /></p>

     </div>
       </div>

    )
}




return (

 <>   


<AppContext.Provider value={{Cards:Cards,Login:Login , islogin:islogin , setislogin:setislogin,isquicklogin:isquicklogin,setisquicklogin:setisquicklogin,Quicklogin:Quicklogin }}>{props.children}</AppContext.Provider>
</>
)    


}




export {AppProvider,AppContext}
