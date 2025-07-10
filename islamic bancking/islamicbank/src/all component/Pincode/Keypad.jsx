import React from 'react';
import { RiDeleteBack2Line } from 'react-icons/ri';

const Keypad = ({ pin, setPin }) => {

  const handlePress = (value) => {
    if (pin.length < 6) {
      setPin(pin + value);
    }
  };

  const handleDelete = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="absolute bottom-0 w-[320px] h-[235px] bg-gray-300 px-4 pt-4 pb-6 rounded-t-lg">
  <div className="grid grid-cols-3 gap-1 gap-x-3">
    {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
      <button
        key={num}
        onClick={() => handlePress(num)}
        className="bg-white text-black text-xl gap-1 font-semibold h-[38px] w-[98px] top-[340px] left-[110px] rounded-md shadow border border-gray-300 flex items-center justify-center"
      >
        {num}
      </button>
    ))}

    {/* Empty cell for spacing */}
    <div></div>

    {/* 0 button */}
    <button
      onClick={() => handlePress('0')}
      className="bg-white text-black text-xl font-semibold h-[37px] w-[98px] top-[468px] left-[110px] rounded-md shadow border border-gray-300 flex items-center justify-center"
    >
      0
    </button>

    {/* Delete button */}
    <RiDeleteBack2Line
          onClick={handleDelete}
          className=" flex items-center justify-center h-8 w-14 mt-1 ml-5 "
        />
  </div>
    <div className="relative w-[126px] h-[4px] left-[87px] bg-black rounded-full mt-9"></div>
</div>

  );
};

export default Keypad;