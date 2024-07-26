"use client";
import React from "react";
import { Stepper } from "./stepper";
import { Card } from "@/components/ui/card";
import Image from "next/legacy/image";
import { components } from "./data";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/utils";

export const ProfileSetup = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const CurrentComponent = components[activeStep];
  const stepsLength = Object.keys(components).length;
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeStep === stepsLength) {
      setActiveStep(1);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };
  console.group("activeStep", activeStep);
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="w-full max-w-[1166px] mx-6">
        <h1 className="text-center mt-16 mb-6 font-semibold text-lg">
          Profile Creation
        </h1>
        <Stepper activeStep={activeStep} />
        <Card className="p-10">
          {CurrentComponent && <CurrentComponent />}
          <div className="flex justify-between">
            <Button
              className={cn(
                activeStep === 1
                  ? "bg-backgroundColor text-lightgrey rounded-[14px] px-10 py-2 border border-solid border-cardStroke  cursor-not-allowed"
                  : "px-10 py-2 border-darkgrey bg-secondaryButton text-darkgrey"
              )}
              //   disabled={activeStep === 1}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              className="px-10 py-2"
              disabled={activeStep === stepsLength}
              onClick={handleNext}
            >
              {activeStep === stepsLength ? "Submit" : "Next"}
            </Button>
          </div>
        </Card>
      </div>
      <div
        className="flex md:h-[261px] h-[80px]"
        style={{ display: "contents" }}
      >
        <Image
          src={"/images/splashScreen.png"}
          alt="BottomLogo"
          width={2500}
          height={261}
        />
      </div>
    </div>
  );
};
