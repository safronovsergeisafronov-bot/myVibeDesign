import * as React from "react"
import { cn } from "@/lib/utils"

const Accordion = React.forwardRef(({
    className,
    type = "single",
    collapsible = true,
    value,
    onValueChange,
    children,
    ...props
}, ref) => {
    const [openItems, setOpenItems] = React.useState(
        type === "single" ? (value || "") : (value || [])
    )

    const handleToggle = (itemValue) => {
        if (type === "single") {
            const newValue = openItems === itemValue && collapsible ? "" : itemValue
            setOpenItems(newValue)
            onValueChange?.(newValue)
        } else {
            const newValue = openItems.includes(itemValue)
                ? openItems.filter((v) => v !== itemValue)
                : [...openItems, itemValue]
            setOpenItems(newValue)
            onValueChange?.(newValue)
        }
    }

    const isOpen = (itemValue) => {
        if (type === "single") {
            return openItems === itemValue
        }
        return openItems.includes(itemValue)
    }

    return (
        <div ref={ref} className={cn("w-full", className)} {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === AccordionItem) {
                    return React.cloneElement(child, {
                        isOpen: isOpen(child.props.value),
                        onToggle: () => handleToggle(child.props.value),
                    })
                }
                return child
            })}
        </div>
    )
})
Accordion.displayName = "Accordion"

const AccordionItem = React.forwardRef(({
    className,
    value,
    isOpen,
    onToggle,
    children,
    ...props
}, ref) => (
    <div
        ref={ref}
        data-state={isOpen ? "open" : "closed"}
        className={cn("border-b border-border", className)}
        {...props}
    >
        {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                if (child.type === AccordionTrigger) {
                    return React.cloneElement(child, { isOpen, onClick: onToggle })
                }
                if (child.type === AccordionContent) {
                    return React.cloneElement(child, { isOpen })
                }
            }
            return child
        })}
    </div>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({
    className,
    isOpen,
    onClick,
    children,
    ...props
}, ref) => (
    <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cn(
            "flex w-full items-center justify-between py-4 font-onest font-medium text-base transition-all",
            "hover:text-primary focus:outline-none focus-visible:outline-none",
            className
        )}
        {...props}
    >
        {children}
        <svg
            className={cn(
                "h-4 w-4 shrink-0 transition-transform duration-200",
                isOpen && "rotate-180"
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
    </button>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef(({
    className,
    isOpen,
    children,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn(
            "overflow-hidden transition-all duration-200",
            isOpen ? "animate-accordion-down" : "animate-accordion-up h-0"
        )}
        {...props}
    >
        <div className={cn("pb-4 pt-0 font-onest text-muted-foreground", className)}>
            {children}
        </div>
    </div>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
