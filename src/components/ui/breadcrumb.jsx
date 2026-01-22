import * as React from "react"
import { cn } from "@/lib/utils"

const Breadcrumb = React.forwardRef(({ className, ...props }, ref) => (
    <nav ref={ref} aria-label="breadcrumb" className={className} {...props} />
))
Breadcrumb.displayName = "Breadcrumb"

const BreadcrumbList = React.forwardRef(({ className, ...props }, ref) => (
    <ol
        ref={ref}
        className={cn(
            "flex flex-wrap items-center gap-1.5 font-onest text-sm text-muted-foreground",
            className
        )}
        {...props}
    />
))
BreadcrumbList.displayName = "BreadcrumbList"

const BreadcrumbItem = React.forwardRef(({ className, ...props }, ref) => (
    <li
        ref={ref}
        className={cn("inline-flex items-center gap-1.5", className)}
        {...props}
    />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

const BreadcrumbLink = React.forwardRef(({
    className,
    href,
    asChild,
    ...props
}, ref) => {
    const Comp = asChild ? React.Fragment : "a"
    const linkProps = asChild ? {} : { href }

    return (
        <Comp {...linkProps}>
            <span
                ref={ref}
                className={cn(
                    "transition-colors hover:text-foreground cursor-pointer",
                    className
                )}
                {...props}
            />
        </Comp>
    )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

const BreadcrumbPage = React.forwardRef(({ className, ...props }, ref) => (
    <span
        ref={ref}
        role="link"
        aria-disabled="true"
        aria-current="page"
        className={cn("text-foreground font-medium", className)}
        {...props}
    />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

const BreadcrumbSeparator = React.forwardRef(({
    className,
    children,
    ...props
}, ref) => (
    <li
        ref={ref}
        role="presentation"
        aria-hidden="true"
        className={cn("text-muted-foreground", className)}
        {...props}
    >
        {children || (
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        )}
    </li>
))
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

export {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
}
