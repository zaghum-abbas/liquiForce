import { Card } from "../ui/card";
import Link from "next/link";
import Image from "next/legacy/image";

export const AuthForm = ({ title, desc1, desc2, link, Form }) => {
  return (
    <div className="bg-white flex flex-col justify-between items-center h-full w-full">
      <div className="max-md:hidden"></div>
      <div className="md:px-5  mt-[74px] lg:mt-[130px]  lg:mb-[70px]  md:mt-[80px]  md:mb-[40px]     w-full 2xl:max-w-[742px] xl:max-w-[600px]  md:max-w-[550px]">
        <Card className="w-full md:bg-card bg-transparent border-0 md:rounded-[20px] md:border border-solid ">
          <div className="md:max-w-[446px]  max-w-[361px] md:my-[60px] mx-auto  px-4">
            <h1 className="md:text-4xl text-2xl font-semibold text-black mb-[10px] text-center">
              {title}
            </h1>
            <p className="text-center md:mb-16 md:font-medium  mb-[60px] md:text-xl text-base ">
              <span className="text-darkgrey">{desc1}</span>{" "}
              <Link href={link}>
                <span className="text-primary">{desc2}</span>{" "}
              </Link>{" "}
            </p>
            <Form />
            <div className="flex items-center justify-center space-x-4 md:mb-6 mb-[60px]">
              <div className="w-full h-[1px] bg-cardStroke"></div>
              <p className="text-darkgrey md:text-base text-sm">or</p>
              <div className="w-full h-[1px] bg-cardStroke"></div>
            </div>
            <h3 className="text-center text-black font-medium md:text-lg text-base  mb-6">
              Sign In with
            </h3>
            <div className="flex items-center space-x-4 justify-center">
              <div className="w-12 h-12  md:w-[60px] md:h-[60px] rounded-full border border-solid border-lightgrey relative flex items-center justify-center">
                <div className="flex md:max-w-[30px] md:max-h-[30px] max-w-6 max-h-6">
                  <Image
                    src={"/images/google.png"}
                    alt="google"
                    width={30}
                    height={30}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="w-12 h-12   md:w-[60px] md:h-[60px] rounded-full border border-solid border-lightgrey relative flex items-center justify-center">
                <div className="flex md:max-w-[30px] md:max-h-[30px] max-w-6 max-h-6">
                  <Image
                    src={"/images/linkedin.png"}
                    alt="linkedin"
                    width={30}
                    height={30}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="max-md:hidden w-full h-[41px] border-t border-solid border-lightgrey  flex justify-center space-x-10 items-center">
        <span className="font-normal text-sm underline text-darkgrey cursor-pointer">
          Privacy Policy
        </span>
        <span className="font-normal text-sm underline text-darkgrey cursor-pointer">
          Terms & Conditions
        </span>
      </div>
    </div>
  );
};
