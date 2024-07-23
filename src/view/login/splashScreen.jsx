import { Button } from "@/components/ui/button";
import SharedComponent from "@/components/shared/splashScreen";

const Splash = ({ onNext }) => {
  return (
    <SharedComponent>
      <div className="px-4">
        <div className="text-center grid place-items-center ">
          <h1 className="font-bold text-white xl:text-[48px] lg:text-[38px] md:text-3xl  block xl:leading-[72px] lg:leading-[65px]">
            <span className="hidden md:block">Hi, Ric Garnar</span>
            <span>Welcome to LiquiFORCE!</span>
          </h1>
          <div className="border-t border-white w-[166px] my-9 mx-auto"></div>
          <div className="max-w-[465px]">
            <h3 className="font-semibold text-white 2xl:text-[28px] lg:text-xl mb-[10px]">
              You are in a good company
            </h3>
            <p className="font-normal text-lightgrey 2xl:text-xl xl:text-lg 2xl:leading-[30px]">
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
