import * as React from "react"
import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({
    className,
    value,
    defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    onValueChange,
    disabled,
    showValue,
    variant = "default",
    size = "default",
    ...props
}, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const [isDragging, setIsDragging] = React.useState(false)
    const sliderRef = React.useRef(null)
    const currentValue = value !== undefined ? value : internalValue

    const percentage = ((currentValue - min) / (max - min)) * 100

    const updateValueFromPosition = (clientX) => {
        if (!sliderRef.current || disabled) return

        const rect = sliderRef.current.getBoundingClientRect()
        const offsetX = clientX - rect.left
        const relativePosition = Math.max(0, Math.min(1, offsetX / rect.width))
        const rawValue = min + relativePosition * (max - min)
        const steppedValue = Math.round(rawValue / step) * step
        const clampedValue = Math.max(min, Math.min(max, steppedValue))

        setInternalValue(clampedValue)
        onValueChange?.(clampedValue)
    }

    const handleMouseDown = (e) => {
        if (disabled) return
        setIsDragging(true)
        updateValueFromPosition(e.clientX)
    }

    const handleMouseMove = React.useCallback((e) => {
        if (isDragging) {
            updateValueFromPosition(e.clientX)
        }
    }, [isDragging])

    const handleMouseUp = React.useCallback(() => {
        setIsDragging(false)
    }, [])

    React.useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove)
            document.addEventListener('mouseup', handleMouseUp)
            return () => {
                document.removeEventListener('mousemove', handleMouseMove)
                document.removeEventListener('mouseup', handleMouseUp)
            }
        }
    }, [isDragging, handleMouseMove, handleMouseUp])

    const variants = {
        default: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-[hsl(var(--success))]",
    }

    const sizes = {
        sm: "h-1.5",
        default: "h-2.5",
        lg: "h-4",
    }

    return (
        <div className={cn("relative w-full", className)} ref={ref}>
            <div className="relative">
                <div
                    ref={sliderRef}
                    className={cn(
                        "w-full rounded-full bg-muted overflow-hidden cursor-pointer",
                        sizes[size],
                        disabled && "cursor-not-allowed opacity-50"
                    )}
                    onMouseDown={handleMouseDown}
                >
                    <div
                        className={cn("h-full rounded-full transition-all", variants[variant])}
                        style={{ width: `${percentage}%` }}
                    />
                </div>
                <div
                    className={cn(
                        "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-primary border-2 border-white shadow-md pointer-events-none",
                        disabled && "opacity-50",
                        isDragging && "scale-110",
                        size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5",
                        "transition-all"
                    )}
                    style={{ left: `${percentage}%` }}
                />
            </div>
            {showValue && (
                <div className="flex justify-between mt-2 text-sm font-onest text-muted-foreground">
                    <span>{min}</span>
                    <span className="font-medium text-foreground">{currentValue}</span>
                    <span>{max}</span>
                </div>
            )}
        </div>
    )
})
Slider.displayName = "Slider"

export { Slider }
