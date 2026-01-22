import * as React from "react"
import { cn } from "@/lib/utils"

const DropdownMenu = React.forwardRef(({
    className,
    children,
    ...props
}, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const menuRef = React.useRef(null)

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div ref={menuRef} className={cn("relative inline-block", className)} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    if (child.type === DropdownMenuTrigger) {
                        return React.cloneElement(child, { onClick: () => setIsOpen(!isOpen) })
                    }
                    if (child.type === DropdownMenuContent) {
                        return isOpen ? React.cloneElement(child, { onClose: () => setIsOpen(false) }) : null
                    }
                }
                return child
            })}
        </div>
    )
})
DropdownMenu.displayName = "DropdownMenu"

const DropdownMenuTrigger = React.forwardRef(({
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
DropdownMenuTrigger.displayName = "DropdownMenuTrigger"

const DropdownMenuContent = React.forwardRef(({
    className,
    align = "start",
    children,
    ...props
}, ref) => {
    const alignments = {
        start: "left-0",
        center: "left-1/2 -translate-x-1/2",
        end: "right-0",
    }

    return (
        <div
            ref={ref}
            className={cn(
                "absolute z-[var(--z-dropdown)] mt-2 min-w-[180px]",
                "bg-card border border-border rounded-[var(--radius)] shadow-lg",
                "animate-in fade-in-0 zoom-in-95",
                alignments[align],
                className
            )}
            {...props}
        >
            <div className="py-1">{children}</div>
        </div>
    )
})
DropdownMenuContent.displayName = "DropdownMenuContent"

const DropdownMenuItem = React.forwardRef(({
    className,
    disabled,
    destructive,
    children,
    ...props
}, ref) => (
    <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
            "flex w-full items-center px-4 py-2 text-sm font-onest transition-colors",
            "focus:outline-none focus:bg-muted",
            destructive
                ? "text-destructive hover:bg-destructive/10"
                : "text-foreground hover:bg-muted",
            disabled && "pointer-events-none opacity-50",
            className
        )}
        {...props}
    >
        {children}
    </button>
))
DropdownMenuItem.displayName = "DropdownMenuItem"

const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("my-1 h-px bg-border", className)}
        {...props}
    />
))
DropdownMenuSeparator.displayName = "DropdownMenuSeparator"

const DropdownMenuLabel = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "px-4 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide",
            className
        )}
        {...props}
    />
))
DropdownMenuLabel.displayName = "DropdownMenuLabel"

export {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
}
