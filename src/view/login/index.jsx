"use client";
import React, { useEffect, useState } from "react";
import SharedComponent from "@/components/shared/splashScreen";
import LoginPage from "./login";
const Index = () => {
  const [step, setStep] = useState(() => {
    const storedStep = localStorage.getItem("step");
    return storedStep ? parseInt(storedStep, 10) : 0;
  });
  const splashTextFirst = "Hi, Ric Garnar";
  const splashTextScound = "Welcome to LiquiFORCE!";
  const callSteps = () => {
    switch (step) {
      case 0:
        return (
          <SharedComponent
            splashTextFirst={splashTextFirst}
            splashTextScound={splashTextScound}
            onNext={() => setStep(1)}
          />
        );
      case 1:
        return <LoginPage />;

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
        <SharedComponent
          splashTextFirst={splashTextFirst}
          splashTextScound={splashTextScound}
        />
        <LoginPage />
      </div>
      <div className="md:hidden grid grid-cols-1">{callSteps()}</div>
    </div>
  );
};

export default Index;
