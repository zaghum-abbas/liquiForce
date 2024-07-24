"use client";
import Image from "next/legacy/image";
import logo from "../../../public/images/generalLogo.png";
import { ArrowStrokeLeft } from "../../../public/Icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Card } from "@/components/ui/card";
const Authcard = ({ children, link, cardCenter }) => {
  const pathname = usePathname();
  return (
    <div
      className={`flex flex-col  md:justify-between    ${
        cardCenter && "justify-between"
      }   h-screen`}
    >
      <div>
        <div className="md:mt-[60px] md:ml-[80px] max-md:hidden">
          <Image src={logo} alt="Logo" width={193} height={48} />
        </div>
        {pathname === "/reset-password" ||
          (pathname === "/email-verified" ? (
            ""
          ) : (
            // <Link href={link}>
            <div className="md:w-8 md:h-8 w-6 h-6 md:ml-[80px] md:mt-[60px] ml-[16px] mt-[70px] border border-solid rounded-[20px] border-cardstroke flex justify-center items-center cursor-pointer">
              <ArrowStrokeLeft />
            </div>
            // </Link>
          ))}
      </div>

      {/* Main Content Section */}
      <div className="md:px-10 md:mt-[76px]  w-full md:max-w-[742px] max-w-[361px] mx-auto">
        <Card className="w-full md:bg-card bg-transparent md:rounded-[20px] md:border border-solid border-[#E9E9E9]">
          <div className="max-w-[446px] md:my-[60px] mx-auto md:px-5">
            {children}
          </div>
        </Card>
      </div>
      <div></div>
    </div>
  );
};

export default Authcard;
