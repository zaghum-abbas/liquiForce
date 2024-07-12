import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, error, ...props }, ref) => {
  return (
    <div>
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none",
          error ? "border-red-500" : "border-input",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <div className="text-red-500 mt-2 text-sm">{error}</div>}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
