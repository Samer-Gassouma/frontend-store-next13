import { cn } from "@/lib/utils";
import { forwardRef } from "react";
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          `w-auto rounded-full px-5 py-3
           bg-black text-white border-transparent disabled:cursor-not-allowed disabled:opacity-50 font-semibold hover:opacity-75 transition `,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
