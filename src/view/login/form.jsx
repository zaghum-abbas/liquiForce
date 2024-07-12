"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { EmailIcon, HideIcon, LockIcon, ShowIcon } from "../../../public/Icons";
import { Checkbox } from "@/components/ui/checkbox";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };
  const handleShow = () => {
    console.log("calling");
    setShowPassword((pre) => !pre);
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, errors, touched }) => (
        <Form>
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
              <EmailIcon />
            </div>
            <Input
              type="email"
              name="email"
              error={touched.email && errors.email}
              placeholder="Email"
              className="w-full pl-10"
              onChange={handleChange}
            />
          </div>

          <div className="mb-5 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
              <LockIcon />
            </div>
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              className="w-full pl-10"
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={handleShow}
            >
              {showPassword ? (
                <HideIcon
                  className="h-6 w-6 text-gray-400 cursor-pointer"
                  // onClick={handleShow}
                  aria-hidden="true"
                />
              ) : (
                <ShowIcon
                  className="h-6 w-6 text-gray-400 cursor-pointer"
                  // onClick={handleShow}
                  aria-hidden="true"
                />
              )}
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600 text-sm"
            />
          </div>
          <div className="flex items-center justify-between mb-[60px]">
            <div className="flex items-center">
              <Checkbox />
              <label className="block  font-normal leading-6 text-darkgrey text-[16px] ml-[10px]">
                Remember me?
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-negative text-[16px]">
                Forgot password?
              </a>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-primary mb-[60px]"
            disabled={isSubmitting}
            variant={"outline"}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

// Define the validation schema using Yup with custom error messages
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password required"),
});
export default LoginForm;
