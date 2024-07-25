"use client";
import Questionnaire from "@/components/shared/questionnaire";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowForwardIcon, ArrowBackIcon } from "../../../public/Icons";
import { useState } from "react";
import { steps } from "./components/steps";
import { cn } from "@/lib/utils/utils";
import QuestionnaireCompleted from "./components/questionnaireCompleted";

const QuestionairePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmit, setIsSubmit] = useState(0);
  const [values, setValues] = useState({});
  const [error, setError] = useState("");

  const handleNext = () => {
    setIsSubmit(0);
    setError("");

    const currentStep = steps[activeStep];
    const currentQuestion = currentStep.questionTitle;
    const currentValue = values[currentQuestion];

    if (
      !currentValue ||
      (Array.isArray(currentValue) && currentValue.length === 0)
    ) {
      setError("Please select a value before proceeding.");
      return;
    }

    if (activeStep + 1 === steps.length) {
      setActiveStep(0);
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setIsSubmit(0);
    setError("");
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("values", values);
  };

  const updateValues = (question, newValue) => {
    setValues((prevValues) => ({
      ...prevValues,
      [question]: newValue,
    }));
  };

  const clearError = () => {
    setError("");
  };

  return (
    <Questionnaire>
      <div className="md:mt-[76px] mt-[114px] w-full lg:max-w-[870px] md:max-w-[790px] max-w-[361px] mx-auto md:px-5 px-[10px]">
        <Card className="w-full xl:p-[60px] lg:p-11 md:p-5  mx-auto py-5 px-4">
          <div className="max-md:block flex items-center justify-between">
            <div
              className={`max-md:hidden text-darkgrey md:w-9 md:h-9 w-6 h-6 border-2 border-solid rounded-[20px] border-cardstroke flex items-center justify-center cursor-pointer ${
                activeStep === 0 ? "" : "hover:text-white hover:bg-primary"
              }`}
              onClick={handleBack}
            >
              <button
                className={`${
                  activeStep === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={activeStep === 0}
              >
                <ArrowBackIcon className="w-[6px] h-3" />
              </button>
            </div>
            <div className="md:max-w-[618px] max-w-[329px]">
              {steps.map(
                (question, key) =>
                  activeStep === key && (
                    <question.component
                      key={key}
                      title={question.title}
                      content={question.content}
                      options={question.options}
                      questionTitle={question.questionTitle}
                      questionBody={question.questionBody}
                      type={question.type}
                      values={values}
                      updateValues={updateValues}
                      next={handleNext}
                      clearError={clearError}
                      error={error}
                    />
                  )
              )}
              <div className="flex  gap-4 md:mt-[60px] mt-10">
                {steps.map((_, key) => (
                  <div
                    key={key}
                    className={cn(
                      "w-[142px] h-[3px]  rounded-2xl",
                      activeStep === key ? "bg-secondary" : "bg-lightgrey"
                    )}
                  >
                    {" "}
                  </div>
                ))}
              </div>
              {activeStep + 1 === steps.length && (
                <div className="flex justify-center">
                  <Button
                    className="bg-primary  w-60 mt-7"
                    variant={"outline"}
                    size="sm"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              )}
            </div>
            <div
              className={`max-md:hidden text-darkgrey md:w-9 md:h-9 w-6 h-6 border-2 border-solid rounded-[20px] border-cardstroke flex items-center justify-center cursor-pointer ${
                activeStep === steps.length - 1
                  ? ""
                  : "hover:text-white hover:bg-primary"
              }`}
              onClick={handleNext}
            >
              <button
                className={`${
                  activeStep === steps.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={activeStep === steps.length - 1}
              >
                <ArrowForwardIcon className="w-[6px] h-3" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </Questionnaire>
  );
};

export default QuestionairePage;
