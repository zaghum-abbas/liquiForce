import Image from "next/legacy/image";
import React from "react";
import logo from "../../../../public/images/logo.png";
import bottomVector from "../../../../public/images/splashScreen.png";
const SharedComponent = ({ splashTextFirst, splashTextScound }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className=" p-8">
        <Image src={logo} alt="Logo" width={150} height={50} />
      </div>

      <div className="text-center space-y-5">
        <h1>
          <span className="font-bold text-white text-[48px] block">
            {splashTextFirst}
          </span>
          <span className="font-bold text-white text-[48px] block">
            {splashTextScound}
          </span>
        </h1>

        <div className="border-t border-white w-[166px] my-4 mx-auto"></div>
        <h3 className="font-semibold text-white text-[28px]">
          You are in a good company
        </h3>
        <p className="font-normal text-grey text-[20px] px-52">
          Ensuring job matches are geographically and personally relevant.
        </p>
      </div>

      <Image src={bottomVector} alt="Logo" width={949} height={261} />
    </div>
  );
};

export default SharedComponent;
