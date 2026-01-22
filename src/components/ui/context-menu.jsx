import * as React from "react"
import { cn } from "@/lib/utils"

const ContextMenu = React.forwardRef(({ className, children, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const menuRef = React.useRef(null)
    const triggerRef = React.useRef(null)

    const handleContextMenu = (e) => {
        e.preventDefault()
        setPosition({ x: e.clientX, y: e.clientY })
        setIsOpen(true)
    }

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }

    React.useEffect(() => {
        if (isOpen) {
            document.addEventListener("click", handleClickOutside)
            return () => document.removeEventListener("click", handleClickOutside)
        }
    }, [isOpen])

    const trigger = React.Children.toArray(children).find(
        (child) => child.type === ContextMenuTrigger
    )
    const content = React.Children.toArray(children).find(
        (child) => child.type === ContextMenuContent
    )

    return (
        <div ref={ref} className={className} {...props}>
            <div ref={triggerRef} onContextMenu={handleContextMenu}>
                {trigger?.props.children}
            </div>
            {isOpen && content && (
                <div
                    ref={menuRef}
                    className="fixed z-50"
                    style={{ left: position.x, top: position.y }}
                >
                    {React.cloneElement(content, { onClose: () => setIsOpen(false) })}
                </div>
            )}
        </div>
    )
})
ContextMenu.displayName = "ContextMenu"

const ContextMenuTrigger = ({ children }) => children
ContextMenuTrigger.displayName = "ContextMenuTrigger"

const ContextMenuContent = React.forwardRef(({ className, children, onClose, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "min-w-[8rem] overflow-hidden rounded-[var(--radius)] border bg-popover p-1 text-popover-foreground shadow-md animate-zoom-in",
                className
            )}
            {...props}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { onClose })
                    : child
            )}
        </div>
    )
})
ContextMenuContent.displayName = "ContextMenuContent"

const ContextMenuItem = React.forwardRef(({
    className,
    disabled,
    onClick,
    onClose,
    children,
    ...props
}, ref) => {
    const handleClick = (e) => {
        if (!disabled) {
            onClick?.(e)
            onClose?.()
        }
    }

    return (
        <div
            ref={ref}
            className={cn(
                "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground font-onest",
                disabled && "pointer-events-none opacity-50",
                className
            )}
            onClick={handleClick}
            {...props}
        >
            {children}
        </div>
    )
})
ContextMenuItem.displayName = "ContextMenuItem"

const ContextMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-border", className)}
        {...props}
    />
))
ContextMenuSeparator.displayName = "ContextMenuSeparator"

export {
    ContextMenu,
    ContextMenuTrigger,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
}
