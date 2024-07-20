import Image from "next/legacy/image";
import React from "react";
import logo from "../../../public/images/logo.png";
import bottomVector from "../../../public/images/splashScreen.png";
import { Button } from "@/components/ui/button";
const SharedComponent = ({ children }) => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col justify-between md:h-full min-h-screen ">
        {/* Logo */}

        {/* <div className="xl:mt-[60px] xl:ml-[80px] lg:mt-[40px] lg:ml-[60px] md:mt-[25px] md:ml-[40px] max-sm:self-center max-sm:mt-[100px]"> */}
        <div className="xl:mt-[60px] xl:ml-[80px] lg:mt-[40px] lg:ml-[60px]  max-md:self-center max-md:mt-[100px]">
          {/* <div className="xl:mt-[60px] xl:ml-[80px] lg:mt-[40px] lg:ml-[60px] lg:self-start md:self-center md:mt-[100px]"> */}
          <Image src={logo} alt="Logo" width={193} height={48} />
        </div>

        {/* Main Text Section */}
        {children}
        {/* Bottom Image */}
        <Image
          src={bottomVector}
          alt="Bottom Vector"
          width={949}
          height={261}
          className="w-[393px] h-[148px]"
        />
      </div>
    </div>
  );
};

export default SharedComponent;
