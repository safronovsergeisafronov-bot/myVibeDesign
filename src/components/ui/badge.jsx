import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full font-onest font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground",
                secondary: "bg-secondary text-secondary-foreground",
                success: "bg-[hsl(var(--success))] text-[hsl(var(--success-foreground))]",
                warning: "bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))]",
                destructive: "bg-destructive text-destructive-foreground",
                outline: "border-2 border-primary text-primary bg-transparent",
                ghost: "bg-muted text-foreground",
            },
            size: {
                sm: "px-2 py-0.5 text-xs",
                default: "px-3 py-1 text-sm",
                lg: "px-4 py-1.5 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Badge = React.forwardRef(({
    className,
    variant,
    size,
    ...props
}, ref) => {
    return (
        <span
            ref={ref}
            className={cn(badgeVariants({ variant, size }), className)}
            {...props}
        />
    )
})
Badge.displayName = "Badge"

export { Badge, badgeVariants }
