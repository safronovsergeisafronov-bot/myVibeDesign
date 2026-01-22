import * as React from "react"
import { cn } from "@/lib/utils"

const Navbar = React.forwardRef(({
    className,
    variant = "default",
    sticky,
    children,
    ...props
}, ref) => {
    const variants = {
        default: "bg-card border-b border-border",
        transparent: "bg-transparent",
        primary: "bg-primary text-primary-foreground",
        dark: "bg-accent text-white",
    }

    return (
        <header
            ref={ref}
            className={cn(
                "w-full z-[var(--z-sticky)]",
                sticky && "sticky top-0",
                variants[variant],
                className
            )}
            {...props}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {children}
                </div>
            </div>
        </header>
    )
})
Navbar.displayName = "Navbar"

const NavbarBrand = React.forwardRef(({
    className,
    children,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center gap-2 font-inter font-semibold text-xl", className)}
        {...props}
    >
        {children}
    </div>
))
NavbarBrand.displayName = "NavbarBrand"

const NavbarContent = React.forwardRef(({
    className,
    position = "center",
    ...props
}, ref) => {
    const positions = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
    }

    return (
        <nav
            ref={ref}
            className={cn(
                "hidden md:flex items-center gap-6",
                positions[position],
                className
            )}
            {...props}
        />
    )
})
NavbarContent.displayName = "NavbarContent"

const NavbarItem = React.forwardRef(({
    className,
    active,
    ...props
}, ref) => (
    <a
        ref={ref}
        className={cn(
            "font-onest font-medium text-sm transition-colors cursor-pointer",
            active
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground",
            className
        )}
        {...props}
    />
))
NavbarItem.displayName = "NavbarItem"

const NavbarActions = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center gap-4", className)}
        {...props}
    />
))
NavbarActions.displayName = "NavbarActions"

const NavbarMobileToggle = React.forwardRef(({
    className,
    open,
    onToggle,
    ...props
}, ref) => (
    <button
        ref={ref}
        type="button"
        onClick={onToggle}
        className={cn(
            "md:hidden inline-flex items-center justify-center p-2 rounded-md transition-colors",
            "hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring",
            className
        )}
        {...props}
    >
        <span className="sr-only">Open menu</span>
        {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        )}
    </button>
))
NavbarMobileToggle.displayName = "NavbarMobileToggle"

export {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarActions,
    NavbarMobileToggle,
}
