"use client";

import React from "react";
import * as HeroIcons from "@heroicons/react/24/solid";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "blue" | "green" | "red" | "gray" | "indigo" | "black" | "white";
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: keyof typeof HeroIcons;
  iconPosition?: "left" | "right";
  disabled?: boolean;
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
  black:
    "bg-black text-white hover:bg-yellow-300 hover:text-black focus:ring-gray-700",
  white: "bg-white text-black hover:bg-yellow-300 focus:ring-gray-300",
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
  disabled = false,
}) => {
  const IconComponent = icon ? HeroIcons[icon] : null;

  const sizeClass = children ? sizeClasses[size] : "";
  const iconOnlyClasses = !children ? "w-10 h-10" : "";

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`focus:outline-none focus:ring-2 flex items-center justify-center 
        ${sizeClass} ${colorClasses[color]} ${iconOnlyClasses} ${className}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {!children && IconComponent && <IconComponent className="h-5 w-5" />}

      {children && icon && iconPosition === "left" && IconComponent && (
        <IconComponent className="mr-2 h-5 w-5" />
      )}

      {children}

      {children && icon && iconPosition === "right" && IconComponent && (
        <IconComponent className="ml-2 h-5 w-5" />
      )}
    </button>
  );
};

export default Button;
