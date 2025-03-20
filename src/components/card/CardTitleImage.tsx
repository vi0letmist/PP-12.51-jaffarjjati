import React, { useState, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/common/button";

interface CardProps {
  className?: string;
  title: string;
  image1: string | StaticImageData;
  image2: string | StaticImageData;
  link?: string;
  children?: ReactNode; // Accepts dynamic content
}

const CardTitleImage: React.FC<CardProps> = ({
  className = "",
  title,
  image1,
  image2,
  link = "",
  children, // Accepts JSX content
}) => {
  const { isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${className}`}>
      <div
        className={`relative border-2 ${isDarkMode ? "border-white" : "border-black"} z-10`}
      >
        <div
          className={`absolute inset-0 border-2 ${isDarkMode ? "border-white" : "border-black"} -m-6 top-[2.75rem] left-[2.75rem] pointer-events-none z-0 ${
            isExpanded ? "-mb-48" : ""
          }`}
        ></div>

        {/* Card content with black border */}
        <div className="relative z-10">
          <div
            className={`border-b px-4 grid grid-cols-4 ${isDarkMode ? "bg-black" : "bg-white"}`}
          >
            <div className="col-span-3">
              <h2
                className={`text-[1rem] sm:text-[2rem] lg:text-[4rem] ${isDarkMode ? "text-white" : "text-black"} font-bold font-lauren-thompson uppercase`}
              >
                {title}
              </h2>
            </div>
            <div className="col-span-1 flex justify-end items-center gap-2">
              <Button
                icon={
                  isExpanded ? "ArrowsPointingInIcon" : "ArrowsPointingOutIcon"
                }
                color={isDarkMode ? "black" : "white"}
                className={`border ${isDarkMode ? "border-white" : "border-black"}`}
                onClick={toggleExpand}
              />
              {link && (
                <Button
                  icon="ArrowUpRightIcon"
                  color={isDarkMode ? "black" : "white"}
                  className={`border ${isDarkMode ? "border-white" : "border-black"}`}
                  onClick={() => window.open(link, "_blank")}
                />
              )}
            </div>
          </div>
          <div className="border-t-2 border-black flex flex-col md:flex-row lg:flex-row overflow-hidden">
            <Image
              src={image1}
              alt="First Image"
              width={100}
              height={100}
              className="relative max-w-[50vh] h-auto"
              layout="responsive"
            />
            <Image
              src={image2}
              alt="Second Image"
              width={100}
              height={100}
              className="relative max-w-[50vh]"
              layout="responsive"
            />
          </div>
        </div>
      </div>

      {/* Dynamic content section */}
      {isExpanded && (
        <div className="flex w-[100vh] flex-col md:flex-row lg:flex-row overflow-hidden pl-12 pr-6 py-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default CardTitleImage;
