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

        <div className="xl:mt-[60px] px-5 xl:ml-[80px] lg:mt-[40px] lg:ml-[60px]  max-md:self-center max-md:mt-[100px]">
          <Image src={logo} alt="Logo" width={193} height={48} />
        </div>

        {/* Main Text Section */}
        <div className="px-5">{children}</div>
        {/* Bottom Image */}

        <Image
          src={bottomVector}
          alt="Logo"
          width={949}
          height={261}
          className="w-[393px] h-[148px]"
        />
      </div>
    </div>
  );
};

export default SharedComponent;
