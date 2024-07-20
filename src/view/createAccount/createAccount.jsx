"use client";
import Authcard from "@/components/shared/authCard";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  HideIcon,
  LockIcon,
  PersonIcon,
  ShowIcon,
  TickIcon,
} from "../../../public/Icons";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

const CreateAccountPage = () => {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [usernameValid, setUsernameValid] = useState(null); // null: not validated, true: valid, false: invalid
  const customName = "zaghum"; // Replace with your custom name

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
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
  };

  const handleShow = () => {
    setShowPassword((pre) => !pre);
  };

  const handleCheckedChange = (e) => {
    setChecked(e);
  };

  const handleUsernameChange = (event, handleChange) => {
    const { value } = event.target;
    setUsernameValid(value === customName);
    handleChange(event);
  };

  const strengthText = getStrengthText(passwordStrength);

  const validationSchema = Yup.object().shape({
    user_name: Yup.string()
      .required("Username is required")
      .test(
        "match-custom-name",
        "Username does not match the custom name",
        (value) => value === customName
      ),
    new_password: Yup.string()
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

  return (
    <Authcard>
      <h1 className="md:text-4xl text-2xl font-semibold text-black mb-[10px] text-center">
        Create Username & Password
      </h1>
      <p className="text-center md:font-medium md:mb-16 mb-[60px] md:text-xl text-base text-primary">
        Sit amet consectetur. Pellentesque fusce amet Pellentesq consectetur.
      </p>
      <Formik
        initialValues={{
          user_name: "",
          new_password: "",
          confirm_password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, errors, touched }) => (
          <Form>
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center cursor-pointer">
                <PersonIcon />
              </div>
              <Input
                type="text"
                name="user_name"
                error={touched.user_name && errors.user_name}
                placeholder="Username"
                className={`w-full pl-14 ${
                  usernameValid === null
                    ? ""
                    : usernameValid
                    ? "border-green-500"
                    : "border-red-500"
                }`}
                onChange={(event) => handleUsernameChange(event, handleChange)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-5 cursor-pointer">
                {usernameValid && (
                  <TickIcon
                    className="h-6 w-6 cursor-pointer"
                    aria-hidden="true"
                  />
                )}
              </div>
              {/* 
              <div className="text-red-500 mt-1">
                {usernameValid === false &&
                  "Name does not match the custom name."}
              </div> */}
            </div>

            <div className="mb-[10px] relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 cursor-pointer">
                <LockIcon />
              </div>
              <Input
                type={showPassword ? "text" : "password"}
                name="new_password"
                // error={touched.password && errors.password}
                placeholder="New password"
                className="w-full pl-14 border-primary"
                onChange={(event) => handlePasswordChange(event, handleChange)}
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
                    className="h-6 w-6 cursor-pointer"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
            <div className="flex items-center justify-between mx-6 mb-[14px]">
              <div className="flex">
                {[...Array(3)].map((_, index) => (
                  <div
                    key={index}
                    className={`md:w-[61.33px] w-[47.17px] h-1 rounded-full mx-1 ${
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
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 cursor-pointer">
                <LockIcon />
              </div>
              <Input
                id="password"
                name="confirm_password"
                placeholder="Enter your Password"
                type={showPassword ? "text" : "password"}
                error={touched.confirm_password && errors.confirm_password}
                className="w-full pl-14"
                onChange={handleChange}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center pr-5 cursor-pointer"
                onClick={handleShow}
              >
                {showPassword ? (
                  <HideIcon
                    className="h-6 w-6 text-gray-400 cursor-pointer"
                    aria-hidden="true"
                  />
                ) : (
                  <ShowIcon
                    className="h-6 w-6 text-gray-400 cursor-pointer"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>

            <div className="flex items-center mb-[30px]">
              <Checkbox
                checked={checked}
                onCheckedChange={handleCheckedChange}
              />
              <label className="block font-normal leading-6 text-darkgrey md:text-base text-sm ml-[15px]">
                By creating your account, you agree to our{" "}
                <span className="text-primary">Terms & Conditions</span> and{" "}
                <span className="text-primary">Privacy Policy</span>
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary mb-6"
              variant="outline"
              size="sm"
              // disabled={isSubmitting}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </Authcard>
  );
};

export default CreateAccountPage;
