import * as React from "react"
import { cn } from "@/lib/utils"

const Footer = React.forwardRef(({
    className,
    variant = "default",
    children,
    ...props
}, ref) => {
    const variants = {
        default: "bg-card border-t border-border",
        dark: "bg-accent text-white",
        primary: "bg-primary text-primary-foreground",
        transparent: "bg-transparent",
    }

    return (
        <footer
            ref={ref}
            className={cn(variants[variant], className)}
            {...props}
        >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </div>
        </footer>
    )
})
Footer.displayName = "Footer"

const FooterContent = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("grid grid-cols-2 md:grid-cols-4 gap-8", className)}
        {...props}
    />
))
FooterContent.displayName = "FooterContent"

const FooterSection = React.forwardRef(({
    className,
    title,
    children,
    ...props
}, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-3", className)} {...props}>
        {title && (
            <h4 className="font-onest font-semibold text-sm">{title}</h4>
        )}
        <div className="flex flex-col gap-2">{children}</div>
    </div>
))
FooterSection.displayName = "FooterSection"

const FooterLink = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <a
        ref={ref}
        className={cn(
            "font-onest text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer",
            className
        )}
        {...props}
    />
))
FooterLink.displayName = "FooterLink"

const FooterBottom = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t border-border",
            className
        )}
        {...props}
    />
))
FooterBottom.displayName = "FooterBottom"

const FooterCopyright = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <p
        ref={ref}
        className={cn("font-onest text-sm text-muted-foreground", className)}
        {...props}
    />
))
FooterCopyright.displayName = "FooterCopyright"

const FooterSocials = React.forwardRef(({
    className,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center gap-4", className)}
        {...props}
    />
))
FooterSocials.displayName = "FooterSocials"

export {
    Footer,
    FooterContent,
    FooterSection,
    FooterLink,
    FooterBottom,
    FooterCopyright,
    FooterSocials,
}
