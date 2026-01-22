import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "./dialog"

const Sheet = Dialog

const SheetTrigger = React.forwardRef(({ children, ...props }, ref) => (
    <button ref={ref} {...props}>
        {children}
    </button>
))
SheetTrigger.displayName = "SheetTrigger"

const SheetClose = React.forwardRef(({ className, ...props }, ref) => (
    <button
        ref={ref}
        className={cn(
            "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
            className
        )}
        {...props}
    >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
    </button>
))
SheetClose.displayName = "SheetClose"

const SheetContent = React.forwardRef(({
    side = "right",
    className,
    children,
    ...props
}, ref) => {
    const sideClasses = {
        top: "inset-x-0 top-0 border-b",
        bottom: "inset-x-0 bottom-0 border-t",
        left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
    }

    return (
        <DialogContent
            ref={ref}
            className={cn(
                "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                sideClasses[side],
                side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
                side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
                className
            )}
            {...props}
        >
            {children}
            <SheetClose />
        </DialogContent>
    )
})
SheetContent.displayName = "SheetContent"

const SheetHeader = ({ className, ...props }) => (
    <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({ className, ...props }) => (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = React.forwardRef(({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-lg font-semibold text-foreground font-inter", className)} {...props} />
))
SheetTitle.displayName = "SheetTitle"

const SheetDescription = React.forwardRef(({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground font-onest", className)} {...props} />
))
SheetDescription.displayName = "SheetDescription"

export {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
}
