import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-kpds-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kpds-purple-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      color: {
        primary: "",
        secondary: "",
        tertiary: "",
        danger: "",
      },
      styling: {
        fill: "border border-transparent",
        lightFill: "border border-transparent",
        stroke: "bg-transparent",
        lightStroke: "bg-transparent",
        text: "bg-transparent",
      },
      size: {
        sm: "h-8 px-kpds-12 py-kpds-8 text-kpds-12 leading-kpds-18 rounded-kpds-6 gap-kpds-4 [&_svg]:size-4",
        md: "h-10 px-kpds-16 py-kpds-10 text-kpds-14 leading-kpds-20 rounded-kpds-8 gap-kpds-6 [&_svg]:w-[18px] [&_svg]:h-[18px]",
        lg: "h-11 px-kpds-20 py-kpds-12 text-kpds-16 leading-kpds-22 rounded-kpds-10 gap-kpds-8 [&_svg]:size-5",
        xl: "h-14 px-kpds-24 py-kpds-16 text-kpds-18 leading-kpds-26 rounded-kpds-12 gap-kpds-10 [&_svg]:size-6",
        "icon-sm":
          "h-8 w-8 p-0 items-center justify-center rounded-kpds-6 [&_svg]:size-4",
        "icon-md":
          "h-10 w-10 p-0 items-center justify-center rounded-kpds-8 [&_svg]:w-[18px] [&_svg]:h-[18px]",
        "icon-lg":
          "h-11 w-11 p-0 items-center justify-center rounded-kpds-10 [&_svg]:size-5",
        "icon-xl":
          "h-14 w-14 p-0 items-center justify-center rounded-kpds-12 [&_svg]:size-6",
      },
      shape: {
        default: "",
        capsule: "rounded-full",
      },
      fontWeightCustom: {
        regular: "font-kpds-regular",
        semibold: "font-kpds-semibold",
      },
    },
    compoundVariants: [
      // Primary
      {
        color: "primary",
        styling: "fill",
        className:
          "bg-kpds-purple-700 text-kpds-white-0 hover:bg-kpds-purple-600 active:bg-kpds-purple-800",
      },
      {
        color: "primary",
        styling: "lightFill",
        className:
          "bg-kpds-purple-50 text-kpds-purple-700 hover:bg-kpds-purple-100 active:bg-kpds-purple-200",
      },
      {
        color: "primary",
        styling: "stroke",
        className:
          "border border-kpds-purple-700 text-kpds-purple-700 hover:bg-kpds-purple-50 active:bg-kpds-purple-100",
      },
      {
        color: "primary",
        styling: "lightStroke",
        className:
          "border border-kpds-purple-200 text-kpds-purple-300 hover:bg-kpds-purple-50 hover:text-kpds-purple-500 active:bg-kpds-purple-100",
      },
      {
        color: "primary",
        styling: "text",
        className:
          "text-kpds-purple-700 hover:text-kpds-purple-600 active:text-kpds-purple-800 hover:bg-kpds-purple-50",
      },

      // Secondary
      {
        color: "secondary",
        styling: "fill",
        className:
          "bg-kpds-gray-800 text-kpds-white-0 hover:bg-kpds-gray-700 active:bg-kpds-gray-900",
      },
      {
        color: "secondary",
        styling: "lightFill",
        className:
          "bg-kpds-gray-100 text-kpds-gray-700 hover:bg-kpds-gray-200 active:bg-kpds-gray-300",
      },
      {
        color: "secondary",
        styling: "stroke",
        className:
          "border border-kpds-gray-700 text-kpds-gray-700 hover:bg-kpds-gray-100 active:bg-kpds-gray-200",
      },
      {
        color: "secondary",
        styling: "lightStroke",
        className:
          "border border-kpds-gray-300 text-kpds-gray-500 hover:bg-kpds-gray-50 hover:text-kpds-gray-600 active:bg-kpds-gray-100",
      },
      {
        color: "secondary",
        styling: "text",
        className:
          "text-kpds-gray-700 hover:text-kpds-gray-600 active:text-kpds-gray-800 hover:bg-kpds-gray-50",
      },

      // Tertiary
      {
        color: "tertiary",
        styling: "fill",
        className:
          "bg-kpds-mint-700 text-kpds-white-0 hover:bg-kpds-mint-600 active:bg-kpds-mint-800",
      },
      {
        color: "tertiary",
        styling: "lightFill",
        className:
          "bg-kpds-mint-50 text-kpds-mint-700 hover:bg-kpds-mint-100 active:bg-kpds-mint-200",
      },
      {
        color: "tertiary",
        styling: "stroke",
        className:
          "border border-kpds-mint-700 text-kpds-mint-700 hover:bg-kpds-mint-50 active:bg-kpds-mint-100",
      },
      {
        color: "tertiary",
        styling: "lightStroke",
        className:
          "border border-kpds-mint-300 text-kpds-mint-500 hover:bg-kpds-mint-50 hover:text-kpds-mint-600 active:bg-kpds-mint-100",
      },
      {
        color: "tertiary",
        styling: "text",
        className:
          "text-kpds-mint-700 hover:text-kpds-mint-600 active:text-kpds-mint-800 hover:bg-kpds-mint-50",
      },

      // Danger
      {
        color: "danger",
        styling: "fill",
        className:
          "bg-kpds-red-700 text-kpds-white-0 hover:bg-kpds-red-600 active:bg-kpds-red-800",
      },
      {
        color: "danger",
        styling: "lightFill",
        className:
          "bg-kpds-red-50 text-kpds-red-700 hover:bg-kpds-red-100 active:bg-kpds-red-200",
      },
      {
        color: "danger",
        styling: "stroke",
        className:
          "border border-kpds-red-700 text-kpds-red-700 hover:bg-kpds-red-50 active:bg-kpds-red-100",
      },
      {
        color: "danger",
        styling: "lightStroke",
        className:
          "border border-kpds-red-300 text-kpds-red-500 hover:bg-kpds-red-50 hover:text-kpds-red-600 active:bg-kpds-red-100",
      },
      {
        color: "danger",
        styling: "text",
        className:
          "text-kpds-red-700 hover:text-kpds-red-600 active:text-kpds-red-800 hover:bg-kpds-red-50",
      },
    ],
    defaultVariants: {
      color: "primary",
      styling: "fill",
      size: "md",
      shape: "default",
      fontWeightCustom: "semibold",
    },
  }
);

// Helper type to extract specific variant prop types if needed elsewhere
// type ButtonVariantColor = VariantProps<typeof buttonVariants>["color"];
// type ButtonVariantStyling = VariantProps<typeof buttonVariants>["styling"];

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">, // Omit HTML's color prop
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color,
      styling,
      size,
      shape,
      fontWeightCustom,
      asChild = false,
      isLoading = false,
      loadingText,
      iconLeft,
      iconRight,
      fullWidth = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const effectiveDisabled = isLoading || props.disabled;

    const isIconOnly = size?.startsWith("icon-");
    const displayChildren = isIconOnly ? null : children;
    const displayLoadingText = isIconOnly ? null : loadingText;

    return (
      <Comp
        className={cn(
          buttonVariants({
            color,
            styling,
            size,
            shape,
            fontWeightCustom,
            className,
          }),
          fullWidth && "w-full"
        )}
        ref={ref}
        disabled={effectiveDisabled}
        {...props}
      >
        {isLoading ? (
          <>
            <MoreHorizontal className="animate-pulse" />
            {displayLoadingText && (
              <span className="ml-kpds-4">{displayLoadingText}</span>
            )}
          </>
        ) : (
          <>
            {iconLeft}
            {displayChildren}
            {iconRight}
          </>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
