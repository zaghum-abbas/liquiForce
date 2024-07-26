"use client";
import React from "react";
import { Formik, Form } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { EmailIcon, PersonIcon } from "../../../../public/Icons";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();
  const handleSubmit = (values, { setSubmitting }) => {
    router.push("/verification-code");
    console.log("values", values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ first_name: "", last_name: "", email: "" }}
      validationSchema={validationSchema}
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
              error={touched.first_name && errors.first_name}
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
              error={touched.last_name && errors.last_name}
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
          {/* <Link href={"/verification-code"}> */}
          <Button
            type="submit"
            className="w-full bg-primary mb-[60px] "
            // disabled={isSubmitting}
            variant="outline"
            size="sm"
          >
            Continue
          </Button>
          {/* </Link> */}
        </Form>
      )}
    </Formik>
  );
};

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name required"),
  last_name: Yup.string().required("Last name required"),
  email: Yup.string().required("Email required"),
});
export default SignupForm;
