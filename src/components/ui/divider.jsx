import * as React from "react"
import { cn } from "@/lib/utils"

const Divider = React.forwardRef(({
    className,
    orientation = "horizontal",
    decorative = true,
    children,
    ...props
}, ref) => {
    const isHorizontal = orientation === "horizontal"

    if (children) {
        return (
            <div
                ref={ref}
                className={cn(
                    "flex items-center gap-4",
                    isHorizontal ? "w-full" : "flex-col h-full",
                    className
                )}
                {...props}
            >
                <div
                    className={cn(
                        "bg-border flex-1",
                        isHorizontal ? "h-px" : "w-px"
                    )}
                />
                <span className="text-sm text-muted-foreground font-onest shrink-0">
                    {children}
                </span>
                <div
                    className={cn(
                        "bg-border flex-1",
                        isHorizontal ? "h-px" : "w-px"
                    )}
                />
            </div>
        )
    }

    return (
        <div
            ref={ref}
            role={decorative ? "none" : "separator"}
            aria-orientation={decorative ? undefined : orientation}
            className={cn(
                "shrink-0 bg-border",
                isHorizontal ? "h-px w-full" : "h-full w-px",
                className
            )}
            {...props}
        />
    )
})
Divider.displayName = "Divider"

export { Divider }
