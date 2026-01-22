import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Input } from "./input"

const NumberInput = React.forwardRef(({
    className,
    value,
    onChange,
    min,
    max,
    step = 1,
    prefix,
    suffix,
    disabled,
    ...props
}, ref) => {
    const handleIncrement = () => {
        const newValue = (parseFloat(value) || 0) + step
        if (max === undefined || newValue <= max) {
            onChange?.(newValue)
        }
    }

    const handleDecrement = () => {
        const newValue = (parseFloat(value) || 0) - step
        if (min === undefined || newValue >= min) {
            onChange?.(newValue)
        }
    }

    const handleChange = (e) => {
        const newValue = parseFloat(e.target.value)
        if (!isNaN(newValue)) {
            onChange?.(newValue)
        } else if (e.target.value === "") {
            onChange?.("")
        }
    }

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-10 w-10 shrink-0"
                onClick={handleDecrement}
                disabled={disabled || (min !== undefined && value <= min)}
            >
                <Minus className="h-4 w-4" />
            </Button>
            <div className="relative flex-1">
                {prefix && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-onest">
                        {prefix}
                    </span>
                )}
                <Input
                    ref={ref}
                    type="number"
                    value={value}
                    onChange={handleChange}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                    className={cn(
                        "text-center",
                        prefix && "pl-8",
                        suffix && "pr-8"
                    )}
                    {...props}
                />
                {suffix && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground font-onest">
                        {suffix}
                    </span>
                )}
            </div>
            <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-10 w-10 shrink-0"
                onClick={handleIncrement}
                disabled={disabled || (max !== undefined && value >= max)}
            >
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    )
})
NumberInput.displayName = "NumberInput"

export { NumberInput }
