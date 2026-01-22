import * as React from "react"
import { cn } from "@/lib/utils"

const TooltipContext = React.createContext(null)

const TooltipProvider = ({ children, delayDuration = 200 }) => {
    return (
        <TooltipContext.Provider value={{ delayDuration }}>
            {children}
        </TooltipContext.Provider>
    )
}

const Tooltip = React.forwardRef(({
    className,
    children,
    content,
    side = "top",
    ...props
}, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)
    const context = React.useContext(TooltipContext)
    const timeoutRef = React.useRef(null)

    const showTooltip = () => {
        timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
        }, context?.delayDuration || 200)
    }

    const hideTooltip = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsVisible(false)
    }

    const positions = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    }

    const arrows = {
        top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-accent",
        bottom: "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-accent",
        left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-accent",
        right: "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-accent",
    }

    return (
        <div
            ref={ref}
            className={cn("relative inline-flex", className)}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
            onFocus={showTooltip}
            onBlur={hideTooltip}
            {...props}
        >
            {children}
            {isVisible && content && (
                <div
                    role="tooltip"
                    className={cn(
                        "absolute z-[var(--z-tooltip)] px-3 py-1.5 text-sm font-onest",
                        "bg-accent text-white rounded-md shadow-md",
                        "animate-in fade-in-0 zoom-in-95",
                        positions[side]
                    )}
                >
                    {content}
                    <div
                        className={cn(
                            "absolute w-0 h-0 border-4",
                            arrows[side]
                        )}
                    />
                </div>
            )}
        </div>
    )
})
Tooltip.displayName = "Tooltip"

export { Tooltip, TooltipProvider }
