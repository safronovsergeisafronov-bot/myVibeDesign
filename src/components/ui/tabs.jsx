import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext(null)

const Tabs = React.forwardRef(({
    className,
    value,
    onValueChange,
    defaultValue,
    children,
    ...props
}, ref) => {
    const [activeTab, setActiveTab] = React.useState(value || defaultValue || "")

    React.useEffect(() => {
        if (value !== undefined) {
            setActiveTab(value)
        }
    }, [value])

    const handleTabChange = (tabValue) => {
        setActiveTab(tabValue)
        onValueChange?.(tabValue)
    }

    return (
        <TabsContext.Provider value={{ activeTab, handleTabChange }}>
            <div ref={ref} className={cn("w-full", className)} {...props}>
                {children}
            </div>
        </TabsContext.Provider>
    )
})
Tabs.displayName = "Tabs"

const TabsList = React.forwardRef(({
    className,
    variant = "default",
    ...props
}, ref) => {
    const variants = {
        default: "bg-muted p-1 rounded-[var(--radius)]",
        underline: "border-b border-border",
        pills: "gap-2",
    }

    return (
        <div
            ref={ref}
            role="tablist"
            className={cn(
                "inline-flex items-center justify-start",
                variants[variant],
                className
            )}
            {...props}
        />
    )
})
TabsList.displayName = "TabsList"

const TabsTrigger = React.forwardRef(({
    className,
    value,
    variant = "default",
    disabled,
    children,
    ...props
}, ref) => {
    const context = React.useContext(TabsContext)
    const isActive = context?.activeTab === value

    const variants = {
        default: cn(
            "px-4 py-2 font-onest font-medium text-sm rounded-[calc(var(--radius)-4px)] transition-all",
            isActive
                ? "bg-white text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
        ),
        underline: cn(
            "px-4 py-2 font-onest font-medium text-sm border-b-2 -mb-px transition-all",
            isActive
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
        ),
        pills: cn(
            "px-4 py-2 font-onest font-medium text-sm rounded-full transition-all",
            isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
        ),
    }

    return (
        <button
            ref={ref}
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={disabled}
            onClick={() => !disabled && context?.handleTabChange(value)}
            className={cn(
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
})
TabsTrigger.displayName = "TabsTrigger"

const TabsContent = React.forwardRef(({
    className,
    value,
    children,
    ...props
}, ref) => {
    const context = React.useContext(TabsContext)
    const isActive = context?.activeTab === value

    if (!isActive) return null

    return (
        <div
            ref={ref}
            role="tabpanel"
            className={cn("mt-4 focus-visible:outline-none", className)}
            {...props}
        >
            {children}
        </div>
    )
})
TabsContent.displayName = "TabsContent"

export { Tabs, TabsList, TabsTrigger, TabsContent }
