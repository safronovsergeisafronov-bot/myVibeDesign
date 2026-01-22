import * as React from "react"
import { X, Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "./badge"
import { Button } from "./button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

const MultiSelect = React.forwardRef(({
    className,
    options = [],
    value = [],
    onChange,
    placeholder = "Выберите...",
    maxSelected,
    disabled,
    ...props
}, ref) => {
    const [open, setOpen] = React.useState(false)

    const handleSelect = (optionValue) => {
        const newValue = value.includes(optionValue)
            ? value.filter((v) => v !== optionValue)
            : maxSelected && value.length >= maxSelected
                ? value
                : [...value, optionValue]
        onChange?.(newValue)
    }

    const handleRemove = (optionValue, e) => {
        e.stopPropagation()
        onChange?.(value.filter((v) => v !== optionValue))
    }

    const selectedOptions = options.filter((opt) => value.includes(opt.value))

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    ref={ref}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn("w-full justify-between min-h-10 h-auto", className)}
                    disabled={disabled}
                    {...props}
                >
                    <div className="flex flex-wrap gap-1 flex-1">
                        {selectedOptions.length > 0 ? (
                            selectedOptions.map((option) => (
                                <Badge key={option.value} variant="secondary" className="gap-1">
                                    {option.label}
                                    <X
                                        className="h-3 w-3 cursor-pointer"
                                        onClick={(e) => handleRemove(option.value, e)}
                                    />
                                </Badge>
                            ))
                        ) : (
                            <span className="text-muted-foreground">{placeholder}</span>
                        )}
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0" align="start">
                <Command>
                    <CommandInput placeholder="Поиск..." />
                    <CommandList>
                        <CommandEmpty>Не найдено</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => {
                                const isSelected = value.includes(option.value)
                                return (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={() => handleSelect(option.value)}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                isSelected ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {option.label}
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
})
MultiSelect.displayName = "MultiSelect"

export { MultiSelect }
