import * as React from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "./card"
import { Progress } from "./progress"
import { LineChart, Line, ResponsiveContainer } from "recharts"

const MetricWidget = React.forwardRef(({
    className,
    title,
    value,
    change,
    trend,
    icon,
    variant = "default",
    sparkline,
    target,
    period,
    ...props
}, ref) => {
    const variants = {
        default: "bg-card border border-border",
        primary: "bg-primary text-primary-foreground",
        dark: "bg-accent text-white",
        success: "bg-success text-success-foreground",
        warning: "bg-warning text-warning-foreground",
    }

    const trendColors = {
        up: "text-success",
        down: "text-destructive",
        neutral: "text-muted-foreground",
    }

    const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus

    const progressPercentage = target ? (parseFloat(value) / target) * 100 : 0

    return (
        <Card
            ref={ref}
            className={cn("overflow-hidden", variants[variant], className)}
            {...props}
        >
            <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                    <div className="flex-1">
                        <p className={cn(
                            "font-onest text-sm font-medium",
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
            </CardHeader>

            <CardContent className="space-y-3">
                {(change !== undefined || period) && (
                    <div className="flex items-center gap-2">
                        {change !== undefined && (
                            <div className={cn(
                                "flex items-center gap-1",
                                trendColors[trend || "neutral"]
                            )}>
                                <TrendIcon className="h-4 w-4" />
                                <span className="font-onest text-sm font-semibold">
                                    {change > 0 ? "+" : ""}{change}%
                                </span>
                            </div>
                        )}
                        {period && (
                            <span className={cn(
                                "font-onest text-xs",
                                variant === "default" ? "text-muted-foreground" : "opacity-70"
                            )}>
                                {period}
                            </span>
                        )}
                    </div>
                )}

                {sparkline && sparkline.length > 0 && (
                    <div className="h-16 -mx-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={sparkline.map((value, index) => ({ value, index }))}>
                                <Line
                                    type="monotone"
                                    dataKey="value"
                                    stroke={variant === "default" ? "hsl(var(--primary))" : "currentColor"}
                                    strokeWidth={2}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}

                {target && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                            <span className={cn(
                                "font-onest",
                                variant === "default" ? "text-muted-foreground" : "opacity-70"
                            )}>
                                Цель: {target}
                            </span>
                            <span className="font-inter font-semibold">
                                {progressPercentage.toFixed(0)}%
                            </span>
                        </div>
                        <Progress value={progressPercentage} className="h-2" />
                    </div>
                )}
            </CardContent>
        </Card>
    )
})
MetricWidget.displayName = "MetricWidget"

export { MetricWidget }
