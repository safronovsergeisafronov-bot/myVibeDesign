import * as React from "react"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "./input"
import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from "./command"

const SearchBar = React.forwardRef(({
    className,
    value,
    onChange,
    onSearch,
    placeholder = "Поиск...",
    suggestions = [],
    onSuggestionClick,
    showSuggestions = true,
    loading = false,
    debounceMs = 300,
    ...props
}, ref) => {
    const [inputValue, setInputValue] = React.useState(value || "")
    const [showDropdown, setShowDropdown] = React.useState(false)
    const [debouncedValue, setDebouncedValue] = React.useState(inputValue)
    const inputRef = React.useRef(null)

    // Debounce logic
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(inputValue)
        }, debounceMs)

        return () => clearTimeout(timer)
    }, [inputValue, debounceMs])

    // Call onSearch when debounced value changes
    React.useEffect(() => {
        if (debouncedValue) {
            onSearch?.(debouncedValue)
        }
    }, [debouncedValue, onSearch])

    const handleInputChange = (e) => {
        const newValue = e.target.value
        setInputValue(newValue)
        onChange?.(newValue)
        setShowDropdown(true)
    }

    const handleClear = () => {
        setInputValue("")
        onChange?.("")
        setShowDropdown(false)
        inputRef.current?.focus()
    }

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion.label || suggestion)
        setShowDropdown(false)
        onSuggestionClick?.(suggestion)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setShowDropdown(false)
        }
    }

    React.useEffect(() => {
        setInputValue(value || "")
    }, [value])

    return (
        <div ref={ref} className={cn("relative w-full", className)}>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setShowDropdown(true)}
                    placeholder={placeholder}
                    className="pl-10 pr-10"
                    {...props}
                />
                {inputValue && (
                    <button
                        onClick={handleClear}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <X className="h-4 w-4" />
                    </button>
                )}
            </div>

            {showSuggestions && showDropdown && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 z-50">
                    <Command className="border rounded-[var(--radius)] shadow-lg">
                        <CommandList>
                            {loading ? (
                                <div className="py-6 text-center text-sm text-muted-foreground font-onest">
                                    Загрузка...
                                </div>
                            ) : (
                                <>
                                    {suggestions.length === 0 ? (
                                        <CommandEmpty>Ничего не найдено</CommandEmpty>
                                    ) : (
                                        <CommandGroup>
                                            {suggestions.map((suggestion, index) => (
                                                <CommandItem
                                                    key={suggestion.value || index}
                                                    onSelect={() => handleSuggestionClick(suggestion)}
                                                >
                                                    {suggestion.icon && (
                                                        <span className="mr-2">{suggestion.icon}</span>
                                                    )}
                                                    <span>{suggestion.label || suggestion}</span>
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    )}
                                </>
                            )}
                        </CommandList>
                    </Command>
                </div>
            )}
        </div>
    )
})
SearchBar.displayName = "SearchBar"

export { SearchBar }
