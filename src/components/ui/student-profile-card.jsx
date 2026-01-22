import * as React from "react"
import { Mail, Phone, Calendar, Award, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "./card"
import { Badge } from "./badge"
import { Avatar, AvatarImage, AvatarFallback, getInitials } from "./avatar"
import { Progress } from "./progress"

const StudentProfileCard = React.forwardRef(({
    className,
    name,
    email,
    phone,
    avatar,
    level,
    courses = 0,
    completedLessons = 0,
    attendanceRate,
    achievements = [],
    nextLesson,
    ...props
}, ref) => {
    const getLevelColor = (lvl) => {
        const colors = {
            'A1': 'bg-level-a1', 'A2': 'bg-level-a2',
            'B1': 'bg-level-b1', 'B2': 'bg-level-b2',
            'C1': 'bg-level-c1', 'C2': 'bg-level-c2',
        }
        return colors[lvl] || 'bg-muted'
    }

    return (
        <Card ref={ref} className={cn("", className)} {...props}>
            <CardHeader>
                <div className="flex items-start gap-4">
                    <Avatar size="lg">
                        {avatar && <AvatarImage src={avatar} />}
                        <AvatarFallback>{getInitials(name)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <h3 className="text-h5 mb-1">{name}</h3>
                        {level && <Badge className={getLevelColor(level)}>{level}</Badge>}
                        <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                            {email && (
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    <span className="font-onest">{email}</span>
                                </div>
                            )}
                            {phone && (
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    <span className="font-onest">{phone}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-2xl font-bold font-inter">{courses}</p>
                        <p className="text-xs text-muted-foreground font-onest">Курсов</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold font-inter">{completedLessons}</p>
                        <p className="text-xs text-muted-foreground font-onest">Уроков</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold font-inter">{attendanceRate}%</p>
                        <p className="text-xs text-muted-foreground font-onest">Посещаемость</p>
                    </div>
                </div>

                {attendanceRate && (
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-onest">Прогресс посещаемости</span>
                            <TrendingUp className="h-4 w-4 text-success" />
                        </div>
                        <Progress value={attendanceRate} />
                    </div>
                )}

                {nextLesson && (
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                        <Calendar className="h-4 w-4 text-primary" />
                        <div>
                            <p className="text-sm font-medium font-onest">Следующий урок</p>
                            <p className="text-xs text-muted-foreground font-onest">{nextLesson}</p>
                        </div>
                    </div>
                )}

                {achievements.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            <span className="text-sm font-medium font-onest">Достижения</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {achievements.slice(0, 3).map((achievement, i) => (
                                <Badge key={i} variant="secondary">{achievement}</Badge>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    )
})
StudentProfileCard.displayName = "StudentProfileCard"

export { StudentProfileCard }
