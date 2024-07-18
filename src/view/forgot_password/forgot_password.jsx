"use client";
import Authcard from "@/components/shared/authCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { EmailIcon } from "../../../public/Icons";

import { useRouter } from "next/navigation";

const RecoverPassword = () => {
  const router = useRouter();
  console.log("router", router);
  const handleSubmit = (values) => {
    router.push("/verification-code");
    console.log("values", values);
  };
  return (
    <Authcard link={"/login"}>
      <h1 className="md:text-4xl text-2xl font-semibold text-black mb-[10px] text-center">
        Forgotten Password
      </h1>
      <p className="text-center md:font-medium md:mb-16 mb-[60px] md:text-xl text-base text-primary">
        Sit amet consectetur. Pellentesque fusce amet Pellentesq consectetur.
      </p>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, handleChange, errors, touched }) => (
          <Form>
            <div className="mb-20 relative">
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

            <Button
              type="submit"
              className="w-full bg-primary mb-6"
              variant="outline"
              size="sm"
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Authcard>
  );
};
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});

export default RecoverPassword;
