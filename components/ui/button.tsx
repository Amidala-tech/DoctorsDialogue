import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.14em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gold: "bg-gold text-ink shadow-[0_0_0_0_rgb(184_154_94/0)] hover:bg-gold-bright hover:shadow-[0_0_40px_0_rgb(184_154_94/0.35)] hover:-translate-y-0.5",
        outline:
          "border border-line text-ivory hover:border-gold hover:text-gold-bright hover:-translate-y-0.5",
        ghost: "text-sand hover:text-gold-bright",
      },
      size: {
        sm: "h-10 px-5 text-[0.7rem]",
        md: "h-12 px-7 text-xs",
        lg: "h-14 px-9 text-xs",
      },
    },
    defaultVariants: {
      variant: "gold",
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
