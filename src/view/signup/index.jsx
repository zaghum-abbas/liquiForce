"use client";
import React, { useEffect, useState } from "react";
import SharedComponent from "@/components/shared/splashScreen";
import SignupPage from "./signup";
import Splash from "./splashScreen";
const Index = () => {
  const [step, setStep] = useState(0);

  const callSteps = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <SignupPage />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen max-md:hidden">
        <Splash />
        <SignupPage />
      </div>
      <div className="md:hidden grid grid-cols-1">{callSteps()}</div>
    </div>
  );
};

export default Index;
