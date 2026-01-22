import * as React from "react"
import { cn } from "@/lib/utils"

const Skeleton = React.forwardRef(({
    className,
    variant = "default",
    ...props
}, ref) => {
    const variants = {
        default: "bg-muted",
        circular: "bg-muted rounded-full",
        text: "bg-muted h-4 rounded",
    }

    return (
        <div
            ref={ref}
            className={cn(
                "animate-pulse rounded-[var(--radius)]",
                variants[variant],
                className
            )}
            {...props}
        />
    )
})
Skeleton.displayName = "Skeleton"

export { Skeleton }
