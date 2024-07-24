import Image from "next/legacy/image";
import React from "react";
import { Logo } from "./logo";

const SharedComponent = ({ children }) => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col justify-between md:h-full min-h-screen ">
        <Logo />
        <div>{children}</div>
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
