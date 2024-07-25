import * as React from "react";
import { cn } from "@/lib//utils/utils";

const Input = React.forwardRef(({ className, type, error, ...props }, ref) => {
  return (
    <div>
      <input
        type={type}
        className={cn(
          "flex  w-full rounded-[14px] border border-solid  py-4 pr-4 lg:py-5 md:pr-5 lg:text-lg text-base placeholder:text-darkgrey  focus:border-primary   focus-visible:outline-none",
          error ? "border-negative" : "border-lightgrey",
          className
        )}
        ref={ref}
        {...props}
      />
      <div className="absolute text-negative ml-6 text-base">{error}</div>
    </div>
  );
});
Input.displayName = "Input";

export { Input };
