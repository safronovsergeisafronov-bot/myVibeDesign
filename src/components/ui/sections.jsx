import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"
import { Button } from "./button"
import { Text } from "./text"

const HeroSection = React.forwardRef(({
    className,
    variant = "centered",
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
    image,
    badge,
    children,
    ...props
}, ref) => {
    const variants = {
        centered: "text-center items-center",
        left: "text-left items-start",
        split: "md:flex-row md:text-left",
    }

    return (
        <section
            ref={ref}
            className={cn("py-20 md:py-32 bg-background", className)}
            {...props}
        >
            <Container>
                <div className={cn(
                    "flex flex-col gap-8",
                    variants[variant],
                    variant === "split" && "md:items-center md:gap-12"
                )}>
                    <div className={cn(
                        "flex flex-col gap-6 max-w-3xl",
                        variant === "centered" && "items-center",
                        variant === "split" && "md:flex-1"
                    )}>
                        {badge && (
                            <div className="inline-flex">
                                {badge}
                            </div>
                        )}

                        {title && (
                            <Text variant="hero" color="primary" as="h1">
                                {title}
                            </Text>
                        )}

                        {subtitle && (
                            <Text variant="subhero" as="h2">
                                {subtitle}
                            </Text>
                        )}

                        {description && (
                            <Text variant="body" className="text-muted-foreground text-lg max-w-2xl">
                                {description}
                            </Text>
                        )}

                        {(primaryAction || secondaryAction) && (
                            <div className="flex flex-wrap gap-4 mt-4">
                                {primaryAction && (
                                    <Button size="lg" {...primaryAction}>
                                        {primaryAction.label}
                                    </Button>
                                )}
                                {secondaryAction && (
                                    <Button size="lg" variant="outline" {...secondaryAction}>
                                        {secondaryAction.label}
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>

                    {image && variant === "split" && (
                        <div className="md:flex-1">
                            {image}
                        </div>
                    )}

                    {children}
                </div>
            </Container>
        </section>
    )
})
HeroSection.displayName = "HeroSection"

const FeatureSection = React.forwardRef(({
    className,
    title,
    subtitle,
    description,
    features = [],
    columns = 3,
    ...props
}, ref) => (
    <section
        ref={ref}
        className={cn("py-20 bg-background", className)}
        {...props}
    >
        <Container>
            <div className="text-center mb-16">
                {subtitle && (
                    <Text variant="caption" className="text-primary mb-2">
                        {subtitle}
                    </Text>
                )}
                {title && (
                    <Text variant="h2" as="h2" className="mb-4">
                        {title}
                    </Text>
                )}
                {description && (
                    <Text variant="body" className="text-muted-foreground max-w-2xl mx-auto">
                        {description}
                    </Text>
                )}
            </div>

            <div className={cn(
                "grid gap-8",
                columns === 2 && "md:grid-cols-2",
                columns === 3 && "md:grid-cols-3",
                columns === 4 && "md:grid-cols-4"
            )}>
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6">
                        {feature.icon && (
                            <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                                {feature.icon}
                            </div>
                        )}
                        <Text variant="h4" as="h3" className="mb-2">
                            {feature.title}
                        </Text>
                        <Text variant="body" className="text-muted-foreground">
                            {feature.description}
                        </Text>
                    </div>
                ))}
            </div>
        </Container>
    </section>
))
FeatureSection.displayName = "FeatureSection"

const CTASection = React.forwardRef(({
    className,
    variant = "default",
    title,
    description,
    primaryAction,
    secondaryAction,
    ...props
}, ref) => {
    const variants = {
        default: "bg-card border border-border",
        primary: "bg-primary text-primary-foreground",
        dark: "bg-accent text-white",
    }

    return (
        <section
            ref={ref}
            className={cn("py-20", className)}
            {...props}
        >
            <Container size="lg">
                <div className={cn(
                    "rounded-[var(--radius)] p-12 text-center",
                    variants[variant]
                )}>
                    {title && (
                        <Text
                            variant="h2"
                            as="h2"
                            className={cn("mb-4", variant !== "default" && "text-white")}
                        >
                            {title}
                        </Text>
                    )}
                    {description && (
                        <Text
                            variant="body"
                            className={cn(
                                "max-w-2xl mx-auto mb-8",
                                variant === "default" ? "text-muted-foreground" : "opacity-90"
                            )}
                        >
                            {description}
                        </Text>
                    )}
                    <div className="flex flex-wrap justify-center gap-4">
                        {primaryAction && (
                            <Button
                                size="lg"
                                variant={variant === "primary" ? "dark" : "default"}
                                {...primaryAction}
                            >
                                {primaryAction.label}
                            </Button>
                        )}
                        {secondaryAction && (
                            <Button
                                size="lg"
                                variant={variant === "default" ? "outline" : "ghost"}
                                className={variant !== "default" ? "text-white hover:bg-white/10" : ""}
                                {...secondaryAction}
                            >
                                {secondaryAction.label}
                            </Button>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
})
CTASection.displayName = "CTASection"

export { HeroSection, FeatureSection, CTASection }
