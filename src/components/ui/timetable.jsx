import * as React from "react"
import { Clock, User, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"

const Timetable = React.forwardRef(({
    className,
    slots = [],
    onSlotClick,
    ...props
}, ref) => {
    const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]

    const groupedSlots = React.useMemo(() => {
        return slots.reduce((acc, slot) => {
            if (!acc[slot.day]) {
                acc[slot.day] = []
            }
            acc[slot.day].push(slot)
            return acc
        }, {})
    }, [slots])

    return (
        <div ref={ref} className={cn("space-y-4", className)} {...props}>
            {days.map((day) => {
                const daySlots = groupedSlots[day] || []
                if (daySlots.length === 0) return null

                return (
                    <div key={day} className="space-y-2">
                        <h3 className="text-sm font-semibold font-inter text-muted-foreground uppercase tracking-wide">
                            {day}
                        </h3>
                        <div className="space-y-2">
                            {daySlots.map((slot, index) => (
                                <TimetableSlot
                                    key={slot.id || index}
                                    {...slot}
                                    onClick={() => onSlotClick?.(slot)}
                                />
                            ))}
                        </div>
                    </div>
                )
            })}
        </div>
    )
})
Timetable.displayName = "Timetable"

const TimetableSlot = React.forwardRef(({
    className,
    time,
    course,
    teacher,
    room,
    students,
    level,
    status = "scheduled",
    onClick,
    ...props
}, ref) => {
    const statusColors = {
        scheduled: "border-l-primary",
        ongoing: "border-l-success bg-success/5",
        completed: "border-l-muted",
        cancelled: "border-l-destructive bg-destructive/5",
    }

    const getLevelColor = (lvl) => {
        const colors = {
            'A1': 'bg-level-a1', 'A2': 'bg-level-a2',
            'B1': 'bg-level-b1', 'B2': 'bg-level-b2',
            'C1': 'bg-level-c1', 'C2': 'bg-level-c2',
        }
        return colors[lvl] || 'bg-muted'
    }

    return (
        <Card
            ref={ref}
            className={cn(
                "border-l-4 cursor-pointer hover:shadow-md transition-shadow",
                statusColors[status],
                status === "cancelled" && "opacity-60",
                className
            )}
            onClick={onClick}
            {...props}
        >
            <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="font-inter font-semibold">{time}</span>
                            {level && (
                                <Badge className={cn(getLevelColor(level), "text-xs")}>
                                    {level}
                                </Badge>
                            )}
                        </div>
                        <h4 className="font-onest font-medium text-base">{course}</h4>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            {teacher && (
                                <div className="flex items-center gap-1">
                                    <User className="h-3 w-3" />
                                    <span className="font-onest">{teacher}</span>
                                </div>
                            )}
                            {room && (
                                <div className="flex items-center gap-1">
                                    <MapPin className="h-3 w-3" />
                                    <span className="font-onest">{room}</span>
                                </div>
                            )}
                            {students !== undefined && (
                                <Badge variant="outline" className="text-xs">
                                    {students} студентов
                                </Badge>
                            )}
                        </div>
                    </div>
                    {status === "cancelled" && (
                        <Badge variant="destructive" className="text-xs">
                            Отменено
                        </Badge>
                    )}
                    {status === "ongoing" && (
                        <Badge variant="default" className="text-xs bg-success">
                            Идёт сейчас
                        </Badge>
                    )}
                </div>
            </CardContent>
        </Card>
    )
})
TimetableSlot.displayName = "TimetableSlot"

export { Timetable, TimetableSlot }
