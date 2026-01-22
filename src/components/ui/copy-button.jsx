import * as React from "react"
import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"
import { Button } from "./button"

const CopyButton = React.forwardRef(({
    className,
    value,
    size = "icon",
    variant = "ghost",
    ...props
}, ref) => {
    const [copied, setCopied] = React.useState(false)
    const timeoutRef = React.useRef(null)

    // Cleanup timeout при размонтировании компонента
    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value)
            setCopied(true)

            // Очистить предыдущий таймер если он существует
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            // Установить новый таймер
            timeoutRef.current = setTimeout(() => {
                setCopied(false)
                timeoutRef.current = null
            }, 2000)
        } catch (err) {
            // Не логируем ошибки в production для чистой консоли пользователя
            // В development можно раскомментировать для отладки:
            // if (process.env.NODE_ENV === 'development') {
            //     console.error("Failed to copy:", err)
            // }
        }
    }

    return (
        <Button
            ref={ref}
            size={size}
            variant={variant}
            onClick={handleCopy}
            className={cn("transition-all", className)}
            {...props}
        >
            {copied ? (
                <Check className="h-4 w-4 text-[hsl(var(--success))]" />
            ) : (
                <Copy className="h-4 w-4" />
            )}
        </Button>
    )
})
CopyButton.displayName = "CopyButton"

export { CopyButton }
