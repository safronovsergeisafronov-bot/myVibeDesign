// Type declarations for JSX components during incremental migration
// These provide basic types for components that haven't been converted to TypeScript yet

import { ComponentPropsWithRef, ReactNode, ForwardRefExoticComponent, RefAttributes } from "react"

// Button component types
export interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "default" | "secondary" | "dark" | "outline" | "ghost" | "link" | "destructive"
  size?: "sm" | "default" | "lg" | "icon"
  asChild?: boolean
  children?: ReactNode
}

export declare const Button: ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement>
>
export declare const buttonVariants: (props?: Partial<ButtonProps>) => string

// Spinner component types
export interface SpinnerProps {
  size?: "sm" | "default" | "lg"
  className?: string
}

export declare const Spinner: ForwardRefExoticComponent<
  SpinnerProps & RefAttributes<HTMLDivElement>
>
export declare const spinnerVariants: (props?: Partial<SpinnerProps>) => string

// ErrorBoundary component types
export interface ErrorBoundaryProps {
  children?: ReactNode
  fallback?: ReactNode
}

export declare const ErrorBoundary: React.ComponentType<ErrorBoundaryProps>
