import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva(
  "",
  {
    variants: {
      variant: {
        hero: "text-hero font-inter",
        subhero: "text-subhero font-inter",
        h1: "text-h1 font-inter",
        h2: "text-h2 font-inter",
        h3: "text-h3 font-inter",
        h4: "text-h4 font-inter",
        h5: "text-h5 font-inter",
        h6: "text-h6 font-inter",
        caption: "text-caption-dark font-onest",
        body: "font-onest text-base font-normal leading-relaxed",
        small: "font-onest text-sm font-normal",
      },
      color: {
        default: "",
        primary: "text-primary",
        foreground: "text-foreground",
        muted: "text-muted-foreground",
        white: "text-white",
      },
    },
    defaultVariants: {
      variant: "body",
      color: "default",
    },
  }
)

const Text = React.forwardRef(({
  className,
  variant,
  color,
  as: Component = "p",
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      className={cn(textVariants({ variant, color }), className)}
      {...props}
    />
  )
})
Text.displayName = "Text"

export { Text, textVariants }
