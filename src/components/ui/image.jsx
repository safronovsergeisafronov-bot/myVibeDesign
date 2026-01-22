import * as React from "react"
import { cn } from "@/lib/utils"

const Image = React.forwardRef(({
    className,
    src,
    alt,
    fallback,
    aspectRatio,
    objectFit = "cover",
    rounded = true,
    ...props
}, ref) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [hasError, setHasError] = React.useState(false)

    const aspectRatios = {
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
        wide: "aspect-[2/1]",
    }

    const objectFits = {
        cover: "object-cover",
        contain: "object-contain",
        fill: "object-fill",
        none: "object-none",
    }

    if (hasError && fallback) {
        return (
            <div
                className={cn(
                    "flex items-center justify-center bg-muted",
                    rounded && "rounded-[var(--radius)]",
                    aspectRatio && aspectRatios[aspectRatio],
                    className
                )}
            >
                {typeof fallback === "string" ? (
                    <span className="text-muted-foreground font-onest text-sm">{fallback}</span>
                ) : (
                    fallback
                )}
            </div>
        )
    }

    return (
        <div
            className={cn(
                "relative overflow-hidden",
                rounded && "rounded-[var(--radius)]",
                aspectRatio && aspectRatios[aspectRatio],
                className
            )}
        >
            {isLoading && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
            )}
            <img
                ref={ref}
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false)
                    setHasError(true)
                }}
                className={cn(
                    "w-full h-full transition-opacity duration-300",
                    objectFits[objectFit],
                    isLoading ? "opacity-0" : "opacity-100"
                )}
                {...props}
            />
        </div>
    )
})
Image.displayName = "Image"

export { Image }
