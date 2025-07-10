// import {  useEffect, useState } from "react"
import Home from "./all component/Homepage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Wallet from "./all component/Wallet"
import Login from "./all component/Login"
import Fingerprint from "./all component/Fingerprint"
import Finger2 from "./all component/Finger2"
import Finger3 from "./all component/Finger3"
import Facelogin1 from "./all component/Facelogin"
import Facelogin2 from "./all component/Facelogin2"
import Facelogin3 from "./all component/Facelogin3"
import Pincode from "./all component/Pincode/Pincode"


function App() {

  return (
    <>
    {/* <Home/> */}
    <BrowserRouter basename="/React-islamic-bank/">
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Wallet/" element={<Wallet/>} />
    <Route path="/Login/" element={<Login/>} />
    <Route path="/fingerprint/" element={<Fingerprint/>} />
    <Route path="/fingerprint2/" element={<Finger2/>} />
    <Route path="/fingerprint3/" element={<Finger3/>} />
    <Route path="/facelogin/" element={<Facelogin1/>} />
    <Route path="/facelogin2/" element={<Facelogin2/>} />
    <Route path="/facelogin3/" element={<Facelogin3/>} />
    <Route path="/pincode" element={<Pincode/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
