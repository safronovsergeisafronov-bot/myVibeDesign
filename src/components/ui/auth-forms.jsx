import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card"
import { Input } from "./input"
import { Label } from "./label"
import { Button } from "./button"
import { Checkbox } from "./checkbox"
import { Divider } from "./divider"

const AuthLayout = React.forwardRef(({
    className,
    children,
    logo,
    backgroundImage,
    ...props
}, ref) => (
    <div
        ref={ref}
        className={cn(
            "min-h-screen flex items-center justify-center bg-background p-4",
            backgroundImage && "bg-cover bg-center",
            className
        )}
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
        {...props}
    >
        <div className={cn(
            "w-full max-w-md",
            backgroundImage && "bg-background/95 backdrop-blur-sm rounded-[var(--radius)] p-8"
        )}>
            {logo && (
                <div className="text-center mb-8">
                    {typeof logo === "string" ? (
                        <h1 className="font-inter text-2xl font-bold text-primary">{logo}</h1>
                    ) : (
                        logo
                    )}
                </div>
            )}
            {children}
        </div>
    </div>
))
AuthLayout.displayName = "AuthLayout"

const LoginForm = React.forwardRef(({
    className,
    onSubmit,
    onForgotPassword,
    onRegister,
    providers = [],
    ...props
}, ref) => {
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [rememberMe, setRememberMe] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit?.({ email, password, rememberMe })
    }

    return (
        <Card ref={ref} className={cn("", className)} {...props}>
            <CardHeader className="text-center">
                <CardTitle>Вход в аккаунт</CardTitle>
                <CardDescription>Введите email и пароль для входа</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password">Пароль</Label>
                            {onForgotPassword && (
                                <button
                                    type="button"
                                    onClick={onForgotPassword}
                                    className="text-sm text-primary hover:underline font-onest"
                                >
                                    Забыли пароль?
                                </button>
                            )}
                        </div>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox checked={rememberMe} onCheckedChange={setRememberMe} />
                        <Label className="cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
                            Запомнить меня
                        </Label>
                    </div>
                    <Button type="submit" className="w-full">
                        Войти
                    </Button>
                </form>

                {providers.length > 0 && (
                    <>
                        <Divider className="my-6">или</Divider>
                        <div className="space-y-2">
                            {providers.map((provider, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    className="w-full"
                                    onClick={provider.onClick}
                                >
                                    {provider.icon}
                                    <span className="ml-2">{provider.label}</span>
                                </Button>
                            ))}
                        </div>
                    </>
                )}
            </CardContent>
            {onRegister && (
                <CardFooter className="justify-center">
                    <p className="text-sm text-muted-foreground font-onest">
                        Нет аккаунта?{" "}
                        <button
                            type="button"
                            onClick={onRegister}
                            className="text-primary hover:underline font-medium"
                        >
                            Зарегистрироваться
                        </button>
                    </p>
                </CardFooter>
            )}
        </Card>
    )
})
LoginForm.displayName = "LoginForm"

const RegisterForm = React.forwardRef(({
    className,
    onSubmit,
    onLogin,
    ...props
}, ref) => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [agreed, setAgreed] = React.useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit?.({ name, email, password, confirmPassword, agreed })
    }

    return (
        <Card ref={ref} className={cn("", className)} {...props}>
            <CardHeader className="text-center">
                <CardTitle>Создать аккаунт</CardTitle>
                <CardDescription>Заполните форму для регистрации</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Ваше имя"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reg-email">Email</Label>
                        <Input
                            id="reg-email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reg-password">Пароль</Label>
                        <Input
                            id="reg-password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password">Подтвердите пароль</Label>
                        <Input
                            id="confirm-password"
                            type="password"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox checked={agreed} onCheckedChange={setAgreed} />
                        <Label className="text-sm cursor-pointer" onClick={() => setAgreed(!agreed)}>
                            Согласен с <a href="#" className="text-primary hover:underline">условиями использования</a>
                        </Label>
                    </div>
                    <Button type="submit" className="w-full" disabled={!agreed}>
                        Зарегистрироваться
                    </Button>
                </form>
            </CardContent>
            {onLogin && (
                <CardFooter className="justify-center">
                    <p className="text-sm text-muted-foreground font-onest">
                        Уже есть аккаунт?{" "}
                        <button
                            type="button"
                            onClick={onLogin}
                            className="text-primary hover:underline font-medium"
                        >
                            Войти
                        </button>
                    </p>
                </CardFooter>
            )}
        </Card>
    )
})
RegisterForm.displayName = "RegisterForm"

export { AuthLayout, LoginForm, RegisterForm }
