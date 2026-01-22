import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const avatarVariants = cva(
    "relative flex shrink-0 overflow-hidden rounded-full bg-muted font-onest font-medium",
    {
        variants: {
            size: {
                xs: "h-6 w-6 text-xs",
                sm: "h-8 w-8 text-xs",
                default: "h-10 w-10 text-sm",
                lg: "h-12 w-12 text-base",
                xl: "h-16 w-16 text-lg",
                "2xl": "h-24 w-24 text-2xl",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

const Avatar = React.forwardRef(({
    className,
    size,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn(avatarVariants({ size }), className)}
        {...props}
    />
))
Avatar.displayName = "Avatar"

const AvatarImage = React.forwardRef(({
    className,
    src,
    alt,
    onError,
    ...props
}, ref) => {
    const [hasError, setHasError] = React.useState(false)

    if (hasError || !src) return null

    return (
        <img
            ref={ref}
            src={src}
            alt={alt}
            onError={(e) => {
                setHasError(true)
                onError?.(e)
            }}
            className={cn("aspect-square h-full w-full object-cover", className)}
            {...props}
        />
    )
})
AvatarImage.displayName = "AvatarImage"

const AvatarFallback = React.forwardRef(({
    className,
    children,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex h-full w-full items-center justify-center bg-primary text-primary-foreground",
            className
        )}
        {...props}
    >
        {children}
    </div>
))
AvatarFallback.displayName = "AvatarFallback"

// Utility to get initials
const getInitials = (name) => {
    if (!name) return ""
    const parts = name.trim().split(" ")
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants, getInitials }
