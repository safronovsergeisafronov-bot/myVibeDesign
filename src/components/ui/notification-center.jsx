import * as React from "react"
import { Bell, Check, Info, AlertCircle, AlertTriangle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { ScrollArea } from "./scroll-area"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"

const NotificationCenter = React.forwardRef(({
    className,
    notifications = [],
    onNotificationClick,
    onMarkAsRead,
    onMarkAllAsRead,
    onClear,
    ...props
}, ref) => {
    const unreadCount = notifications.filter(n => !n.read).length

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button ref={ref} variant="ghost" size="icon" className="relative" {...props}>
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                        <Badge
                            variant="destructive"
                            className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                        >
                            {unreadCount > 9 ? "9+" : unreadCount}
                        </Badge>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn("w-80 p-0", className)} align="end">
                <div className="flex items-center justify-between p-4 border-b">
                    <h3 className="font-inter font-semibold">Уведомления</h3>
                    {unreadCount > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onMarkAllAsRead}
                            className="text-xs h-auto py-1"
                        >
                            Прочитать все
                        </Button>
                    )}
                </div>
                <ScrollArea className="h-[400px]">
                    {notifications.length === 0 ? (
                        <div className="py-12 text-center text-sm text-muted-foreground font-onest">
                            Нет уведомлений
                        </div>
                    ) : (
                        <div className="divide-y">
                            {notifications.map((notification) => (
                                <NotificationItem
                                    key={notification.id}
                                    {...notification}
                                    onClick={() => onNotificationClick?.(notification)}
                                    onMarkAsRead={() => onMarkAsRead?.(notification.id)}
                                />
                            ))}
                        </div>
                    )}
                </ScrollArea>
                {notifications.length > 0 && (
                    <div className="p-2 border-t">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClear}
                            className="w-full text-xs"
                        >
                            Очистить все
                        </Button>
                    </div>
                )}
            </PopoverContent>
        </Popover>
    )
})
NotificationCenter.displayName = "NotificationCenter"

const NotificationItem = React.forwardRef(({
    className,
    type = "info",
    title,
    description,
    time,
    read = false,
    onClick,
    onMarkAsRead,
    ...props
}, ref) => {
    const typeConfig = {
        info: { icon: Info, color: "text-info" },
        success: { icon: Check, color: "text-success" },
        warning: { icon: AlertTriangle, color: "text-warning" },
        error: { icon: AlertCircle, color: "text-destructive" },
    }

    const config = typeConfig[type] || typeConfig.info
    const Icon = config.icon

    return (
        <div
            ref={ref}
            className={cn(
                "p-4 hover:bg-muted cursor-pointer transition-colors relative",
                !read && "bg-muted/50",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {!read && (
                <div className="absolute top-4 right-4">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                </div>
            )}
            <div className="flex gap-3 pr-6">
                <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", config.color)} />
                <div className="flex-1 min-w-0 space-y-1">
                    <p className="font-onest font-medium text-sm line-clamp-2">{title}</p>
                    {description && (
                        <p className="text-xs text-muted-foreground font-onest line-clamp-2">
                            {description}
                        </p>
                    )}
                    <p className="text-xs text-muted-foreground font-onest">{time}</p>
                </div>
            </div>
            {!read && onMarkAsRead && (
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute bottom-2 right-2 h-6 w-6"
                    onClick={(e) => {
                        e.stopPropagation()
                        onMarkAsRead()
                    }}
                >
                    <X className="h-3 w-3" />
                </Button>
            )}
        </div>
    )
})
NotificationItem.displayName = "NotificationItem"

export { NotificationCenter, NotificationItem }
