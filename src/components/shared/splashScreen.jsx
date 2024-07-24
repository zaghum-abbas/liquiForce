import Image from "next/legacy/image";
import React from "react";

const SharedComponent = ({ children }) => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col justify-between md:h-full min-h-screen ">
        {/* Logo */}

        <div className="flex md:max-w-[193px] max-w-[160px] xl:mt-[60px]  xl:ml-[80px] lg:mt-[50px] lg:ml-[60px] md:mt-[40px] md:ml-[50px] max-md:self-center max-md:mt-[100px] ">
          <Image src={"/images/logo.png"} alt="Logo" width={211} height={70} />
        </div>

        {children}

        <Image
          src={"/images/splashScreen.png"}
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
