import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 text-center rounded-full text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-ink text-white hover:bg-ink/85",
        brand: "bg-brand text-white hover:bg-brand-ink",
        light: "bg-canvas text-ink hover:bg-white",
        // White fill: only the course band's own action on the dark band.
        white: "bg-white text-ink font-semibold hover:bg-canvas",
        outlineLight: "border border-white/40 text-white hover:bg-white hover:text-ink",
        // The nav booking pill: the quiet third ask. navOutlineDark is for a nav on a dark background.
        navOutline: "border border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
        navOutlineDark: "border border-white bg-transparent text-white hover:bg-white hover:text-ink",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-ink/15 bg-white text-ink hover:bg-ink hover:text-white hover:border-ink",
        secondary: "bg-white text-ink border border-ink/15 hover:border-ink",
        ghost: "text-ink hover:bg-ink/5",
        link: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-11 px-6 py-2",
        sm: "min-h-11 px-4 py-1.5",
        lg: "min-h-12 px-8 py-3 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
