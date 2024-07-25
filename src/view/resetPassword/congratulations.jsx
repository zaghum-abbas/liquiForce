import AuthCard from "@/components/shared/authCard";
import { Button } from "@/components/ui/button";
import Image from "next/legacy/image";

const Congratulations = () => {
  return (
    <AuthCard>
      <div className="flex flex-col items-center">
        <Image src={"/images/congratulations.png"} height={112} width={112} />
        <h1 className="md:text-4xl text-2xl font-semibold text-black mb-[10px] text-center  md:mt-6 mt-[10px]">
          Congratulations!
        </h1>
        <p className="text-center md:font-medium md:mb-20 mb-[100px] md:text-xl text-base text-primary">
          Your password has been reset.
        </p>
        <Button
          type="button"
          className="w-full bg-primary mb-6"
          variant="outline"
          size="sm"
        >
          Cotinue
        </Button>
      </div>
    </AuthCard>
  );
};
export default Congratulations;
