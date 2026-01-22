import * as React from "react"
import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef(({
    className,
    checked,
    onCheckedChange,
    disabled,
    ...props
}, ref) => {
    const [isChecked, setIsChecked] = React.useState(checked || false)

    React.useEffect(() => {
        if (checked !== undefined) {
            setIsChecked(checked)
        }
    }, [checked])

    const handleChange = (e) => {
        const newValue = e.target.checked
        setIsChecked(newValue)
        onCheckedChange?.(newValue)
    }

    return (
        <div className="relative inline-flex items-center">
            <input
                type="checkbox"
                ref={ref}
                checked={isChecked}
                onChange={handleChange}
                disabled={disabled}
                className="sr-only peer"
                {...props}
            />
            <div
                className={cn(
                    "h-5 w-5 shrink-0 rounded-md border-2 border-primary ring-offset-background transition-all",
                    "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
                    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                    isChecked ? "bg-primary border-primary" : "bg-white",
                    className
                )}
                onClick={() => !disabled && handleChange({ target: { checked: !isChecked } })}
            >
                {isChecked && (
                    <svg
                        className="h-full w-full text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                )}
            </div>
        </div>
    )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }
