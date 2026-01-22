import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Badge } from "./badge"
import { Check } from "lucide-react"

const PricingCard = React.forwardRef(({
    className,
    title,
    description,
    price,
    period = "/мес",
    features = [],
    buttonText = "Выбрать",
    buttonVariant = "default",
    popular,
    onSelect,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative flex flex-col p-6 bg-card rounded-[var(--radius)] border border-border shadow-sm",
            popular && "border-primary border-2 shadow-lg",
            className
        )}
        {...props}
    >
        {popular && (
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" variant="default">
                Популярный
            </Badge>
        )}

        <div className="mb-6">
            <h3 className="font-inter text-xl font-semibold text-foreground">{title}</h3>
            {description && (
                <p className="font-onest text-sm text-muted-foreground mt-1">{description}</p>
            )}
        </div>

        <div className="mb-6">
            <span className="font-inter text-4xl font-bold text-foreground">{price}</span>
            <span className="font-onest text-muted-foreground">{period}</span>
        </div>

        <ul className="flex-1 space-y-3 mb-6">
            {features.map((feature, index) => (
                <li key={`feature-${index}-${feature.substring(0, 15)}`} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[hsl(var(--success))] shrink-0 mt-0.5" />
                    <span className="font-onest text-sm text-foreground">{feature}</span>
                </li>
            ))}
        </ul>

        <Button variant={buttonVariant} className="w-full" onClick={onSelect}>
            {buttonText}
        </Button>
    </div>
))
PricingCard.displayName = "PricingCard"

export { PricingCard }
