import { useTheme } from "@/components/themeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

interface SwitchProps {
  size?: "small" | "medium" | "large";
}

const Switch: React.FC<SwitchProps> = ({ size = "medium" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const buttonSize =
    size === "small" ? "w-8 h-8" : size === "large" ? "w-16 h-16" : "w-12 h-12";
  const iconSize =
    size === "small" ? "w-4 h-4" : size === "large" ? "w-8 h-8" : "w-6 h-6";

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center rounded-full focus:outline-none ${buttonSize} ${
          isDarkMode ? "bg-gray-800" : "bg-yellow-300"
        }`}
      >
        {isDarkMode ? (
          <MoonIcon className={`${iconSize} text-white`} />
        ) : (
          <SunIcon className={`${iconSize} text-yellow-500`} />
        )}
      </button>
    </div>
  );
};

export default Switch;
