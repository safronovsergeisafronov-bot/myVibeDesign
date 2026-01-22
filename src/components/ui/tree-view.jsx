import * as React from "react"
import { ChevronRight, Folder, File } from "lucide-react"
import { cn } from "@/lib/utils"

const TreeView = React.forwardRef(({ className, children, ...props }, ref) => {
    return (
        <div ref={ref} className={cn("w-full", className)} {...props}>
            {children}
        </div>
    )
})
TreeView.displayName = "TreeView"

const TreeItem = React.forwardRef(({
    className,
    label,
    icon,
    children,
    defaultExpanded = false,
    onSelect,
    level = 0,
    ...props
}, ref) => {
    const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)
    const hasChildren = React.Children.count(children) > 0

    const handleToggle = () => {
        if (hasChildren) {
            setIsExpanded(!isExpanded)
        }
        onSelect?.()
    }

    const DefaultIcon = hasChildren ? Folder : File

    return (
        <div ref={ref} className={cn("", className)} {...props}>
            <div
                className={cn(
                    "flex items-center gap-1 py-1 px-2 rounded-md cursor-pointer hover:bg-accent transition-colors font-onest",
                    "text-sm"
                )}
                style={{ paddingLeft: `${level * 12 + 8}px` }}
                onClick={handleToggle}
            >
                {hasChildren ? (
                    <ChevronRight
                        className={cn(
                            "h-4 w-4 transition-transform flex-shrink-0",
                            isExpanded && "rotate-90"
                        )}
                    />
                ) : (
                    <span className="w-4" />
                )}
                {icon || <DefaultIcon className="h-4 w-4 flex-shrink-0 text-muted-foreground" />}
                <span className="flex-1 truncate ml-1">{label}</span>
            </div>
            {hasChildren && isExpanded && (
                <div className="mt-1">
                    {React.Children.map(children, (child) =>
                        React.isValidElement(child)
                            ? React.cloneElement(child, { level: level + 1 })
                            : child
                    )}
                </div>
            )}
        </div>
    )
})
TreeItem.displayName = "TreeItem"

export { TreeView, TreeItem }
