import type { ReactNode, ComponentPropsWithoutRef } from "react"

// Common component props
export interface BaseProps {
  className?: string
  children?: ReactNode
}

// Extends HTML element props
export type ButtonProps = ComponentPropsWithoutRef<"button"> & BaseProps

// Card variants
export type CardVariant = "default" | "burgundy" | "dark"

// Button variants
export type ButtonVariant =
  | "default"
  | "secondary"
  | "dark"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
export type ButtonSize = "sm" | "default" | "lg" | "icon"

// Text variants
export type TextVariant = "hero" | "subhero" | "h2" | "h3" | "body" | "caption" | "small"
export type TextColor = "default" | "primary" | "foreground" | "muted" | "white"

// Form types
export interface FormFieldProps {
  name: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
}

// Utility type for component with ref
export type ComponentWithRef<T, P = object> = React.ForwardRefExoticComponent<
  P & React.RefAttributes<T>
>
