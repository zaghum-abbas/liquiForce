import SharedComponent from "@/components/shared/splashScreen/splashScreen";
import React from "react";
import LoginForm from "./form";
import Image from "next/legacy/image";
import Google from "../../../public/images/google.png";
import Linkedin from "../../../public/images/linkedin.png";
const LoginPage = () => {
  const splashTextFirst = "Hi, Ric Garnar";
  const splashTextScound = "Welcome to LiquiFORCE!";
  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen">
      {/* Left side with colored background */}
      <div className="col-span-6 bg-primary">
        <SharedComponent
          splashTextFirst={splashTextFirst}
          splashTextScound={splashTextScound}
        />
      </div>

      {/* Right side with form */}

      <div className="col-span-6 bg-white flex justify-center items-center">
        <div className="w-full max-w-[742px]">
          <div className="bg-card rounded-20 border py-[60px] px-[148px] border-solid border-[#E9E9E9]">
            <h1 className="text-4xl font-semibold text-black mb-6 text-center">
              Sign In
            </h1>
            <p className="text-center mb-16">
              <span className="text-darkgrey">New user?</span>{" "}
              <span className="text-primary">Create an Account</span>{" "}
            </p>
            <LoginForm />
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-full h-[1px] bg-gray-300"></div> {/* Divider */}
              <p className="text-gray-500 text-sm">or</p>
              <div className="w-full h-[1px] bg-gray-300"></div> {/* Divider */}
            </div>
            <h3 className="text-center text-black font-medium text-lg mb-6">
              Sign In with
            </h3>
            <div className="flex items-center space-x-4 justify-center">
              <div className="w-[60px] h-[60px] rounded-full border border-solid border-gray-300 relative flex items-center justify-center">
                <Image
                  src={Google}
                  alt="google"
                  width={30}
                  height={30}
                  className="absolute"
                />
              </div>

              <div className="w-[60px] h-[60px] rounded-full border border-solid border-gray-300 relative flex items-center justify-center">
                <Image src={Linkedin} alt="linkedin" width={30} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
