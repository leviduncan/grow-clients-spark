import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-inter",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-dark hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 font-medium transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 font-medium",
        outline: "border-2 border-border bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary font-medium transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium",
        ghost: "hover:bg-accent hover:text-accent-foreground font-medium",
        link: "text-primary underline-offset-4 hover:underline font-medium",
        hero: "bg-primary text-primary-foreground font-semibold hover:bg-primary-dark hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40 transition-all duration-300",
        heroOutline: "border-2 border-foreground text-foreground bg-transparent font-semibold hover:bg-foreground hover:text-background hover:scale-[1.02] transition-all duration-300",
        ctaWhite: "bg-background text-primary font-semibold hover:bg-background/90 hover:scale-[1.02] hover:shadow-xl transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-2 text-sm",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-10 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
