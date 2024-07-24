"use client";
import Authcard from "@/components/shared/authCard";
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import PinInput from "react-pin-input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EmailVerified from "./emailVerified";
const VerificationCode = () => {
  const router = useRouter();
  const [emailVerified, setEmailVerified] = useState(false);
  const handleSubmit = (values, { setSubmitting }) => {
    // router.push("/reset-password");
    setTimeout(() => {
      setEmailVerified(true);
      setSubmitting(false);
    }, 1000);
  };

  return emailVerified ? (
    <EmailVerified />
  ) : (
    <AuthCard link={"/forgot_password"}>
      <h1 className="md:text-4xl text-2xl font-semibold text-black mb-[10px] text-center">
        Verification Code
      </h1>
      <p className="text-center md:font-medium md:mb-16 mb-[60px] md:text-xl text-base text-primary">
        Sit amet consectetur. Pellentesque fusce amet Pellentesq consectetur.
      </p>
      <p className="text-darkgrey text-center mb-[60px]">
        Expires in : <span className="text-primary">12:00</span>
      </p>
      <Formik
        initialValues={{ pin: "" }}
        validationSchema={Yup.object().shape({
          pin: Yup.string()
            .required("Pin is required")
            .min(5, "Enter valid pin"),
        })}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched, values, setFieldValue }) => (
          <Form>
            <div>
              <PinInput
                length={5}
                secret
                secretDelay={100}
                onChange={(value, _index) => setFieldValue("pin", value)}
                onComplete={(value, _index) => setFieldValue("pin", value)}
                type="numeric"
                inputMode="number"
                style={{
                  padding: "8px",
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "10px",
                }}
                inputStyle={{
                  borderColor:
                    errors.pin && touched.pin
                      ? "#ff6666"
                      : // : values?.pin?.length === 5
                        // ? "red"
                        "#D6D6D6",
                  width: "65.2px",
                  height: "67px",
                  borderWidth: "1px",
                  borderRadius: "14px",
                  fontSize: "14px",
                }}
                inputFocusStyle={{ borderColor: "#001e54" }}
                //   disabled={loading || resendLoading}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
              <small
                style={{
                  fontSize: "13px",
                  color: "red",
                  paddingLeft: "10px",
                }}
              >
                {errors.pin && touched.pin && errors.pin}
              </small>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary mt-20 mb-6"
              variant="outline"
              size="sm"
              disabled={isSubmitting}
            >
              Send
            </Button>
            <Button
              type="button"
              className="w-full  mb-6"
              variant="secondary"
              size="sm"
              disabled={isSubmitting}
            >
              Resend
            </Button>
          </Form>
        )}
      </Formik>
    </Authcard>
  );
};
export default VerificationCode;
