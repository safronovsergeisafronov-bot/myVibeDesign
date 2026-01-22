import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "./label"

/**
 * FormGroup - простая обёртка для старых форм (не React Hook Form)
 * Для React Hook Form используйте Form, FormField, FormItem из ./form.jsx
 */
const FormGroup = React.forwardRef(({ className, label, error, required, children, ...props }, ref) => {
    return (
        <div ref={ref} className={cn("space-y-2", className)} {...props}>
            {label && (
                <Label>
                    {label}
                    {required && <span className="text-destructive ml-1">*</span>}
                </Label>
            )}
            {children}
            {error && (
                <p className="text-sm text-destructive font-onest font-medium animate-slide-in-from-bottom">
                    {error}
                </p>
            )}
        </div>
    )
})
FormGroup.displayName = "FormGroup"

export { FormGroup }
