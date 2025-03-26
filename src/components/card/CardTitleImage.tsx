import React, { useState, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { useTheme } from "@/context/ThemeContext";
import Button from "@/components/common/button";
import useScrollable from "@/components/hooks/useScrollable";

interface ImageData {
  src: string | StaticImageData;
  alt: string;
  description?: string;
}
interface CardProps {
  className?: string;
  title: string;
  images: ImageData[];
  link?: string;
  children?: ReactNode;
}

const CardTitleImage: React.FC<CardProps> = ({
  className = "",
  title,
  images,
  link = "",
  children,
}) => {
  const { isDarkMode } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);
  const { ref, isScrollable, isTop, isBottom, scrollUp, scrollDown } =
    useScrollable();

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${className}`}>
      <div
        className={`relative w-full border-2 ${isDarkMode ? "border-white" : "border-black"} z-10`}
      >
        <div
          className={`absolute inset-0 border-2 ${isDarkMode ? "border-white" : "border-black"} -m-6 top-[2.75rem] left-[2.75rem] pointer-events-none z-0 ${
            isExpanded ? "-mb-48" : ""
          }`}
        ></div>

        {/* Card content with black border */}
        <div className="relative z-10">
          <div
            className={`border-b px-2 md:px-4 grid grid-cols-4 ${isDarkMode ? "bg-black" : "bg-white"}`}
          >
            <div className="col-span-4 md:col-span-3">
              <h2
                className={`text-[1rem] sm:text-[2rem] lg:text-[4rem] ${isDarkMode ? "text-white" : "text-black"} font-bold font-lauren-thompson uppercase`}
              >
                {title}
              </h2>
            </div>
            <div className="col-span-4 md:col-span-1 flex justify-end items-center gap-2">
              <Button
                icon={
                  isExpanded ? "ArrowsPointingInIcon" : "ArrowsPointingOutIcon"
                }
                color={isDarkMode ? "black" : "white"}
                className={`border ${isDarkMode ? "border-white" : "border-black"} mb-2 md:mb-0`}
                onClick={toggleExpand}
              />
              {link && (
                <Button
                  icon="ArrowUpRightIcon"
                  color={isDarkMode ? "black" : "white"}
                  className={`border ${isDarkMode ? "border-white" : "border-black"} mb-2 md:mb-0`}
                  onClick={() => window.open(link, "_blank")}
                />
              )}
            </div>
          </div>
          <div className="w-full border-t-2 border-black flex flex-wrap md:flex-row overflow-hidden bg-white">
            {images
              .slice(0, isExpanded ? images.length : 2)
              .map((image, index) => (
                <div key={index} className="w-1/2 p-2">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                  />
                  {isExpanded && image.description && (
                    <p
                      className={`text-xs mt-2 ${isDarkMode ? "text-white" : "text-black"}`}
                    >
                      {"( " + image.description + " )"}
                    </p>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div
          ref={ref}
          className="w-full min-w-0 max-h-40 flex flex-col md:flex-row lg:flex-row overflow-y-scroll pl-12 pr-6 py-4"
        >
          <div className="w-full"> {children}</div>
        </div>
      )}
    </div>
  );
};

export default CardTitleImage;
