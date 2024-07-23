"use client";
import ProfileCreation from "@/components/shared/profileCreation";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { ArrowForwardIcon, ArrowBackIcon } from "../../../public/Icons";
import { useState } from "react";
import { steps } from "./steps";
import { cn } from "@/lib/utils";
const QuestionairePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmit, setIsSubmit] = useState(0);
  const [values, setValues] = useState({
    questionOne: "",
  });

  const handleNext = () => {
    setIsSubmit(0);
    if (activeStep + 1 === steps.length) {
      setActiveStep(0);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setIsSubmit(0);
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("values", values);
  };

  return (
    <ProfileCreation>
      <div className="md:mt-[76px] mt-[114px] w-full lg:max-w-[870px] md:max-w-[790px] max-w-[361px] mx-auto md:px-5 px-[10px]">
        <Card className="w-full xl:p-[60px] lg:p-11 md:p-5  mx-auto py-5 px-4">
          <div className="max-md:block flex items-center justify-between">
            <div
              className={`max-md:hidden text-darkgrey md:w-9 md:h-9 w-6 h-6 border-2 border-solid rounded-[20px] border-cardstroke flex items-center justify-center cursor-pointer ${
                activeStep === 0 ? "" : "hover:text-white hover:bg-primary"
              }`}
            >
              <button
                className={`${
                  activeStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <ArrowBackIcon className="w-[6px] h-3" />
              </button>
            </div>
            <div className="md:max-w-[618px] max-w-[329px]">
              {steps.map(
                (comp, key) =>
                  activeStep === key && (
                    <comp.component
                      title={comp.title}
                      content={comp.content}
                      options={comp.options}
                      questionTitle={comp.questionTitle}
                      questionBody={comp.questionBody}
                      values={values}
                      isOk={setValues}
                      next={() => handleNext()}
                      isSubmit={isSubmit}
                    />
                  )
              )}
              <div className="flex  gap-4 md:mt-[60px] mt-10">
                {steps.map((_, key) => (
                  <div
                    className={cn(
                      "w-[142px] h-[3px]  rounded-2xl",
                      activeStep === key ? "bg-secondary" : "bg-lightgrey"
                    )}
                  >
                    {" "}
                  </div>
                ))}
              </div>
              {activeStep + 1 === steps.length ? (
                <Button
                  className=" bg-primary self-center w-full mt-7 "
                  variant={"outline"}
                  size="sm"
                  onClick={() => {
                    activeStep >= 3
                      ? handleSubmit()
                      : setIsSubmit(isSubmit + 1);
                  }}
                >
                  Submit
                </Button>
              ) : (
                ""
              )}
            </div>

            <div
              className={`max-md:hidden text-darkgrey md:w-9 md:h-9 w-6 h-6 border-2 border-solid rounded-[20px] border-cardstroke flex items-center justify-center cursor-pointer ${
                activeStep === steps.length - 1
                  ? ""
                  : "hover:text-white hover:bg-primary"
              }`}
            >
              <button
                className={`${
                  activeStep === steps.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                <ArrowForwardIcon className="w-[6px] h-3 " />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </ProfileCreation>
  );
};

export default QuestionairePage;
