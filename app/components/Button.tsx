import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost" | "outline";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  icon,
  iconPosition = "left",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded font-medium transition-all duration-250 focus:outline-2 focus:ring-2 focus:outline-cyn-500 active:bg-primary active:text-light disabled:pointer-events-none disabled:bg-soft disabled:border-0 disabled:text-stone-400";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-accent text-light hover:rounded-4xl",
    secondary: "bg-secondary text-light hover:rounded-4xl",
    tertiary: "bg-tertiary text-white hover:rounded-4xl",
    ghost:
      "bg-transparent text-brand-lightblue hover:rounded-4xl hover:text-dark",
    outline:
      "border border-accent bg-transparent text-accent hover:rounded-4xl hover:bg-gray-100",
  };

  const alignmentStyles = icon ? "justify-between" : "justify-center";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 min-w-40 px-6 text-base",
  };

  const iconSizeStyles: Record<ButtonSize, string> = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  };

  return (
    <button
      className={[
        "group",
        baseStyles,
        alignmentStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span
          className={`flex shrink-0 group-hover:animate-pulse ${iconSizeStyles[size]}`}
        >
          {icon}
        </span>
      )}

      {children}

      {icon && iconPosition === "right" && (
        <span
          className={`flex shrink-0 group-hover:animate-pulse ${iconSizeStyles[size]}`}
        >
          {icon}
        </span>
      )}
    </button>
  );
}
