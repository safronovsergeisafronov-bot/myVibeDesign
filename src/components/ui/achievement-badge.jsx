import * as React from "react"
import { Trophy, Award, Star, Medal, Target, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "./card"
import { Badge } from "./badge"

const ACHIEVEMENT_ICONS = {
    trophy: Trophy,
    award: Award,
    star: Star,
    medal: Medal,
    target: Target,
    zap: Zap,
}

const AchievementBadge = React.forwardRef(({
    className,
    icon = "trophy",
    title,
    description,
    date,
    earned = false,
    rarity = "common",
    progress,
    onClick,
    ...props
}, ref) => {
    const rarityConfig = {
        common: "bg-gray-500 text-white",
        rare: "bg-info text-white",
        epic: "bg-primary text-white",
        legendary: "bg-warning text-white",
    }

    const IconComponent = typeof icon === "string" ? ACHIEVEMENT_ICONS[icon] || Trophy : icon

    return (
        <Card
            ref={ref}
            className={cn(
                "cursor-pointer hover:shadow-md transition-all",
                !earned && "opacity-50 grayscale",
                className
            )}
            onClick={onClick}
            {...props}
        >
            <CardContent className="p-4">
                <div className="flex items-start gap-3">
                    <div className={cn(
                        "p-3 rounded-full flex-shrink-0",
                        earned ? rarityConfig[rarity] : "bg-muted text-muted-foreground"
                    )}>
                        {React.isValidElement(IconComponent) ? (
                            IconComponent
                        ) : (
                            <IconComponent className="h-6 w-6" />
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                            <h4 className="font-onest font-semibold text-sm line-clamp-1">
                                {title}
                            </h4>
                            {rarity !== "common" && (
                                <Badge className={cn("text-xs", rarityConfig[rarity])}>
                                    {rarity}
                                </Badge>
                            )}
                        </div>
                        {description && (
                            <p className="text-xs text-muted-foreground mt-1 font-onest line-clamp-2">
                                {description}
                            </p>
                        )}
                        {earned && date && (
                            <p className="text-xs text-muted-foreground mt-2 font-onest">
                                Получено: {date}
                            </p>
                        )}
                        {!earned && progress !== undefined && (
                            <div className="mt-2">
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="text-muted-foreground font-onest">Прогресс</span>
                                    <span className="font-inter font-semibold">{progress}%</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-1.5">
                                    <div
                                        className="bg-primary h-1.5 rounded-full transition-all"
                                        style={{ width: `${progress}%` }}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
})
AchievementBadge.displayName = "AchievementBadge"

const AchievementGrid = React.forwardRef(({
    className,
    achievements = [],
    columns = 3,
    onAchievementClick,
    ...props
}, ref) => {
    const gridCols = {
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
    }

    return (
        <div
            ref={ref}
            className={cn(
                "grid gap-4",
                gridCols[columns] || "grid-cols-3",
                className
            )}
            {...props}
        >
            {achievements.map((achievement, index) => (
                <AchievementBadge
                    key={achievement.id || index}
                    {...achievement}
                    onClick={() => onAchievementClick?.(achievement)}
                />
            ))}
        </div>
    )
})
AchievementGrid.displayName = "AchievementGrid"

export { AchievementBadge, AchievementGrid, ACHIEVEMENT_ICONS }
