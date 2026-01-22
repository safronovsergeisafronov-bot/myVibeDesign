import * as React from "react"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback, getInitials } from "./avatar"

const TestimonialCard = React.forwardRef(({
    className,
    quote,
    author,
    role,
    company,
    avatar,
    rating,
    variant = "default",
    ...props
}, ref) => {
    const variants = {
        default: "bg-card border border-border",
        primary: "bg-primary text-primary-foreground",
        dark: "bg-accent text-white",
    }

    return (
        <div
            ref={ref}
            className={cn(
                "p-6 rounded-[var(--radius)] shadow-sm",
                variants[variant],
                className
            )}
            {...props}
        >
            <Quote className={cn(
                "h-8 w-8 mb-4",
                variant === "default" ? "text-primary/20" : "opacity-20"
            )} />

            <blockquote className={cn(
                "font-onest text-base leading-relaxed mb-6",
                variant === "default" ? "text-foreground" : ""
            )}>
                "{quote}"
            </blockquote>

            {rating && (
                <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }, (_, i) => (
                        <svg
                            key={i}
                            className={cn(
                                "h-4 w-4",
                                i < rating
                                    ? "fill-[hsl(var(--warning))] text-[hsl(var(--warning))]"
                                    : "fill-transparent text-muted-foreground"
                            )}
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    ))}
                </div>
            )}

            <div className="flex items-center gap-3">
                <Avatar size="default">
                    {avatar && <AvatarImage src={avatar} alt={author} />}
                    <AvatarFallback>{getInitials(author)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className={cn(
                        "font-inter font-semibold text-sm",
                        variant === "default" ? "text-foreground" : ""
                    )}>
                        {author}
                    </p>
                    <p className={cn(
                        "font-onest text-xs",
                        variant === "default" ? "text-muted-foreground" : "opacity-70"
                    )}>
                        {role}{company && ` · ${company}`}
                    </p>
                </div>
            </div>
        </div>
    )
})
TestimonialCard.displayName = "TestimonialCard"

export { TestimonialCard }
