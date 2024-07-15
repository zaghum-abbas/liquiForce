import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, error, ...props }, ref) => {
  return (
    <div>
      <input
        type={type}
        className={cn(
          "flex h-[67px] w-full rounded-[14px] border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none",
          error ? "border-negative" : "border-input",
          className
        )}
        ref={ref}
        {...props}
      />
      <div className="absolute text-negative mt-1 text-sm">{error}</div>
    </div>
  );
});
Input.displayName = "Input";

export { Input };
