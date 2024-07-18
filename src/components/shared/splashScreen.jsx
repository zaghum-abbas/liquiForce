import Image from "next/legacy/image";
import React from "react";
import logo from "../../../public/images/logo.png";
import bottomVector from "../../../public/images/splashScreen.png";
import { Button } from "@/components/ui/button";
const SharedComponent = ({ splashTextFirst, splashTextScound, onNext }) => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col justify-between md:h-full min-h-screen ">
        {/* Logo */}
        <div className="2xl:mt-[60px] 2xl:ml-[80px]  sm:mt-[25px] sm:ml-[40px]  max-sm:self-center max-sm:mt-[100px]">
          <Image src={logo} alt="Logo" width={193} height={48} />
        </div>

        {/* Main Text Section */}

        <div className="text-center grid place-items-center">
          <h1 className="font-bold text-white 2xl:text-[48px] xl:text-[38px] lg:text-3xl md:text-2xl block 2xl:leading-[72px] xl:leading-[65px]">
            <span className="hidden md:block">{splashTextFirst}</span>
            <span>{splashTextScound}</span>
          </h1>
          <div className="border-t border-white w-[166px] my-9 mx-auto"></div>
          <div className="max-w-[465px]">
            <h3 className="font-semibold text-white 2xl:text-[28px] lg:text-xl mb-[10px]">
              You are in a good company
            </h3>
            <p className="font-normal text-lightgrey 2xl:text-xl xl:text-lg 2xl:leading-[30px]">
              Ensuring job matches are geographically and personally relevant.
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <Button
          className="bg-[#193465] border-none mx-4 self-center block md:hidden w-[361px] place-self-center"
          variant={"outline"}
          size="sm"
          onClick={onNext}
        >
          Continue
        </Button>

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
