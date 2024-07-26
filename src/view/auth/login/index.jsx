"use client";

import React, { useEffect, useState } from "react";
import SharedComponent from "@/components/shared/splashScreen";
import Splash from "./splashScreen";
import { AuthForm } from "@/components/shared/authForm";
import { LoginForm } from "./form";

const props = {
  title: "Sign In",
  desc1: "New user?",
  desc2: "Create an Account",
  link: "/join-us",
  Form: LoginForm,
};

export const Login = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const storedStep = localStorage.getItem("step");
    if (storedStep) {
      setStep(parseInt(storedStep, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("step", step.toString());
  }, [step]);

  const callSteps = () => {
    switch (step) {
      case 0:
        return <Splash onNext={() => setStep(1)} />;
      case 1:
        return <AuthForm {...props} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 min-h-screen max-md:hidden">
        <Splash />
        <AuthForm {...props} />
      </div>
      <div className="md:hidden grid grid-cols-1">{callSteps()}</div>
    </div>
  );
};
