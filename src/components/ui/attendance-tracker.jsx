import * as React from "react"
import { Check, X, Clock, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"

const AttendanceTracker = React.forwardRef(({
    className,
    studentName,
    lessons = [],
    onMarkAttendance,
    showStats = true,
    ...props
}, ref) => {
    const stats = React.useMemo(() => {
        const present = lessons.filter(l => l.status === "present").length
        const absent = lessons.filter(l => l.status === "absent").length
        const late = lessons.filter(l => l.status === "late").length
        const total = lessons.length
        const rate = total > 0 ? ((present + late * 0.5) / total * 100).toFixed(0) : 0

        return { present, absent, late, total, rate }
    }, [lessons])

    return (
        <Card ref={ref} className={cn("", className)} {...props}>
            {studentName && (
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Посещаемость: {studentName}</CardTitle>
                        {showStats && (
                            <Badge variant={stats.rate >= 80 ? "default" : "destructive"}>
                                {stats.rate}%
                            </Badge>
                        )}
                    </div>
                </CardHeader>
            )}
            <CardContent className="space-y-4">
                {showStats && (
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                        <div>
                            <p className="font-inter font-bold text-lg">{stats.total}</p>
                            <p className="text-muted-foreground font-onest">Всего</p>
                        </div>
                        <div>
                            <p className="font-inter font-bold text-lg text-success">{stats.present}</p>
                            <p className="text-muted-foreground font-onest">Был</p>
                        </div>
                        <div>
                            <p className="font-inter font-bold text-lg text-warning">{stats.late}</p>
                            <p className="text-muted-foreground font-onest">Опоздал</p>
                        </div>
                        <div>
                            <p className="font-inter font-bold text-lg text-destructive">{stats.absent}</p>
                            <p className="text-muted-foreground font-onest">Отсутствовал</p>
                        </div>
                    </div>
                )}

                <div className="space-y-2">
                    {lessons.map((lesson, index) => (
                        <AttendanceDay
                            key={lesson.id || index}
                            date={lesson.date}
                            status={lesson.status}
                            lessonName={lesson.lessonName}
                            onStatusChange={(newStatus) => onMarkAttendance?.(lesson, newStatus)}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    )
})
AttendanceTracker.displayName = "AttendanceTracker"

const AttendanceDay = React.forwardRef(({
    className,
    date,
    status = "pending",
    lessonName,
    onStatusChange,
    ...props
}, ref) => {
    const statusConfig = {
        present: { icon: Check, color: "text-success bg-success/10", label: "Был" },
        absent: { icon: X, color: "text-destructive bg-destructive/10", label: "Отсутствовал" },
        late: { icon: Clock, color: "text-warning bg-warning/10", label: "Опоздал" },
        pending: { icon: Minus, color: "text-muted-foreground bg-muted", label: "Не отмечен" },
    }

    const config = statusConfig[status]
    const Icon = config.icon

    return (
        <div
            ref={ref}
            className={cn(
                "flex items-center justify-between p-3 rounded-lg border transition-colors hover:bg-accent/50",
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-full", config.color)}>
                    <Icon className="h-4 w-4" />
                </div>
                <div>
                    <p className="text-sm font-medium font-onest">{date}</p>
                    {lessonName && (
                        <p className="text-xs text-muted-foreground font-onest">{lessonName}</p>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-1">
                {["present", "late", "absent"].map((statusOption) => (
                    <button
                        key={statusOption}
                        onClick={() => onStatusChange?.(statusOption)}
                        className={cn(
                            "p-2 rounded-md transition-colors",
                            status === statusOption
                                ? statusConfig[statusOption].color
                                : "hover:bg-muted"
                        )}
                        title={statusConfig[statusOption].label}
                    >
                        {React.createElement(statusConfig[statusOption].icon, { className: "h-4 w-4" })}
                    </button>
                ))}
            </div>
        </div>
    )
})
AttendanceDay.displayName = "AttendanceDay"

export { AttendanceTracker, AttendanceDay }
