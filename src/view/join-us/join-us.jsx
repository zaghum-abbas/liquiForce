import SharedComponent from "@/components/shared/splashScreen";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";
import worker from "../../../public/images/worker.png";
import company from "../../../public/images/company.png";
import Link from "next/link";
const JoinUs = () => {
  return (
    <SharedComponent>
      <h1 className="text-2xl font-semibold text-center text-white">
        Join us as Worker or Company
      </h1>
      <div className="flex justify-center  my-20">
        <div className=" flex flex-col justify-between md:w-[425px] md:h-[384px] w-[176px]  h-[210px]  border-[4px] border-solid border-secondary rounded-[14px] bg-white md:mx-[10px] mx-[5px]">
          <div className="flex m-auto md:max-w-[105px] md:max-h-[140px] max-w-[43px] max-h-[58px]">
            <Image src={worker} width={105} height={140} alt="worker" />
          </div>

          <div className="max-h-[100px]">
            <div className="h-[2px] bg-cardstroke max-w-[143.5px] md:max-w-full mx-auto"></div>
            <p className="md:text-xl text-base font-semibold text-black text-center mt-6 md:mb-[47px] mb-[35px]">
              As a Worker
            </p>
          </div>
        </div>

        <div className=" flex flex-col justify-between md:w-[425px] md:h-[384px] w-[176px]  h-[210px]  border-[4px] border-solid border-secondary rounded-[14px] bg-white md:mx-[10px] mx-[5px]">
          <div className="flex m-auto md:max-w-[211px] md:max-h-[127px] max-w-[87px] max-h-[52px]">
            <Image src={company} width={211} height={127} alt="company" />
          </div>

          <div className="max-h-[100px]">
            <div className="h-[2px] bg-cardstroke max-w-[143.5px] md:max-w-full mx-auto"></div>
            <p className="md:text-xl text-base font-semibold text-black text-center mt-6 md:mb-[47px] mb-[35px]">
              As a Company
            </p>
          </div>
        </div>
      </div>
      {/* Continue Button */}

      <Link href={"/register"} className="flex justify-center">
        <Button
          className="bg-[#193465] border-none mx-4 self-center w-full  md:max-w-[446px] flex max-w-[361px] "
          variant={"outline"}
          size="sm"
          // onClick={onNext}
        >
          Continue
        </Button>
      </Link>
    </SharedComponent>
  );
};
export default JoinUs;
