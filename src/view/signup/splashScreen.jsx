import { Button } from "@/components/ui/button";
import SharedComponent from "@/components/shared/splashScreen";

const Splash = ({ onNext }) => {
  return (
    <SharedComponent>
      <div className="text-center grid place-items-center">
        <h1 className="font-bold text-white 2xl:text-[48px] xl:text-[38px] lg:text-3xl md:text-2xl block 2xl:leading-[72px] xl:leading-[65px]">
          Register with Us
        </h1>
        <div className="border-t border-white w-[166px] my-9 mx-auto"></div>
        <div className="max-w-[465px]">
          <h3 className="font-semibold text-white 2xl:text-[28px] lg:text-xl mb-[10px]">
            You are in a good company
          </h3>
          <p className="font-normal text-lightgrey 2xl:text-xl xl:text-lg 2xl:leading-[30px]">
            A product is something a brand is something that is bought by the
            customer.
          </p>
        </div>
      </div>
      {/* Continue Button */}
      <Button
        className="bg-[#193465] border-none mx-4 self-center block md:hidden w-[361px] place-self-center"
        variant={"outline"}
        size="sm"
        onClick={onNext}
      >
        Continue
      </Button>
    </SharedComponent>
  );
};
export default Splash;
