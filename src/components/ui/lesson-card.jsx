import * as React from "react"
import { Video, Users as UsersIcon, FileText, CheckCircle2, Clock, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Progress } from "./progress"
import { Button } from "./button"

const LessonCard = React.forwardRef(({
    className,
    title,
    description,
    duration,
    type = "video",
    completed = false,
    progress,
    materials = [],
    dueDate,
    onClick,
    ...props
}, ref) => {
    const typeIcons = {
        video: <Video className="h-4 w-4" />,
        live: <UsersIcon className="h-4 w-4" />,
        homework: <FileText className="h-4 w-4" />,
        test: <FileText className="h-4 w-4" />,
    }

    const typeLabels = {
        video: "Видеоурок",
        live: "Онлайн-занятие",
        homework: "Домашнее задание",
        test: "Тест",
    }

    const typeColors = {
        video: "bg-info text-info-foreground",
        live: "bg-success text-success-foreground",
        homework: "bg-warning text-warning-foreground",
        test: "bg-destructive text-destructive-foreground",
    }

    return (
        <Card
            ref={ref}
            className={cn(
                "hover:shadow-md transition-shadow",
                completed && "opacity-75",
                className
            )}
            onClick={onClick}
            {...props}
        >
            <CardHeader>
                <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                            <Badge className={typeColors[type]}>
                                {typeIcons[type]}
                                <span className="ml-1">{typeLabels[type]}</span>
                            </Badge>
                            {completed && (
                                <CheckCircle2 className="h-5 w-5 text-success" />
                            )}
                        </div>
                        <CardTitle className="line-clamp-2">{title}</CardTitle>
                    </div>
                </div>
                {description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 font-onest">{description}</p>
                )}
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm">
                    {duration && (
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-onest">{duration} мин</span>
                        </div>
                    )}
                    {dueDate && (
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="font-onest text-xs">{dueDate}</span>
                        </div>
                    )}
                </div>

                {progress !== undefined && !completed && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-onest text-muted-foreground">Прогресс</span>
                            <span className="font-inter font-semibold">{progress}%</span>
                        </div>
                        <Progress value={progress} />
                    </div>
                )}

                {materials.length > 0 && (
                    <div className="space-y-2">
                        <p className="text-sm font-medium font-onest">Материалы:</p>
                        <div className="flex flex-wrap gap-2">
                            {materials.map((material, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                    <FileText className="h-3 w-3 mr-1" />
                                    {material}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                <Button
                    className="w-full"
                    variant={completed ? "outline" : "default"}
                >
                    {completed ? "Повторить" : type === "live" ? "Присоединиться" : "Начать"}
                </Button>
            </CardContent>
        </Card>
    )
})
LessonCard.displayName = "LessonCard"

export { LessonCard }
