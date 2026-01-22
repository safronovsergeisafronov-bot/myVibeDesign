import * as React from "react"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

const Rating = React.forwardRef(({
    className,
    value,
    defaultValue = 0,
    max = 5,
    onValueChange,
    readonly,
    size = "default",
    ...props
}, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const [hoverValue, setHoverValue] = React.useState(0)
    const currentValue = value !== undefined ? value : internalValue

    const sizes = {
        sm: "h-4 w-4",
        default: "h-5 w-5",
        lg: "h-7 w-7",
    }

    const handleClick = (ratingValue) => {
        if (readonly) return
        setInternalValue(ratingValue)
        onValueChange?.(ratingValue)
    }

    return (
        <div
            ref={ref}
            className={cn("inline-flex items-center gap-1", className)}
            {...props}
        >
            {Array.from({ length: max }, (_, i) => {
                const ratingValue = i + 1
                const isFilled = hoverValue ? ratingValue <= hoverValue : ratingValue <= currentValue

                return (
                    <button
                        key={`star-${ratingValue}`}
                        type="button"
                        disabled={readonly}
                        onClick={() => handleClick(ratingValue)}
                        onMouseEnter={() => !readonly && setHoverValue(ratingValue)}
                        onMouseLeave={() => !readonly && setHoverValue(0)}
                        className={cn(
                            "transition-all focus:outline-none",
                            !readonly && "cursor-pointer hover:scale-110",
                            readonly && "cursor-default"
                        )}
                    >
                        <Star
                            className={cn(
                                sizes[size],
                                "transition-colors",
                                isFilled
                                    ? "fill-[hsl(var(--warning))] text-[hsl(var(--warning))]"
                                    : "fill-transparent text-muted-foreground"
                            )}
                        />
                    </button>
                )
            })}
        </div>
    )
})
Rating.displayName = "Rating"

export { Rating }
