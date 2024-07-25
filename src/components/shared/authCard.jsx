"use client";
import { ArrowStrokeLeft } from "../../../public/Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BlueLogo } from "./logo";
const AuthCard = ({ children, link, cardCenter }) => {
  const pathname = usePathname();
  return (
    <div
      className={`md:flex items-center md:pt-[217px] pt-[110px] justify-center relative  ${
        cardCenter && "justify-between"
      }   min-h-screen`}
    >
      <div className="absolute top-0 left-0 w-full">
        <BlueLogo />
        {/* {pathname === "/reset-password" || pathname === "/email-verified" ? (
          ""
        ) : ( */}
        <div className="md:w-8 md:h-8 w-6 h-6 2xl:ml-[80px] lg:mt-[60px] lg:ml-[60px] md:mt-[40px] md:ml-[50px] mt-[70px]  ml-[16px] border border-solid rounded-[20px] border-cardStroke flex justify-center items-center cursor-pointer">
          <ArrowStrokeLeft />
        </div>
        {/* )} */}
      </div>

      <div className="w-full md:mt-[76px] md:max-w-[742px] max-w-[361px] mx-auto ">
        <div className="w-full md:bg-card md:rounded-[20px] md:border border-solid border-[#E9E9E9]">
          <div className="max-w-[446px] md:my-[60px] mx-auto md:px-5 py-6">
            {children}
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default AuthCard;
