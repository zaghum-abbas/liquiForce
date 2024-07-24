import Authcard from "@/components/shared/authCard";
import Image from "next/legacy/image";
import emailVerifiedImage from "../../../public/images/verifiedEmail.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const EmailVerified = () => {
  return (
    <AuthCard link={"/email-verified"} cardCenter={true}>
      <div className="flex flex-col items-center">
        <Image src={emailVerifiedImage} height={112} width={112} />
        <h1 className="md:text-4xl text-2xl font-semibold text-black mb-[10px] text-center  md:mt-[31px] mt-[17px]">
          Email Verified
        </h1>
        <p className="text-center md:font-medium md:mb-20 mb-[100px] md:text-xl text-base text-primary">
          Your email has been verified.
        </p>
        {/* <Link href={"/create-account"} className="w-full"> */}
        <Button
          type="button"
          className="w-full bg-primary mb-6"
          variant="outline"
          size="sm"
        >
          Cotinue
        </Button>
        {/* </Link> */}
      </div>
    </Authcard>
  );
};
export default EmailVerified;
