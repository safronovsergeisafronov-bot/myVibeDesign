import * as React from "react"
import { cn } from "@/lib/utils"

const Pagination = React.forwardRef(({ className, ...props }, ref) => (
    <nav
        ref={ref}
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
    />
))
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
    <ul
        ref={ref}
        className={cn("flex flex-row items-center gap-1", className)}
        {...props}
    />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
    <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationLink = React.forwardRef(({
    className,
    isActive,
    size = "default",
    ...props
}, ref) => (
    <button
        ref={ref}
        type="button"
        aria-current={isActive ? "page" : undefined}
        className={cn(
            "inline-flex items-center justify-center rounded-[var(--radius)] font-onest font-medium transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50",
            size === "default" ? "h-10 w-10" : "h-9 px-4",
            isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted",
            className
        )}
        {...props}
    />
))
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = React.forwardRef(({ className, ...props }, ref) => (
    <PaginationLink
        ref={ref}
        aria-label="Go to previous page"
        size="wide"
        className={cn("gap-1 pl-2.5", className)}
        {...props}
    >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>Назад</span>
    </PaginationLink>
))
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = React.forwardRef(({ className, ...props }, ref) => (
    <PaginationLink
        ref={ref}
        aria-label="Go to next page"
        size="wide"
        className={cn("gap-1 pr-2.5", className)}
        {...props}
    >
        <span>Далее</span>
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </PaginationLink>
))
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = React.forwardRef(({ className, ...props }, ref) => (
    <span
        ref={ref}
        aria-hidden
        className={cn("flex h-10 w-10 items-center justify-center", className)}
        {...props}
    >
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="6" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="18" cy="12" r="2" />
        </svg>
        <span className="sr-only">More pages</span>
    </span>
))
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
    PaginationEllipsis,
}
