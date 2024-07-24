import { Button } from "@/components/ui/button";
import SharedComponent from "@/components/shared/splashScreen";

const Splash = ({ onNext }) => {
  return (
    <SharedComponent>
      <div className="px-5">
        <div className="text-center grid place-items-center ">
          <h1 className="font-bold text-white 2xl:text-[48px] xl:text-4xl md:text-2xl text-xl  block 2xl:leading-[72px] xl:leading-[60px] md:leading-[45px]">
            <span className="hidden md:block">Hi, Ric Garnar</span>
            <span>Welcome to LiquiFORCE!</span>
          </h1>
          <div className="border-t border-white w-[166px] md:my-9 my-10" />
          <div className="max-w-[465px]">
            <h3 className="font-semibold text-white 2xl:text-[28px] lg:text-xl mb-[10px]">
              You are in a good company
            </h3>
            <p className="font-normal text-lightgrey xl:text-xl lg:text-lg  text-base 2xl:leading-[30px]">
              Ensuring job matches are geographically and PersonIconally
              relevant.
            </p>
          </div>
        </div>
        {/* Continue Button */}
        <Button
          className="bg-[#193465] border-none self-center w-full block md:hidden  place-self-center mt-[120px]"
          variant={"outline"}
          size="sm"
          onClick={onNext}
        >
          Continue
        </Button>
      </div>
    </SharedComponent>
  );
};
export default Splash;
