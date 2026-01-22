import * as React from "react"
import { Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { ScrollArea } from "./scroll-area"

const TimePicker = React.forwardRef(({
    className,
    value,
    onChange,
    format = "24h",
    step = 15,
    disabled,
    placeholder = "Выберите время",
    ...props
}, ref) => {
    const [open, setOpen] = React.useState(false)

    // Generate time options based on step
    const generateTimeOptions = () => {
        const options = []
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += step) {
                const h = format === "12h" && hour > 12 ? hour - 12 : hour
                const period = format === "12h" ? (hour >= 12 ? "PM" : "AM") : ""
                const hourStr = String(h).padStart(2, "0")
                const minuteStr = String(minute).padStart(2, "0")
                const timeValue = `${String(hour).padStart(2, "0")}:${minuteStr}`
                const timeLabel = format === "12h" ? `${hourStr}:${minuteStr} ${period}` : timeValue
                options.push({ value: timeValue, label: timeLabel })
            }
        }
        return options
    }

    const timeOptions = generateTimeOptions()

    const handleSelect = (timeValue) => {
        onChange?.(timeValue)
        setOpen(false)
    }

    const getDisplayValue = () => {
        if (!value) return placeholder
        const option = timeOptions.find(opt => opt.value === value)
        return option ? option.label : value
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    ref={ref}
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !value && "text-muted-foreground",
                        className
                    )}
                    disabled={disabled}
                    {...props}
                >
                    <Clock className="mr-2 h-4 w-4" />
                    {getDisplayValue()}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
                <ScrollArea className="h-[300px]">
                    <div className="flex flex-col">
                        {timeOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className={cn(
                                    "px-4 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground transition-colors font-onest",
                                    value === option.value && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                                )}
                            >
                                {option.label}
                            </button>
                        ))}
                    </div>
                </ScrollArea>
            </PopoverContent>
        </Popover>
    )
})
TimePicker.displayName = "TimePicker"

export { TimePicker }
