import { cn } from "@/lib/utils/utils";
import { StepTickIcon } from "../../../public/Icons";

export const Stepper = ({ activeStep }) => {
  const steps = [
    "Basic Info",
    "Profile Creation",
    "Work Settings",
    "Personalize",
    "Preview & Submit",
  ];
  return (
    <div className="flex justify-between items-center mb-[60px]">
      {steps.map((step, index) => (
        <div key={index} className="flex-1">
          <div className="flex items-center">
            <div
              className={cn(
                "relative md:w-10 md:h-10 h-[30px] w-[30px] flex items-center justify-center rounded-full border border-solid md:text-base text-[12px] font-medium md:font-semibold",
                activeStep === index + 1
                  ? "bg-secondary-gradient text-white border-primary"
                  : activeStep > index + 1
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-darkgrey border-lightgrey"
              )}
            >
              {index + 1}
              {activeStep > index + 1 && (
                <div className="absolute left-[70%] bottom-[70%] ">
                  <StepTickIcon />
                </div>
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-1",
                  activeStep > index + 1 ? "bg-secondary" : "bg-gray-300"
                )}
              />
            )}
          </div>
          <div
            className={cn(
              "md:text-lg text-[10px] font-medium",
              activeStep === index + 1
                ? "text-black"
                : activeStep > index + 1
                ? "text-primary"
                : "text-lightgrey"
            )}
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};
