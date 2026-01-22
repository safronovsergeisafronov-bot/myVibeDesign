import * as React from "react"
import { cn } from "@/lib/utils"

const Popover = React.forwardRef(({
    className,
    children,
    ...props
}, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const popoverRef = React.useRef(null)

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div ref={popoverRef} className={cn("relative inline-block", className)} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    if (child.type === PopoverTrigger) {
                        return React.cloneElement(child, { onClick: () => setIsOpen(!isOpen) })
                    }
                    if (child.type === PopoverContent) {
                        return isOpen ? React.cloneElement(child, { onClose: () => setIsOpen(false) }) : null
                    }
                }
                return child
            })}
        </div>
    )
})
Popover.displayName = "Popover"

const PopoverTrigger = React.forwardRef(({
    className,
    children,
    onClick,
    ...props
}, ref) => (
    <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn("focus:outline-none", className)}
        {...props}
    >
        {children}
    </button>
))
PopoverTrigger.displayName = "PopoverTrigger"

const PopoverContent = React.forwardRef(({
    className,
    align = "center",
    side = "bottom",
    children,
    ...props
}, ref) => {
    const alignments = {
        start: "left-0",
        center: "left-1/2 -translate-x-1/2",
        end: "right-0",
    }

    const sides = {
        top: "bottom-full mb-2",
        bottom: "top-full mt-2",
    }

    return (
        <div
            ref={ref}
            className={cn(
                "absolute z-[var(--z-popover)] w-72",
                "bg-card border border-border rounded-[var(--radius)] shadow-lg p-4",
                "animate-in fade-in-0 zoom-in-95",
                alignments[align],
                sides[side],
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
})
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverTrigger, PopoverContent }
