import * as React from "react"
import { cn } from "@/lib/utils"
import { Spinner } from "./spinner"

const LoadingOverlay = React.forwardRef(({
    className,
    visible = false,
    text,
    ...props
}, ref) => {
    if (!visible) return null

    return (
        <div
            ref={ref}
            className={cn(
                "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
                className
            )}
            {...props}
        >
            <div className="flex flex-col items-center gap-4">
                <Spinner size="lg" />
                {text && <p className="text-sm font-onest text-muted-foreground">{text}</p>}
            </div>
        </div>
    )
})
LoadingOverlay.displayName = "LoadingOverlay"

export { LoadingOverlay }
