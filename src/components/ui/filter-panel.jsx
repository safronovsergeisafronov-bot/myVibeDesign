import * as React from "react"
import { Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Button } from "./button"
import { Badge } from "./badge"
import { Checkbox } from "./checkbox"
import { Label } from "./label"
import { Select, SelectItem } from "./select"

const FilterPanel = React.forwardRef(({
    className,
    title = "Фильтры",
    onReset,
    activeFiltersCount = 0,
    children,
    ...props
}, ref) => {
    return (
        <Card ref={ref} className={cn("", className)} {...props}>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Filter className="h-5 w-5" />
                        <CardTitle className="text-base">{title}</CardTitle>
                        {activeFiltersCount > 0 && (
                            <Badge variant="secondary" className="h-5 px-2">
                                {activeFiltersCount}
                            </Badge>
                        )}
                    </div>
                    {activeFiltersCount > 0 && onReset && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onReset}
                            className="h-8 px-2 text-xs"
                        >
                            Сбросить
                        </Button>
                    )}
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                {children}
            </CardContent>
        </Card>
    )
})
FilterPanel.displayName = "FilterPanel"

const FilterGroup = React.forwardRef(({
    className,
    label,
    children,
    collapsible = false,
    defaultOpen = true,
    ...props
}, ref) => {
    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    return (
        <div ref={ref} className={cn("space-y-3", className)} {...props}>
            <div
                className={cn(
                    "flex items-center justify-between",
                    collapsible && "cursor-pointer"
                )}
                onClick={() => collapsible && setIsOpen(!isOpen)}
            >
                <Label className="text-sm font-medium font-inter">{label}</Label>
                {collapsible && (
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                        <X className={cn(
                            "h-4 w-4 transition-transform",
                            isOpen ? "rotate-0" : "rotate-45"
                        )} />
                    </Button>
                )}
            </div>
            {isOpen && (
                <div className="space-y-2">
                    {children}
                </div>
            )}
        </div>
    )
})
FilterGroup.displayName = "FilterGroup"

const FilterCheckbox = React.forwardRef(({
    className,
    value,
    checked,
    onCheckedChange,
    children,
    ...props
}, ref) => {
    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <Checkbox
                ref={ref}
                id={value}
                checked={checked}
                onCheckedChange={onCheckedChange}
                {...props}
            />
            <Label
                htmlFor={value}
                className="text-sm font-normal font-onest cursor-pointer"
            >
                {children}
            </Label>
        </div>
    )
})
FilterCheckbox.displayName = "FilterCheckbox"

const FilterSelect = React.forwardRef(({
    className,
    options = [],
    value,
    onChange,
    placeholder = "Выберите...",
    ...props
}, ref) => {
    return (
        <Select
            ref={ref}
            value={value}
            onChange={onChange}
            className={cn("w-full", className)}
            {...props}
        >
            <option value="">{placeholder}</option>
            {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                    {option.label}
                </SelectItem>
            ))}
        </Select>
    )
})
FilterSelect.displayName = "FilterSelect"

export { FilterPanel, FilterGroup, FilterCheckbox, FilterSelect }
