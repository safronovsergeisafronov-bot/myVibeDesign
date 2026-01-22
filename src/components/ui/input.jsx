import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-[var(--radius)] bg-card font-onest text-foreground transition-all placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-2 border-input hover:border-primary/70 focus-visible:border-primary",
        error: "border-2 border-destructive focus-visible:ring-destructive",
        success: "border-2 border-[hsl(var(--success))] focus-visible:ring-[hsl(var(--success))]",
      },
      inputSize: {
        sm: "h-9 px-3 text-sm",
        default: "h-12 px-4 text-base",
        lg: "h-14 px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
)

const Input = React.forwardRef(({
  className,
  type = "text",
  variant,
  inputSize,
  ...props
}, ref) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ variant, inputSize }), className)}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input, inputVariants }
