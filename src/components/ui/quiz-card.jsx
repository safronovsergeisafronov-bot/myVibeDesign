import * as React from "react"
import { FileText, Clock, Trophy, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Progress } from "./progress"
import { Button } from "./button"

const QuizCard = React.forwardRef(({
    className,
    title,
    questions = 0,
    duration,
    attempts = 0,
    bestScore,
    deadline,
    status = "not-started",
    onClick,
    ...props
}, ref) => {
    const statusConfig = {
        "not-started": {
            label: "Не начат",
            color: "bg-gray-500 text-white",
            buttonText: "Начать тест",
        },
        "in-progress": {
            label: "В процессе",
            color: "bg-status-in-progress text-white",
            buttonText: "Продолжить",
        },
        "completed": {
            label: "Завершен",
            color: "bg-status-completed text-white",
            buttonText: "Пройти снова",
        },
        "overdue": {
            label: "Просрочен",
            color: "bg-status-expired text-white",
            buttonText: "Просмотреть",
        },
    }

    const config = statusConfig[status] || statusConfig["not-started"]

    return (
        <Card
            ref={ref}
            className={cn("hover:shadow-md transition-shadow", className)}
            onClick={onClick}
            {...props}
        >
            <CardHeader>
                <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                        <CardTitle className="line-clamp-2 flex items-center gap-2">
                            <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                            {title}
                        </CardTitle>
                    </div>
                    <Badge className={config.color}>{config.label}</Badge>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-onest">{questions} вопросов</span>
                    </div>
                    {duration && (
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-onest">{duration} мин</span>
                        </div>
                    )}
                    {deadline && (
                        <div className="flex items-center gap-2 col-span-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="font-onest text-xs">Срок: {deadline}</span>
                        </div>
                    )}
                </div>

                {bestScore !== undefined && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Trophy className="h-4 w-4 text-warning" />
                                <span className="text-sm font-onest">Лучший результат</span>
                            </div>
                            <span className="font-inter font-bold text-lg">{bestScore}%</span>
                        </div>
                        <Progress value={bestScore} />
                    </div>
                )}

                {attempts > 0 && (
                    <div className="text-xs text-muted-foreground font-onest">
                        Попыток использовано: {attempts}
                    </div>
                )}

                <Button className="w-full" variant={status === "completed" ? "outline" : "default"}>
                    {config.buttonText}
                </Button>
            </CardContent>
        </Card>
    )
})
QuizCard.displayName = "QuizCard"

export { QuizCard }
