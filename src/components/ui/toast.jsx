import * as React from "react"
import { cn } from "@/lib/utils"

// Toast context
const ToastContext = React.createContext(null)

// Toast Provider
export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = React.useState([])

    const addToast = React.useCallback(({ title, description, variant = "default", duration = 5000 }) => {
        const id = Date.now()
        setToasts((prev) => [...prev, { id, title, description, variant }])

        if (duration > 0) {
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id))
            }, duration)
        }

        return id
    }, [])

    const removeToast = React.useCallback((id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
    }, [])

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}
            <Toaster />
        </ToastContext.Provider>
    )
}

// Hook to use toast
export const useToast = () => {
    const context = React.useContext(ToastContext)
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider")
    }
    return context
}

// Toaster container
const Toaster = () => {
    const { toasts, removeToast } = React.useContext(ToastContext)

    return (
        <div className="fixed bottom-4 right-4 z-[var(--z-toast)] flex flex-col gap-2 w-full max-w-sm">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    variant={toast.variant}
                    onClose={() => removeToast(toast.id)}
                >
                    {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
                    {toast.description && <ToastDescription>{toast.description}</ToastDescription>}
                </Toast>
            ))}
        </div>
    )
}

// Toast component
const toastVariants = {
    default: "bg-card border border-border",
    success: "bg-[hsl(var(--success))] text-white border-[hsl(var(--success))]",
    warning: "bg-[hsl(var(--warning))] text-[hsl(var(--warning-foreground))] border-[hsl(var(--warning))]",
    destructive: "bg-destructive text-destructive-foreground border-destructive",
    info: "bg-[hsl(var(--info))] text-white border-[hsl(var(--info))]",
}

const Toast = React.forwardRef(({
    className,
    variant = "default",
    onClose,
    children,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex items-start gap-3 p-4 rounded-[var(--radius)] shadow-lg font-onest",
            "animate-in slide-in-from-right-full fade-in-0",
            toastVariants[variant],
            className
        )}
        {...props}
    >
        <div className="flex-1">{children}</div>
        {onClose && (
            <button
                onClick={onClose}
                className="shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        )}
    </div>
))
Toast.displayName = "Toast"

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("font-semibold text-sm", className)}
        {...props}
    />
))
ToastTitle.displayName = "ToastTitle"

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm opacity-90", className)}
        {...props}
    />
))
ToastDescription.displayName = "ToastDescription"

export { Toast, ToastTitle, ToastDescription, Toaster }
