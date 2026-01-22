import * as React from "react"
import { cn } from "@/lib/utils"

const Sidebar = React.forwardRef(({
    className,
    collapsed,
    onCollapse,
    children,
    ...props
}, ref) => (
    <aside
        ref={ref}
        className={cn(
            "flex flex-col h-screen bg-card border-r border-border transition-all duration-300",
            collapsed ? "w-16" : "w-64",
            className
        )}
        {...props}
    >
        {children}
    </aside>
))
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center h-16 px-4 border-b border-border shrink-0", className)}
        {...props}
    />
))
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("flex-1 overflow-y-auto py-4", className)}
        {...props}
    />
))
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-4 border-t border-border shrink-0", className)}
        {...props}
    />
))
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef(({
    className,
    label,
    children,
    ...props
}, ref) => (
    <div ref={ref} className={cn("px-2 py-2", className)} {...props}>
        {label && (
            <div className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {label}
            </div>
        )}
        <div className="space-y-1">{children}</div>
    </div>
))
SidebarGroup.displayName = "SidebarGroup"

const SidebarItem = React.forwardRef(({
    className,
    active,
    icon,
    collapsed,
    children,
    ...props
}, ref) => (
    <a
        ref={ref}
        className={cn(
            "flex items-center gap-3 px-3 py-2 rounded-md font-onest text-sm transition-colors cursor-pointer",
            active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            collapsed && "justify-center",
            className
        )}
        {...props}
    >
        {icon && <span className="shrink-0">{icon}</span>}
        {!collapsed && children}
    </a>
))
SidebarItem.displayName = "SidebarItem"

const SidebarDivider = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("my-2 h-px bg-border mx-2", className)}
        {...props}
    />
))
SidebarDivider.displayName = "SidebarDivider"

export {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarItem,
    SidebarDivider,
}
