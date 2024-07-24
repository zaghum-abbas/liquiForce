import SharedComponent from "@/components/shared/splashScreen";

const Splash = () => {
  return (
    <SharedComponent>
      <div className="text-center grid place-items-center px-5">
        <h1 className="font-bold text-white 2xl:text-[48px] xl:text-4xl md:text-2xl text-xl  block 2xl:leading-[72px] xl:leading-[60px] md:leading-[45px]">
          Register with Us
        </h1>
        <div className="border-t border-white w-[166px] md:my-9 my-10" />
        <div className="max-w-[465px]">
          <h3 className="font-semibold text-white 2xl:text-[28px] lg:text-xl mb-[10px]">
            You are in a good company
          </h3>
          <p className="font-normal text-lightgrey xl:text-xl lg:text-lg  text-base 2xl:leading-[30px]">
            A product is something a brand is something that is bought by the
            customer.
          </p>
        </div>
      </div>
    </SharedComponent>
  );
};
export default Splash;
