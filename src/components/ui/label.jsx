import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const labelVariants = cva(
    "font-onest font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef(({
    className,
    required,
    ...props
}, ref) => (
    <label
        ref={ref}
        className={cn(labelVariants(), "text-sm text-foreground", className)}
        {...props}
    >
        {props.children}
        {required && <span className="text-destructive ml-1">*</span>}
    </label>
))
Label.displayName = "Label"

export { Label, labelVariants }
