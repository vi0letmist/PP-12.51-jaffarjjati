import React from "react";
import * as HeroIcons from "@heroicons/react/24/solid"; // Import the custom LinkedIn icon

interface SocialProps {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: keyof typeof HeroIcons; // Specify icon name from HeroIcons
  iconCustom?: React.ElementType; // Custom icon component (e.g., LinkedInIcon)
}

const Social: React.FC<SocialProps> = ({
  onClick,
  size = "md",
  className = "",
  icon,
  iconCustom, // Added custom icon prop
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
        className={`flex items-center justify-center rounded-full focus:outline-none ${buttonSize} ${className} transition transform hover:scale-110 hover:bg-opacity-80`}
      >
        {IconComponent && (
          <IconComponent className={`${iconSize} text-white`} />
        )}
      </button>
    </div>
  );
};

export default Social;
