"use client";
import React, { useEffect, useState } from "react";
import Splash from "./splashScreen";
import { AuthForm } from "@/components/shared/authForm";
import SignupForm from "./form";
const props = {
  title: "Register",
  desc1: "Already a user?",
  desc2: "Sign In",
  link: "/login",
  Form: SignupForm,
};
const Index = () => {
  const [step, setStep] = useState(0);

  const callSteps = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <AuthForm {...props} />
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
        <AuthForm {...props} />
      </div>
      <div className="md:hidden grid grid-cols-1">{callSteps()}</div>
    </div>
  );
};

export default Index;
