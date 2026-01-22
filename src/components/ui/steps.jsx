import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

const Steps = React.forwardRef(({
    className,
    steps = [],
    currentStep = 0,
    variant = "default",
    orientation = "horizontal",
    ...props
}, ref) => {
    const variants = {
        default: {
            active: "bg-primary text-primary-foreground",
            completed: "bg-primary text-primary-foreground",
            inactive: "bg-muted text-muted-foreground",
            line: "bg-primary",
            lineInactive: "bg-border",
        },
        numbered: {
            active: "bg-primary text-primary-foreground",
            completed: "bg-primary text-primary-foreground",
            inactive: "bg-muted text-muted-foreground",
            line: "bg-primary",
            lineInactive: "bg-border",
        },
    }

    const currentVariant = variants[variant]
    const isHorizontal = orientation === "horizontal"

    return (
        <div
            ref={ref}
            className={cn(
                "flex",
                isHorizontal ? "flex-row items-start" : "flex-col",
                className
            )}
            {...props}
        >
            {steps.map((step, index) => {
                const isCompleted = index < currentStep
                const isActive = index === currentStep
                const isLast = index === steps.length - 1

                return (
                    <div
                        key={`step-${index}-${step.title || index}`}
                        className={cn(
                            "flex",
                            isHorizontal ? "flex-col items-center flex-1" : "flex-row items-start"
                        )}
                    >
                        <div className={cn("flex items-center", isHorizontal ? "flex-col" : "flex-row")}>
                            {/* Step circle */}
                            <div
                                className={cn(
                                    "flex items-center justify-center rounded-full font-inter font-semibold transition-all",
                                    "h-10 w-10 text-sm",
                                    isCompleted
                                        ? currentVariant.completed
                                        : isActive
                                            ? currentVariant.active
                                            : currentVariant.inactive
                                )}
                            >
                                {isCompleted ? (
                                    <Check className="h-5 w-5" />
                                ) : (
                                    index + 1
                                )}
                            </div>

                            {/* Step content */}
                            <div className={cn(
                                "font-onest",
                                isHorizontal ? "mt-3 text-center" : "ml-4"
                            )}>
                                <p className={cn(
                                    "font-medium text-sm",
                                    isActive ? "text-foreground" : "text-muted-foreground"
                                )}>
                                    {step.title}
                                </p>
                                {step.description && (
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        {step.description}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Connector line */}
                        {!isLast && (
                            <div
                                className={cn(
                                    "transition-all",
                                    isHorizontal
                                        ? "hidden flex-1 h-0.5 mt-5 mx-2"
                                        : "w-0.5 h-8 ml-5 my-2",
                                    isCompleted ? currentVariant.line : currentVariant.lineInactive
                                )}
                            />
                        )}
                    </div>
                )
            })}
        </div>
    )
})
Steps.displayName = "Steps"

export { Steps }
