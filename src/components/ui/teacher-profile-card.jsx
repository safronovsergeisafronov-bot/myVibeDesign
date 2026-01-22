import * as React from "react"
import { Mail, Star, Users, BookOpen, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "./card"
import { Badge } from "./badge"
import { Avatar, AvatarImage, AvatarFallback, getInitials } from "./avatar"
import { Button } from "./button"

const TeacherProfileCard = React.forwardRef(({
    className,
    name,
    email,
    avatar,
    specialization,
    experience,
    rating = 0,
    students = 0,
    completedLessons = 0,
    availability = [],
    onClick,
    ...props
}, ref) => {
    return (
        <Card ref={ref} className={cn("", className)} onClick={onClick} {...props}>
            <CardHeader>
                <div className="flex items-start gap-4">
                    <Avatar size="lg">
                        {avatar && <AvatarImage src={avatar} />}
                        <AvatarFallback>{getInitials(name)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <h3 className="text-h5 mb-1">{name}</h3>
                        {specialization && (
                            <p className="text-sm text-muted-foreground font-onest mb-2">{specialization}</p>
                        )}
                        {rating > 0 && (
                            <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 fill-warning text-warning" />
                                <span className="font-inter font-semibold">{rating.toFixed(1)}</span>
                                <span className="text-sm text-muted-foreground font-onest ml-1">
                                    ({completedLessons} уроков)
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                {email && (
                    <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="font-onest">{email}</span>
                    </div>
                )}

                <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                        <p className="text-2xl font-bold font-inter">{experience}</p>
                        <p className="text-xs text-muted-foreground font-onest">Лет опыта</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold font-inter">{students}</p>
                        <p className="text-xs text-muted-foreground font-onest">Студентов</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold font-inter">{completedLessons}</p>
                        <p className="text-xs text-muted-foreground font-onest">Уроков</p>
                    </div>
                </div>

                {availability.length > 0 && (
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium font-onest">Доступность</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {availability.map((slot, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                    {slot}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                <Button className="w-full">Записаться на урок</Button>
            </CardContent>
        </Card>
    )
})
TeacherProfileCard.displayName = "TeacherProfileCard"

export { TeacherProfileCard }
