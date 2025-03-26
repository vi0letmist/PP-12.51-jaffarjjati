"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

import Button from "@/components/common/button";
import BgTreeBW from "@/assets/images/pexels-ian-panelo-7169401.jpg";
import CardTitleImage from "@/components/card/CardTitleImage";

const LatestWork = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 300, behavior: "smooth" });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
      setIsTop(scrollTop === 0);
      setIsBottom(scrollTop + clientHeight >= scrollHeight - 5);
    }
  };

  useEffect(() => {
    const scrollableDiv = scrollRef.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="h-screen flex flex-col pt-16 md:pt-10 scrollbar-hide">
      {/* Title Section */}
      <h1 className="text-[3rem] sm:text-[6rem] lg:text-[8rem] font-bold font-lauren-thompson uppercase mb-4">
        Latest Work
      </h1>

      {/* Scrollable Section Container */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory scrollbar-hide md:px-32"
      >
        <div className="absolute flex flex-col gap-1 -mx-4 md:-mx-10 pt-8">
          <Button
            className={`${isDarkMode ? "border-white" : "border-black"} border`}
            icon="ArrowLongUpIcon"
            color={isDarkMode ? "black" : "white"}
            onClick={scrollUp}
            disabled={isTop}
          />
          <Button
            className={`${isDarkMode ? "border-white" : "border-black"} border`}
            icon="ArrowLongDownIcon"
            color={isDarkMode ? "black" : "white"}
            onClick={scrollDown}
            disabled={isBottom}
          />
        </div>
        <CardTitleImage
          className="w-full min-h-[70vh] flex flex-col items-center justify-center snap-start px-8 lg:px-8 xl:px-32 2xl:px-48 py-8"
          title="Project-06sdd"
          images={[
            {
              src: "/images/06sdd 2025-03-16 231058.png",
              alt: "Project-06sdd home page",
              description: "Home page of Project-06sdd.",
            },
            {
              src: "/images/06sdd 2025-03-16 231642.png",
              alt: "Project-06sdd book collections page",
              description: "Book collections page of Project-06sdd.",
            },
          ]}
          link="https://project-06sdd.vercel.app/"
        >
          <h1 className="w-full break-words">
            i started building a library management system as a personal project
            while learning backend development with python and django. at first,
            my focus was just on creating an api to manage books, users, and
            borrowing records. but after finishing the api, i wanted to take it
            further and see it in action with a real use case.
            <br />
            <br />i built it with that in mind, and i want this to be a project
            that i keep improving over time. there’s always something to refine,
            add, or optimize, and i see it as a way to continuously learn and
            apply new things as i go.
          </h1>
        </CardTitleImage>
        <CardTitleImage
          className="w-full min-h-[70vh] flex flex-col items-center justify-center snap-start px-8 lg:px-8 xl:px-32 2xl:px-48 py-8"
          title="PT Aino Indonesia"
          images={[
            {
              src: "/images/aino-1.jpg",
              alt: "Aino Indonesia Home page",
              description: "Home page of Aino Indonesia.",
            },
            {
              src: "/images/aino-2.jpg",
              alt: "Aino Indonesia update teman bus impact.",
              description: "Aino Indonesia update teman bus impact.",
            },
            {
              src: "/images/WhatsApp Image 2025-03-25 at 10.30.51 PM.jpeg",
              alt: "Acasia team full squad 7 September 2023.",
              description: "Acasia team full squad 7 September 2023.",
            },
            {
              src: "/images/WhatsApp Image 2025-03-25 at 10.30.52 PM.jpeg",
              alt: "Acasia team lembur hari ke..",
              description: "Acasia team lembur hari ke..",
            },
          ]}
          link="https://www.ainosi.co.id"
        >
          <h1 className="text-black">
            PT Aino Indonesia is a company specializing in public transportation
            and its surrounding ecosystem, including parking and
            tourism/ticketing. At Aino, I am part of the Acasia team. Acasia is
            a product designed to manage routes, stops, ticketing, transactions,
            and settlements.
            <br />
            <br />
            In Acasia, we use Golang with the Echo framework for the backend,
            PostgreSQL and MongoDB for the databases, and Vue.js for frontend
            development.
          </h1>
        </CardTitleImage>
      </div>
    </div>
  );
};

export default LatestWork;
