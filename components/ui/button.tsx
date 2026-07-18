import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 rounded-xl font-medium tracking-[0.14em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-azure focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white shadow-[0_12px_28px_-14px_rgb(14_42_71/0.5)] hover:bg-accent-deep hover:-translate-y-0.5 hover:shadow-[0_16px_34px_-14px_rgb(14_42_71/0.55)]",
        outline:
          "border border-accent/50 text-accent hover:border-accent hover:bg-mist hover:-translate-y-0.5",
        outlineLight:
          "border border-white/35 text-white hover:border-azure hover:bg-white/10 hover:-translate-y-0.5",
        ghost: "text-steel hover:text-accent",
      },
      size: {
        sm: "h-10 px-5 text-[0.7rem]",
        md: "h-12 px-7 text-xs",
        lg: "h-14 px-9 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { Button, buttonVariants };
