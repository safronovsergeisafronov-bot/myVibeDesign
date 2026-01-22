import * as React from "react"
import { cn } from "@/lib/utils"
import { Inbox, Search, FileX, AlertCircle } from "lucide-react"
import { Button } from "./button"

const emptyStateIcons = {
    default: Inbox,
    search: Search,
    error: AlertCircle,
    noFile: FileX,
}

const EmptyState = React.forwardRef(({
    className,
    icon: Icon,
    iconType = "default",
    title,
    description,
    action,
    actionLabel,
    onAction,
    ...props
}, ref) => {
    const IconComponent = Icon || emptyStateIcons[iconType]

    return (
        <div
            ref={ref}
            className={cn(
                "flex flex-col items-center justify-center text-center p-12",
                className
            )}
            {...props}
        >
            <div className="p-4 rounded-full bg-muted mb-6">
                <IconComponent className="h-12 w-12 text-muted-foreground" />
            </div>

            {title && (
                <h3 className="font-inter text-xl font-semibold text-foreground mb-2">
                    {title}
                </h3>
            )}

            {description && (
                <p className="font-onest text-muted-foreground max-w-md mb-6">
                    {description}
                </p>
            )}

            {(action || (actionLabel && onAction)) && (
                action || (
                    <Button onClick={onAction}>
                        {actionLabel}
                    </Button>
                )
            )}
        </div>
    )
})
EmptyState.displayName = "EmptyState"

export { EmptyState }
