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
  PersonIcon,
  ShowIcon,
} from "../../../public/Icons";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const SignupForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  const handleShow = () => {
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
            <div className="absolute inset-y-0 left-0 pl-5  flex items-center cursor-pointer">
              <PersonIcon />
            </div>
            <Input
              type="text"
              name="first_name"
              error={touched.email && errors.email}
              placeholder="First name"
              className="w-full pl-14"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-5  flex items-center cursor-pointer">
              <PersonIcon />
            </div>
            <Input
              type="text"
              name="last_name"
              error={touched.email && errors.email}
              placeholder="Last name"
              className="w-full pl-14"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-5  flex items-center cursor-pointer">
              <EmailIcon />
            </div>
            <Input
              type="email"
              name="email"
              error={touched.email && errors.email}
              placeholder="Email your email address"
              className="w-full pl-14"
              onChange={handleChange}
            />
          </div>
          <Link href={"/verification-code"}>
            <Button
              type="submit"
              className="w-full bg-primary mb-[60px] "
              disabled={isSubmitting}
              variant="outline"
              size="sm"
            >
              Continue
            </Button>
          </Link>
        </Form>
      )}
    </Formik>
  );
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required"),
});
export default SignupForm;
