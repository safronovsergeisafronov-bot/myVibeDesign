import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({
    className,
    value = 0,
    max = 100,
    variant = "default",
    size = "default",
    showValue,
    ...props
}, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100))

    const variants = {
        default: "bg-primary",
        success: "bg-[hsl(var(--success))]",
        warning: "bg-[hsl(var(--warning))]",
        destructive: "bg-destructive",
    }

    const sizes = {
        sm: "h-1.5",
        default: "h-2.5",
        lg: "h-4",
    }

    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <div
                ref={ref}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={value}
                className={cn(
                    "w-full overflow-hidden rounded-full bg-muted",
                    sizes[size]
                )}
                {...props}
            >
                <div
                    className={cn(
                        "h-full transition-all duration-300 ease-out rounded-full",
                        variants[variant]
                    )}
                    style={{ width: `${percentage}%` }}
                />
            </div>
            {showValue && (
                <span className="text-xs font-onest text-muted-foreground self-end">
                    {Math.round(percentage)}%
                </span>
            )}
        </div>
    )
})
Progress.displayName = "Progress"

export { Progress }
