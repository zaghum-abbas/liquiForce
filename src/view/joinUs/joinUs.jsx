import SharedComponent from "@/components/shared/splashScreen";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/legacy/image";
import Link from "next/link";
const JoinUs = () => {
  return (
    <SharedComponent>
      <h1 className="md:text-2xl text-xl font-semibold text-center text-white">
        Join us as Worker or Company
      </h1>
      <div className="flex justify-center mx-4 my-20">
        {[
          {
            src: "/images/worker.png",
            alt: "worker",
            text: "As a Worker",
            width: 105,
            height: 140,
            max_width: 43,
            max_height: 58,
          },
          {
            src: "/images/company.png",
            alt: "company",
            text: "As a Company",
            width: 211,
            height: 127,
            max_width: 87,
            max_height: 52,
          },
        ].map((data) => (
          <div className=" flex flex-col justify-between md:w-[425px] md:h-[384px] w-[176px]  h-[210px]  border-[4px] border-solid border-secondary rounded-[14px] bg-white md:mx-[10px] mx-[5px]">
            <div
              className={cn(
                "flex m-auto",
                `md:max-w-[${data.width}px]`,
                `md:max-h-[${data.height}px]`,
                `max-w-[${data.max_width}px]`,
                `max-h-[${data.max_height}px]`
              )}
            >
              <Image
                src={data.src}
                width={data.width}
                height={data.height}
                alt="worker"
              />
            </div>

            <div className="max-h-[100px]">
              <div className="h-[2px] bg-cardstroke max-w-[143.5px] md:max-w-full mx-auto" />
              <p className="md:text-xl text-base font-semibold text-black text-center mt-6 md:mb-[47px] mb-[35px]">
                As a Worker
              </p>
            </div>
          </div>
        ))}
      </div>

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
