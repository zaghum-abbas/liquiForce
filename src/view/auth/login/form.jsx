"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import {
  EmailIcon,
  HideIcon,
  LockIcon,
  ShowIcon,
} from "../../../../public/Icons";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  const handleShow = () => {
    setShowPassword((pre) => !pre);
  };
  const handleCheckedChange = (e) => {
    setChecked(e);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, errors, values, touched }) => (
        <Form>
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-5  flex items-center cursor-pointer">
              <EmailIcon />
            </div>
            <Input
              type="email"
              name="email"
              value={values.email}
              error={touched.email && errors.email}
              placeholder="Email your email address"
              className="w-full pl-14"
              onChange={handleChange}
            />
          </div>

          <div className="mb-5 relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-5  cursor-pointer">
              <LockIcon />
            </div>
            <Input
              id="password"
              name="password"
              value={values.password}
              placeholder="Enter your Password"
              type={showPassword ? "text" : "password"}
              error={touched.password && errors.password}
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

          <div className="flex items-center justify-between mb-[60px]">
            <div className="flex items-center">
              <Checkbox
                checked={checked}
                onCheckedChange={handleCheckedChange}
              />
              <label className="block font-normal leading-6 text-darkgrey md:text-base text-sm ml-[10px]">
                Remember me?
              </label>
            </div>
            <div className="text-sm">
              <Link
                href={"/forgot_password"}
                className="md:font-medium font-normal  text-negative md:text-base text-sm"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-primary mb-[60px]"
            disabled={isSubmitting}
            variant="outline"
            size="sm"
          >
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required"),
});
