"use client";

import React from "react";
import * as HeroIcons from "@heroicons/react/24/solid";

interface SocialProps {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: keyof typeof HeroIcons;
  iconCustom?: React.ElementType;
  color?: "blue" | "green" | "red" | "gray" | "indigo" | "black" | "white";
}

const colorClasses = {
  blue: "bg-blue-500 hover:bg-blue-600",
  green: "bg-green-500 hover:bg-green-600",
  red: "bg-red-500 hover:bg-red-600",
  gray: "bg-gray-500 hover:bg-gray-600",
  indigo: "bg-indigo-500 hover:bg-indigo-600",
  black: "bg-black hover:bg-yellow-300 text-white hover:text-black",
  white: "bg-white hover:bg-yellow-300 text-black",
};

const Social: React.FC<SocialProps> = ({
  onClick,
  size = "md",
  className = "",
  icon,
  iconCustom,
  color = "blue",
}) => {
  const IconComponent = icon ? HeroIcons[icon] : iconCustom ? iconCustom : null;

  const buttonSize =
    size === "sm" ? "w-8 h-8" : size === "lg" ? "w-16 h-16" : "w-12 h-12";
  const iconSize =
    size === "sm" ? "w-4 h-4" : size === "lg" ? "w-8 h-8" : "w-6 h-6";

  return (
    <div className="flex items-center">
      <button
        onClick={onClick}
        className={`flex items-center justify-center rounded-full focus:outline-none ${buttonSize} ${colorClasses[color]} ${className} transition transform hover:scale-110 hover:bg-opacity-80`}
      >
        {IconComponent && <IconComponent className={`${iconSize}`} />}
      </button>
    </div>
  );
};

export default Social;
