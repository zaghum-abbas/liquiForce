"use client";
import React, { useState } from "react";
import AuthCard from "@/components/shared/authCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { HideIcon, LockIcon, ShowIcon } from "../../../../public/Icons";
import Congratulations from "./congratulations";
import ReCaptcha from "@/components/shared/captcha";

const ResetPassword = () => {
  const [callback, setCallback] = useState("not fired");
  const [value, setValue] = useState("[empty]");
  const [expired, setExpired] = useState("false");

  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [congratulations, setCongratulations] = useState(false);
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[A-Z]/)) strength++;
    if (password.match(/[0-9]/)) strength++;
    if (password.match(/[^a-zA-Z0-9]/)) strength++;
    if (password.length >= 12) strength++;
    return strength;
  };
  const getStrengthText = (strength) => {
    switch (strength) {
      case 0:
        return { text: "", color: "" };
      case 1:
        return { text: "Weak", color: "text-negative" };
      case 2:
        return { text: "Medium", color: "text-medium" };
      default:
        return { text: "Strong", color: "text-positive" };
    }
  };

  const handlePasswordChange = (event, handleChange) => {
    const { value } = event.target;
    const strength = calculatePasswordStrength(value);
    setPasswordStrength(strength);
    handleChange(event);
  };

  const getStrengthColor = (strength) => {
    switch (strength) {
      case 0:
        return "";
      case 1:
        return "bg-negative";
      case 2:
        return "bg-medium";
      default:
        return "bg-positive";
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("congratulations", congratulations);
    setCongratulations(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };
  const handleShow = () => {
    setShowPassword((pre) => !pre);
  };

  const handleCaptchaChange = (value) => {
    setValue(value);
    if (value === null) setExpired("true");
  };

  const handleScriptLoad = () => {
    setCallback("called!");
  };
  const strengthText = getStrengthText(passwordStrength);
  console.log("congratulations", congratulations);
  return congratulations ? (
    <Congratulations />
  ) : (
    <AuthCard>
      <h1 className="md:text-4xl text-2xl font-semibold text-black mb-[10px] text-center">
        Reset Password
      </h1>
      <p className="text-center md:font-medium md:mb-16 mb-[60px] md:text-xl text-base text-primary">
        Sit amet consectetur. Pellentesque fusce amet Pellentesque consectetur.
      </p>
      <Formik
        initialValues={{ new_password: "", confirm_password: "" }}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, values, errors, touched }) => (
          <Form>
            <div className="mb-[10px] relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 cursor-pointer">
                <LockIcon />
              </div>
              <Input
                type="password"
                name="new_password"
                // error={touched.password && errors.password}
                placeholder="New password"
                className="w-full pl-14 "
                onChange={(event) => handlePasswordChange(event, handleChange)}
              />
            </div>
            <div className="flex items-center justify-between mx-6 mb-[14px]">
              <div className="flex">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className={`md:w-[62px] w-[48px]  h-1 rounded-full mx-1 ${
                      index < passwordStrength
                        ? getStrengthColor(passwordStrength)
                        : "bg-lightgrey"
                    }`}
                  ></div>
                ))}
              </div>
              <span className={`ml-4 text-sm ${strengthText.color}`}>
                {strengthText.text}
              </span>
            </div>
            <div className="mb-[60px] relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5  cursor-pointer">
                <LockIcon />
              </div>
              <Input
                id="password"
                name="confirm_password"
                placeholder="Enter your Password"
                type={showPassword ? "text" : "password"}
                error={touched.confirm_password && errors.confirm_password}
                className={`w-full pl-14 ${
                  values.confirm_password === values.new_password &&
                  values.confirm_password !== ""
                    ? "border-green-500 border border-solid"
                    : ""
                }`}
                onChange={handleChange}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-5 cursor-pointer"
                onClick={handleShow}
              >
                {showPassword ? (
                  <HideIcon
                    className="h-6 w-6 cursor-pointer"
                    aria-hidden="true"
                  />
                ) : (
                  <ShowIcon
                    className="h-6 w-6  cursor-pointer"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>

            <p className="text-black mb-5">
              Please check the box for verification
            </p>

            <ReCaptcha
              onChange={handleCaptchaChange}
              onScriptLoad={handleScriptLoad}
            />
            <Button
              type="submit"
              className="w-full bg-primary mb-6 md:mt-10 mt-[48px]"
              variant="outline"
              size="sm"
              //   disabled={isSubmitting}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </AuthCard>
  );
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("new_password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export { ResetPassword };
