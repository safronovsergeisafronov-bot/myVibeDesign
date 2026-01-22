import * as React from "react"
import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"
import { Button } from "./button"

const ThemeContext = React.createContext({
    theme: "light",
    setTheme: () => { },
})

export const ThemeProvider = ({ children, defaultTheme = "light", storageKey = "vibe-theme" }) => {
    const [theme, setTheme] = React.useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem(storageKey) || defaultTheme
        }
        return defaultTheme
    })

    React.useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)
        localStorage.setItem(storageKey, theme)
    }, [theme, storageKey])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = React.useContext(ThemeContext)
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context
}

const ThemeToggle = React.forwardRef(({
    className,
    ...props
}, ref) => {
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <Button
            ref={ref}
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={cn("", className)}
            {...props}
        >
            {theme === "light" ? (
                <Moon className="h-5 w-5" />
            ) : (
                <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
})
ThemeToggle.displayName = "ThemeToggle"

export { ThemeToggle }
