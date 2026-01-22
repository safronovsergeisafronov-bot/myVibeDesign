import * as React from "react"
import { cn } from "@/lib/utils"

const Dialog = React.forwardRef(({
    className,
    open,
    onOpenChange,
    children,
    ...props
}, ref) => {
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [open])

    if (!open) return null

    return (
        <div
            ref={ref}
            className={cn(
                "fixed inset-0 z-[var(--z-modal)] flex items-center justify-center",
                className
            )}
            {...props}
        >
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in-0"
                onClick={() => onOpenChange?.(false)}
            />
            {/* Content wrapper */}
            {children}
        </div>
    )
})
Dialog.displayName = "Dialog"

const DialogContent = React.forwardRef(({
    className,
    children,
    onClose,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative z-[var(--z-modal)] w-full max-w-lg mx-4",
            "bg-card rounded-[var(--radius)] shadow-xl",
            "animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4",
            className
        )}
        {...props}
    >
        {children}
        {onClose && (
            <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-md p-1 opacity-70 hover:opacity-100 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="sr-only">Close</span>
            </button>
        )}
    </div>
))
DialogContent.displayName = "DialogContent"

const DialogHeader = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col gap-2 p-6 pb-0", className)}
        {...props}
    />
))
DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn("text-subhero font-medium text-foreground", className)}
        {...props}
    />
))
DialogTitle.displayName = "DialogTitle"

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-muted-foreground font-onest", className)}
        {...props}
    />
))
DialogDescription.displayName = "DialogDescription"

const DialogBody = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("p-6 font-onest", className)}
        {...props}
    />
))
DialogBody.displayName = "DialogBody"

const DialogFooter = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end gap-2 p-6 pt-0",
            className
        )}
        {...props}
    />
))
DialogFooter.displayName = "DialogFooter"

export {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogBody,
    DialogFooter,
}
