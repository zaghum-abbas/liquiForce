import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReCaptcha = ({ onChange, onScriptLoad }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const reCaptchaRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    console.log(
      "ReCaptcha component mounted - reCaptcha Ref-",
      reCaptchaRef.current
    );

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (value) => {
    console.log("Captcha value:", value);
    onChange(value);
  };

  const asyncScriptOnLoad = () => {
    onScriptLoad();
    console.log("scriptLoad - reCaptcha Ref-", reCaptchaRef.current);
  };

  return (
    isLoaded && (
      // <div className="w-full max-w-xs mx-auto">
      <ReCAPTCHA
        ref={reCaptchaRef}
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
        onChange={handleChange}
        asyncScriptOnLoad={asyncScriptOnLoad}
      />
      // </div>
    )
  );
};

export default ReCaptcha;
