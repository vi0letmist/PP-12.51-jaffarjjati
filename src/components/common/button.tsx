import React from "react";
import * as HeroIcons from "@heroicons/react/24/solid"; // Import all icons

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "red" | "gray" | "indigo";
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: keyof typeof HeroIcons; // Specify icon name based on HeroIcons
  iconPosition?: "left" | "right";
}

const sizeClasses = {
  sm: "py-1 px-3 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

const colorClasses = {
  blue: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
  green: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
  red: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
  gray: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
  indigo: "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-500",
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size = "md",
  color = "blue",
  className = "",
  type = "button",
  icon,
  iconPosition = "left",
}) => {
  // Dynamically get the Icon component from HeroIcons
  const IconComponent = icon ? HeroIcons[icon] : null;

  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded focus:outline-none focus:ring-2 flex items-center justify-center ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    >
      {/* Render icon only if no children are provided (icon-only) */}
      {!children && IconComponent && <IconComponent className="h-5 w-5" />}

      {/* Render the icon on the left when children are provided */}
      {children && icon && iconPosition === "left" && IconComponent && (
        <IconComponent className="mr-2 h-5 w-5" />
      )}
      {/* Render children if provided */}
      {children}
      {/* Render the icon on the right when children are provided */}
      {children && icon && iconPosition === "right" && IconComponent && (
        <IconComponent className="ml-2 h-5 w-5" />
      )}
    </button>
  );
};

export default Button;
