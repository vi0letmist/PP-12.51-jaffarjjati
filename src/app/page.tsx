"use client";

import { useRef, useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Button from "@/components/common/button";
import BgTreeBW from "@/assets/images/pexels-ian-panelo-7169401.jpg";
import Social from "@/components/common/social";
import LinkedInIcon from "@/components/icons/linkedin";
import GithubIcon from "@/components/icons/github";
import InstagramIcon from "@/components/icons/instagram";
import photoProfile from "@/assets/images/julian.jpg";
import CardTitleImage from "@/components/card/CardTitleImage";

// const sentence = `hai my name jetri, still in development. i just struck with words i
// saw online: perfection is enemy of progress--so i deploy this site and continue to make it better.`;\
// const sentence = `hai my name Jaffar Jatmiko Jati, you can call me Jaffar. i'm a software engineer based in indonesia. i love to build things,
// and i'm passionate about technology/programming and creative world. i'm especially drawn to frontend development, because it allows me to
// combine my love for design and coding.`;
const sentence = `hai, my name is jaffar jatmiko jati, but you can call me jaffar. i'm an introvert who loves creativity—whether through music, film, gaming, 
or poetry. i find beauty in melancholic themes but also enjoy being active and collaborating, believing that creativity thrives in both solitude and shared experiences.`;
const words = sentence.split(" ");

const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);

  const { ref: secondCardRef, inView: secondCardInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  const scrollUp = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 300, behavior: "smooth" });
    }
    console.log("scroll down");
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
    <div>
      <div className="px-8">
        <div className="flex justify-start pl-[4rem]">
          <h1 className="text-[3.5rem] sm:text-[8rem] lg:text-[11rem] font-bold font-lauren-thompson uppercase mb-[-2rem] sm:mb-[-6rem] sm:mt-[-4rem]">
            Based
          </h1>
        </div>
        <div className="flex justify-end">
          <h1 className="text-[3.5rem] sm:text-[8rem] lg:text-[11rem] font-bold font-lauren-thompson uppercase mb-[-2rem] sm:mb-[-6rem]">
            Software
          </h1>
        </div>
        <div className="flex justify-start">
          <h1 className="text-[3.5rem] sm:text-[8rem] lg:text-[11rem] font-bold font-lauren-thompson uppercase">
            Engineer
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 flex gap-4">
          <div className="md:col-span-1 flex gap-4 items-baseline justify-center md:justify-start p-2">
            <Social
              iconCustom={LinkedInIcon}
              size="sm"
              color={`${isDarkMode ? "white" : "black"}`}
              onClick={() =>
                handleSocialClick("https://www.linkedin.com/in/jaffarjjati")
              }
            />
            <Social
              iconCustom={GithubIcon}
              size="sm"
              color={`${isDarkMode ? "white" : "black"}`}
              onClick={() => handleSocialClick("https://github.com/vi0letmist")}
            />
            <Social
              iconCustom={InstagramIcon}
              size="sm"
              color={`${isDarkMode ? "white" : "black"}`}
              onClick={() =>
                handleSocialClick("https://instagram.com/jaffarjjati")
              }
            />
          </div>
          <div className="md:col-span-1 p-2">
            <Image
              src={photoProfile}
              alt="Description of the image"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="md:col-span-1 flex justify-center md:justify-end p-2">
            <div>
              <Button
                color={`${isDarkMode ? "white" : "black"}`}
                onClick={() => console.log("Icon Only")}
              >
                let&apos;s the journey start
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="py-12 px-4" id="about">
        <h1 className="text-[3rem] sm:text-[6rem] lg:text-[8rem] font-bold font-lauren-thompson uppercase mb-4">
          About
        </h1>
        <div>
          <h2 className="text-[1rem] sm:text-[2rem] lg:text-[4rem] font-bold font-lauren-thompson uppercase">
            Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <h3 className="text-xl font-semibold">intro</h3>
              <p ref={ref}>
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: inView ? index * 0.2 : 0,
                      duration: inView ? 0.5 : 0,
                    }}
                    style={{ display: "inline-block", marginRight: "4px" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>
            <div className="md:col-start-3 md:col-span-2">
              <p>
                i’m a software engineer based in indonesia. i love to build
                things, and i’m passionate about technology/programming and
                creative world. i’m especially drawn to frontend development,
                because it allows me to combine my love for design and coding.
                <br />
                <br />i love designing intuitive user experiences, experimenting
                with animations, and making interfaces that feel smooth and
                engaging. for me, frontend development is the perfect blend of
                logic and creativity, where technical precision meets artistic
                vision to create something valuable.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Latest Work */}
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
          <div className="absolute flex flex-col gap-1 -mx-10 pt-8">
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
            className="min-h-[70vh] flex flex-col items-center justify-center text-white snap-start p-8"
            title="Project-06sdd"
            image1={`/images/06sdd 2025-03-16 231058.png`}
            image2={`/images/06sdd 2025-03-16 231642.png`}
            link="https://project-06sdd.vercel.app/"
          >
            <h1 className="text-black">
              i started building a library management system as a personal
              project while learning backend development with python and django.
              at first, my focus was just on creating an api to manage books,
              users, and borrowing records. but after finishing the api, i
              wanted to take it further and see it in action with a real use
              case.
              <br />
              <br />i built it with that in mind, and i want this to be a
              project that i keep improving over time. there’s always something
              to refine, add, or optimize, and i see it as a way to continuously
              learn and apply new things as i go.
            </h1>
          </CardTitleImage>
          <CardTitleImage
            className="min-h-[80vh] flex flex-col items-center justify-center text-white snap-start p-8"
            title="PT Aino Indonesia"
            image1={BgTreeBW}
            image2={BgTreeBW}
          >
            <h1 className="text-black">
              i started building a library management system as a personal
              project while learning backend development with python and django.
              at first, my focus was just on creating an api to manage books,
              users, and lending transactions. but after finishing the api, i
              wanted to take it further and see it in action with a real use
              case.
              <br />
              <br />i built it with that in mind, and i want this to be a
              project that i keep improving over time. there’s always something
              to refine, add, or optimize, and i see it as a way to continuously
              learn and apply new things as i go.
            </h1>
          </CardTitleImage>
        </div>
      </div>
    </div>
  );
};

export default Home;
