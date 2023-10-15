import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../util/cn";

const buttonVariants = cva("rounded-md border-2", {
  variants: {
    variant: {
      primary: "border-black text-black bg-white hover:bg-neutral-200",
      secondary: "border-white text-white bg-black hover:bg-neutral-700",
      danger: "border-none text-white bg-red-500 hover:bg-red-600",
    },
    size: {
      sm: "text-sm py-1 px-2",
      md: "text-md py-2 px-3",
      lg: "text-xl py-3 px-5",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  children,
  variant,
  size,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
