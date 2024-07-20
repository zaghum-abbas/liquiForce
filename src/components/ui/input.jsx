import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, error, ...props }, ref) => {
  return (
    <div>
      <input
        type={type}
        className={cn(
          "flex  w-full rounded-[14px] border bg-background py-4 pr-4 md:py-5 md:pr-5 md:text-lg text-base placeholder:text-darkgrey focus:outline-primary  active:outline-primary",
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
