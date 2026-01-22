import * as React from "react"
import { BookOpen, Clock, Users, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Progress } from "./progress"
import { Avatar, AvatarImage, AvatarFallback, getInitials } from "./avatar"
import { Button } from "./button"

const CourseCard = React.forwardRef(({
    className,
    title,
    description,
    image,
    level,
    duration,
    lessons,
    students,
    teacher,
    teacherAvatar,
    price,
    progress,
    nextLesson,
    onClick,
    ...props
}, ref) => {
    const getLevelColor = (lvl) => {
        const colors = {
            'A1': 'bg-level-a1 text-black',
            'A2': 'bg-level-a2 text-black',
            'B1': 'bg-level-b1 text-black',
            'B2': 'bg-level-b2 text-black',
            'C1': 'bg-level-c1 text-black',
            'C2': 'bg-level-c2 text-white',
        }
        return colors[lvl] || 'bg-muted'
    }

    return (
        <Card
            ref={ref}
            className={cn("overflow-hidden hover:shadow-lg transition-shadow", className)}
            onClick={onClick}
            {...props}
        >
            {image && (
                <div className="aspect-video w-full overflow-hidden">
                    <img src={image} alt={title} className="h-full w-full object-cover" />
                </div>
            )}
            <CardHeader>
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="line-clamp-2">{title}</CardTitle>
                    {level && (
                        <Badge className={getLevelColor(level)}>{level}</Badge>
                    )}
                </div>
                {description && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-2 font-onest">{description}</p>
                )}
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                    {duration && (
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="font-onest">{duration}</span>
                        </div>
                    )}
                    {lessons && (
                        <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <span className="font-onest">{lessons} уроков</span>
                        </div>
                    )}
                    {students !== undefined && (
                        <div className="flex items-center gap-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="font-onest">{students} студентов</span>
                        </div>
                    )}
                    {nextLesson && (
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="font-onest text-xs">{nextLesson}</span>
                        </div>
                    )}
                </div>

                {progress !== undefined && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-onest text-muted-foreground">Прогресс</span>
                            <span className="font-inter font-semibold">{progress}%</span>
                        </div>
                        <Progress value={progress} />
                    </div>
                )}

                {teacher && (
                    <div className="flex items-center gap-3 pt-2 border-t">
                        <Avatar size="sm">
                            {teacherAvatar && <AvatarImage src={teacherAvatar} />}
                            <AvatarFallback>{getInitials(teacher)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium font-onest truncate">{teacher}</p>
                            <p className="text-xs text-muted-foreground font-onest">Преподаватель</p>
                        </div>
                    </div>
                )}

                {price && (
                    <div className="pt-2">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold font-inter">{price} ₽</span>
                            <Button size="sm">Записаться</Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
})
CourseCard.displayName = "CourseCard"

export { CourseCard }
