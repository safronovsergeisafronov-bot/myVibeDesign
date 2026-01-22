import * as React from "react"
import { cn } from "@/lib/utils"

const SelectContext = React.createContext(null)

const Select = React.forwardRef(({
    className,
    value,
    onValueChange,
    placeholder = "Выберите...",
    disabled,
    children,
    ...props
}, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [selectedValue, setSelectedValue] = React.useState(value || "")
    const [selectedLabel, setSelectedLabel] = React.useState("")
    const selectRef = React.useRef(null)

    React.useEffect(() => {
        if (value !== undefined) {
            setSelectedValue(value)
        }
    }, [value])

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleSelect = (itemValue, itemLabel) => {
        setSelectedValue(itemValue)
        setSelectedLabel(itemLabel)
        onValueChange?.(itemValue)
        setIsOpen(false)
    }

    return (
        <SelectContext.Provider value={{ selectedValue, handleSelect, setSelectedLabel }}>
            <div ref={selectRef} className={cn("relative w-full", className)} {...props}>
                <button
                    ref={ref}
                    type="button"
                    disabled={disabled}
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    className={cn(
                        "flex h-12 w-full items-center justify-between rounded-[var(--radius)] border-2 border-input bg-card px-4 py-3 font-onest text-base transition-all",
                        "hover:border-primary/70 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:border-primary",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        !selectedValue && "text-muted-foreground"
                    )}
                >
                    <span className="truncate">{selectedLabel || placeholder}</span>
                    <svg
                        className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute z-[var(--z-dropdown)] mt-1 w-full rounded-[var(--radius)] border border-input bg-card shadow-lg">
                        <div className="max-h-60 overflow-auto py-1">
                            {children}
                        </div>
                    </div>
                )}
            </div>
        </SelectContext.Provider>
    )
})
Select.displayName = "Select"

const SelectItem = React.forwardRef(({
    className,
    value,
    children,
    disabled,
    ...props
}, ref) => {
    const context = React.useContext(SelectContext)
    const isSelected = context?.selectedValue === value

    React.useEffect(() => {
        if (isSelected) {
            context?.setSelectedLabel(children)
        }
    }, [isSelected, children, context])

    return (
        <button
            ref={ref}
            type="button"
            disabled={disabled}
            onClick={() => !disabled && context?.handleSelect(value, children)}
            className={cn(
                "flex w-full cursor-pointer items-center px-4 py-2 font-onest text-base transition-colors",
                "hover:bg-muted focus:bg-muted focus:outline-none",
                isSelected && "bg-primary/10 text-primary font-medium",
                disabled && "cursor-not-allowed opacity-50",
                className
            )}
            {...props}
        >
            {children}
            {isSelected && (
                <svg className="ml-auto h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            )}
        </button>
    )
})
SelectItem.displayName = "SelectItem"

const SelectGroup = React.forwardRef(({ className, label, children, ...props }, ref) => (
    <div ref={ref} className={cn("py-1", className)} {...props}>
        {label && (
            <div className="px-4 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wide">
                {label}
            </div>
        )}
        {children}
    </div>
))
SelectGroup.displayName = "SelectGroup"

export { Select, SelectItem, SelectGroup }
