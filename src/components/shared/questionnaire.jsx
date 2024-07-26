"use client";
import Image from "next/legacy/image";

export const Questionnaire = ({ children, link, cardCenter }) => {
  return (
    <div className={`flex flex-col justify-between h-screen`}>
      <div className="xl:mt-[60px] xl:ml-[80px] lg:mt-[60px] lg:ml-[70px] md:mt-[50px] md:ml-[60px]  max-md:hidden">
        <Image
          src={"/images/generalLogo.png"}
          alt="Logo"
          width={193}
          height={48}
        />
      </div>

      {children}

      <div
        className="flex md:h-[261px] h-[80px]"
        style={{ display: "contents" }}
      >
        <Image
          src={"/images/splashScreen.png"}
          alt="BottomLogo"
          width={2500}
          height={261}
        />
      </div>
    </div>
  );
};
