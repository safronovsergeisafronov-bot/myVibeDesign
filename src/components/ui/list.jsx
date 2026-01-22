import * as React from "react"
import { cn } from "@/lib/utils"

const List = React.forwardRef(({
    className,
    variant = "default",
    ...props
}, ref) => {
    const variants = {
        default: "",
        bordered: "border border-border rounded-[var(--radius)] divide-y divide-border",
        striped: "divide-y divide-border [&>*:nth-child(odd)]:bg-muted/50",
    }

    return (
        <ul
            ref={ref}
            className={cn("w-full font-onest", variants[variant], className)}
            {...props}
        />
    )
})
List.displayName = "List"

const ListItem = React.forwardRef(({
    className,
    interactive,
    selected,
    disabled,
    ...props
}, ref) => (
    <li
        ref={ref}
        className={cn(
            "flex items-center gap-3 px-4 py-3",
            interactive && "cursor-pointer transition-colors hover:bg-muted",
            selected && "bg-primary/10 text-primary",
            disabled && "opacity-50 pointer-events-none",
            className
        )}
        {...props}
    />
))
ListItem.displayName = "ListItem"

const ListItemIcon = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex shrink-0 items-center justify-center", className)}
        {...props}
    />
))
ListItemIcon.displayName = "ListItemIcon"

const ListItemContent = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 min-w-0", className)} {...props} />
))
ListItemContent.displayName = "ListItemContent"

const ListItemTitle = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("font-medium text-foreground truncate", className)}
        {...props}
    />
))
ListItemTitle.displayName = "ListItemTitle"

const ListItemDescription = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("text-sm text-muted-foreground truncate", className)}
        {...props}
    />
))
ListItemDescription.displayName = "ListItemDescription"

const ListItemAction = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex shrink-0 items-center", className)}
        {...props}
    />
))
ListItemAction.displayName = "ListItemAction"

export {
    List,
    ListItem,
    ListItemIcon,
    ListItemContent,
    ListItemTitle,
    ListItemDescription,
    ListItemAction,
}
