import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowUp } from "lucide-react"
import { Button } from "./button"

const BackToTop = React.forwardRef(({
    className,
    showAfter = 300,
    smooth = true,
    ...props
}, ref) => {
    const [isVisible, setIsVisible] = React.useState(false)

    React.useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > showAfter)
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [showAfter])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: smooth ? "smooth" : "auto",
        })
    }

    if (!isVisible) return null

    return (
        <Button
            ref={ref}
            size="icon"
            variant="default"
            onClick={scrollToTop}
            className={cn(
                "fixed bottom-6 right-6 z-50 shadow-lg",
                "animate-in fade-in zoom-in duration-300",
                className
            )}
            {...props}
        >
            <ArrowUp className="h-5 w-5" />
        </Button>
    )
})
BackToTop.displayName = "BackToTop"

export { BackToTop }
