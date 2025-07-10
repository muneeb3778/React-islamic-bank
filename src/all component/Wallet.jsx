import { useContext } from "react";
import { AppContext } from "./Contextapi";

// Import images
import BackgroundGraphic from "../assets/Walletimages/BackgroungGraphic.png";
import WalletCircleImage from "../assets/Walletimages/walletcircleiamge.png";
import CardImage from "../assets/Walletimages/Card.png";

const Wallet = () => {
  const data = useContext(AppContext);
  const { Cards, Quicklogin, isquicklogin } = data;

  console.log(Cards());

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
        <div>
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
