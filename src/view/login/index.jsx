"use client";
import React, { useEffect, useState } from "react";
import SharedComponent from "@/components/shared/splashScreen";

import Splash from "./splashScreen";
import LoginPage from "./login";
const Index = () => {
  const [step, setStep] = useState(() => {
    const storedStep = localStorage.getItem("step");
    return storedStep ? parseInt(storedStep, 10) : 0;
  });
  const callSteps = () => {
    switch (step) {
      case 0:
        return <Splash onNext={() => setStep(1)} />;
      case 1:
        return (
          <div
            className={`transition-transform duration-1000 ease-in-out transform ${
              step === 0
                ? "-translate-x-full md:translate-x-0"
                : "translate-x-0"
            }`}
          >
            <LoginPage />
          </div>
        );

      default:
        return null;
    }
  };
  useEffect(() => {
    localStorage.setItem("step", step.toString());
  }, [step]);
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen max-md:hidden">
        <Splash />
        <LoginPage />
      </div>
      <div className="md:hidden grid grid-cols-1">{callSteps()}</div>
    </div>
  );
};

export default Index;
