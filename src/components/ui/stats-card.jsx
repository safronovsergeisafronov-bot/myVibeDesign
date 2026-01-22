import * as React from "react"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const StatsCard = React.forwardRef(({
    className,
    title,
    value,
    change,
    changeLabel,
    trend, // "up" | "down" | "neutral"
    icon,
    variant = "default",
    ...props
}, ref) => {
    const variants = {
        default: "bg-card border border-border",
        primary: "bg-primary text-primary-foreground",
        dark: "bg-accent text-white",
    }

    const trendColors = {
        up: "text-[hsl(var(--success))]",
        down: "text-destructive",
        neutral: "text-muted-foreground",
    }

    const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus

    return (
        <div
            ref={ref}
            className={cn(
                "p-6 rounded-[var(--radius)] shadow-sm",
                variants[variant],
                className
            )}
            {...props}
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className={cn(
                        "font-onest text-sm",
                        variant === "default" ? "text-muted-foreground" : "opacity-80"
                    )}>
                        {title}
                    </p>
                    <p className="font-inter text-3xl font-bold mt-2">{value}</p>
                </div>
                {icon && (
                    <div className={cn(
                        "p-3 rounded-lg",
                        variant === "default" ? "bg-muted" : "bg-white/10"
                    )}>
                        {icon}
                    </div>
                )}
            </div>

            {(change !== undefined || changeLabel) && (
                <div className="flex items-center gap-2 mt-4">
                    {change !== undefined && (
                        <div className={cn("flex items-center gap-1", trendColors[trend || "neutral"])}>
                            <TrendIcon className="h-4 w-4" />
                            <span className="font-onest text-sm font-medium">
                                {change > 0 ? "+" : ""}{change}%
                            </span>
                        </div>
                    )}
                    {changeLabel && (
                        <span className={cn(
                            "font-onest text-sm",
                            variant === "default" ? "text-muted-foreground" : "opacity-70"
                        )}>
                            {changeLabel}
                        </span>
                    )}
                </div>
            )}
        </div>
    )
})
StatsCard.displayName = "StatsCard"

export { StatsCard }
