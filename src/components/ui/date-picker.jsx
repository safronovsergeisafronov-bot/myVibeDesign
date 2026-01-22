import * as React from "react"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { Calendar as CalendarIcon } from "lucide-react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

// Simple Calendar component for date selection
const Calendar = React.forwardRef(({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}, ref) => {
    return (
        <DayPicker
            ref={ref}
            showOutsideDays={showOutsideDays}
            className={cn("p-3 font-onest", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                caption: "flex justify-center pt-1 relative items-center",
                caption_label: "text-sm font-medium font-inter",
                nav: "space-x-1 flex items-center",
                nav_button: cn(
                    "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center rounded-md text-sm transition-colors hover:bg-muted"
                ),
                nav_button_previous: "absolute left-1",
                nav_button_next: "absolute right-1",
                table: "w-full border-collapse space-y-1",
                head_row: "flex",
                head_cell: "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
                row: "flex w-full mt-2",
                cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                day: cn(
                    "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-md hover:bg-accent hover:text-accent-foreground"
                ),
                day_range_end: "day-range-end",
                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                day_today: "bg-accent text-accent-foreground",
                day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
                day_disabled: "text-muted-foreground opacity-50",
                day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                day_hidden: "invisible",
                ...classNames,
            }}
            {...props}
        />
    )
})
Calendar.displayName = "Calendar"

// DatePicker component
const DatePicker = React.forwardRef(({
    className,
    selected,
    onSelect,
    placeholder = "Выберите дату",
    disabled,
    ...props
}, ref) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    ref={ref}
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !selected && "text-muted-foreground",
                        className
                    )}
                    disabled={disabled}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selected ? format(selected, "PPP", { locale: ru }) : placeholder}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={selected}
                    onSelect={onSelect}
                    initialFocus
                    locale={ru}
                    {...props}
                />
            </PopoverContent>
        </Popover>
    )
})
DatePicker.displayName = "DatePicker"

// DateRangePicker component
const DateRangePicker = React.forwardRef(({
    className,
    selected,
    onSelect,
    placeholder = "Выберите период",
    disabled,
    ...props
}, ref) => {
    const [date, setDate] = React.useState(selected)

    React.useEffect(() => {
        setDate(selected)
    }, [selected])

    const handleSelect = (range) => {
        setDate(range)
        onSelect?.(range)
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    ref={ref}
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                        className
                    )}
                    disabled={disabled}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date?.from ? (
                        date.to ? (
                            <>
                                {format(date.from, "PPP", { locale: ru })} -{" "}
                                {format(date.to, "PPP", { locale: ru })}
                            </>
                        ) : (
                            format(date.from, "PPP", { locale: ru })
                        )
                    ) : (
                        placeholder
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={handleSelect}
                    numberOfMonths={2}
                    locale={ru}
                    initialFocus
                    {...props}
                />
            </PopoverContent>
        </Popover>
    )
})
DateRangePicker.displayName = "DateRangePicker"

export { Calendar, DatePicker, DateRangePicker }
