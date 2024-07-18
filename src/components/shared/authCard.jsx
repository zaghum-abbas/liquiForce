"use client";
import Image from "next/legacy/image";
import logo from "../../../public/images/generalLogo.png";
import { ArrowStroke } from "../../../public/Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Authcard = ({ children, link }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <div className="md:mt-[60px] md:ml-[80px] max-md:hidden">
          <Image src={logo} alt="Logo" width={193} height={48} />
        </div>
        {pathname !== "/reset-password" && (
          <Link href={link}>
            <div className="md:w-8 md:h-8 w-6 h-6 md:ml-[80px] md:mt-[60px] ml-[16px] mt-[70px] border border-solid rounded-[20px] border-cardstroke flex justify-center items-center cursor-pointer">
              <ArrowStroke />
            </div>
          </Link>
        )}
      </div>

      {/* Main Content Section */}
      <div className="md:px-10 md:pt-[76px]  pt-[74px] pb-[70px] w-full md:max-w-[742px] max-w-[361px] mx-auto">
        <div className="w-full md:bg-card md:rounded-[20px] md:border border-solid border-[#E9E9E9]">
          <div className="max-w-[446px] my-[60px] mx-auto md:px-5">
            {children}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Authcard;