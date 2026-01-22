import * as React from "react"
import { cn } from "@/lib/utils"

const RadioGroupContext = React.createContext(null)

const RadioGroup = React.forwardRef(({
    className,
    value,
    onValueChange,
    children,
    ...props
}, ref) => {
    return (
        <RadioGroupContext.Provider value={{ value, onValueChange }}>
            <div
                ref={ref}
                role="radiogroup"
                className={cn("flex flex-col gap-3", className)}
                {...props}
            >
                {children}
            </div>
        </RadioGroupContext.Provider>
    )
})
RadioGroup.displayName = "RadioGroup"

const RadioGroupItem = React.forwardRef(({
    className,
    value,
    disabled,
    ...props
}, ref) => {
    const context = React.useContext(RadioGroupContext)
    const isSelected = context?.value === value

    return (
        <button
            ref={ref}
            type="button"
            role="radio"
            aria-checked={isSelected}
            disabled={disabled}
            onClick={() => context?.onValueChange?.(value)}
            className={cn(
                "h-5 w-5 shrink-0 rounded-full border-2 border-primary ring-offset-background transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50",
                isSelected ? "bg-primary" : "bg-white",
                className
            )}
            {...props}
        >
            {isSelected && (
                <div className="flex items-center justify-center h-full w-full">
                    <div className="h-2 w-2 rounded-full bg-white" />
                </div>
            )}
        </button>
    )
})
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem }
