import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textareaVariants = cva(
    "flex w-full rounded-[var(--radius)] bg-card font-onest text-foreground transition-all placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
    {
        variants: {
            variant: {
                default: "border-2 border-input hover:border-primary/70 focus-visible:border-primary",
                error: "border-2 border-destructive focus-visible:ring-destructive",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const Textarea = React.forwardRef(({
    className,
    variant,
    rows = 4,
    ...props
}, ref) => {
    return (
        <textarea
            className={cn(textareaVariants({ variant }), "min-h-[100px] px-4 py-3", className)}
            ref={ref}
            rows={rows}
            {...props}
        />
    )
})
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }
