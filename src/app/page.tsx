"use client";

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

const sentence = `hai my name jetri, still in development. i just struck with words i 
saw online: perfection is enemy of progress--so i deploy this site and continue to make it better.`;
const words = sentence.split(" ");

const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the element is in view
    triggerOnce: false, // Re-trigger the animation when entering viewport again
  });

  const { ref: secondCardRef, inView: secondCardInView } = useInView({
    threshold: 0.2, // Adjust sensitivity
    triggerOnce: false, // Re-trigger animation when scrolling back
  });

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    // <Layout backgroundImage={BgTreeBW.src} hasBackgroundImage>
    //   Content Above Background Image
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
                let's the journey start
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
                    exit={{ opacity: 0 }} // Disappear instantly when leaving viewport
                    transition={{
                      delay: inView ? index * 0.2 : 0, // Only delay when animating in
                      duration: inView ? 0.5 : 0, // Remove transition on leaving
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
                i can explain a lot of word about why i like poetry so much, i
                can explain a lot of word about why i like poetry so much, i can
                explain a lot of word about why i like poetry so much, i can
                explain a lot of word about why i like poetry so much, i can
                explain a lot of word about why i like poetry so much
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
        <div className="flex-1 overflow-y-scroll snap-y snap-mandatory scrollbar-hide md:px-32">
          <CardTitleImage
            className="min-h-[80vh] flex flex-col items-center justify-center text-white snap-start p-8"
            title="Project-06sdd"
            image1={BgTreeBW}
            image2={BgTreeBW}
            link="1212"
          />
          <CardTitleImage
            className="min-h-[80vh] flex flex-col items-center justify-center text-white snap-start p-8"
            title="PT Aino Indonesia"
            image1={BgTreeBW}
            image2={BgTreeBW}
            link="1213"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
