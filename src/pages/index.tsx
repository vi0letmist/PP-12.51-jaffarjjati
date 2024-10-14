import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Layout from "@/components/layout/layout";
import Button from "@/components/common/button";
import BgTreeBW from "@/assets/images/pexels-ian-panelo-7169401.jpg";
import Social from "@/components/common/social";
import LinkedInIcon from "@/components/icons/linkedin";
import GithubIcon from "@/components/icons/github";
import InstagramIcon from "@/components/icons/instagram";
import photoProfile from "@/assets/images/julian.jpg";

const sentence = "hai my name jetri from the side to side";
const words = sentence.split(" ");

const Home = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <Layout>
      {/* <Layout backgroundImage={BgTreeBW.src} hasBackgroundImage> */}
      {/* Content Above Background Image */}
      <div className="px-8">
        <div className="flex justify-start pl-[4rem]">
          <h1 className="text-[3.5rem] sm:text-[8rem] lg:text-[10rem] font-bold font-lauren-thompson uppercase mb-[-2rem] sm:mb-[-6rem] sm:mt-[-4rem]">
            Based
          </h1>
        </div>
        <div className="flex justify-end">
          <h1 className="text-[3.5rem] sm:text-[8rem] lg:text-[10rem] font-bold font-lauren-thompson uppercase mb-[-2rem] sm:mb-[-6rem]">
            Software
          </h1>
        </div>
        <div className="flex justify-start">
          <h1 className="text-[3.5rem] sm:text-[8rem] lg:text-[10rem] font-bold font-lauren-thompson uppercase">
            Engineer
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 flex gap-4">
          <div className="md:col-span-1 flex gap-4 items-baseline justify-center md:justify-start p-2">
            <Social
              iconCustom={LinkedInIcon}
              size="sm"
              className="bg-gray-900"
              onClick={() =>
                handleSocialClick("https://www.linkedin.com/in/jaffarjjati")
              }
            />
            <Social
              iconCustom={GithubIcon}
              size="sm"
              className="bg-gray-900"
              onClick={() => handleSocialClick("https://github.com/vi0letmist")}
            />
            <Social
              iconCustom={InstagramIcon}
              size="sm"
              className="bg-gray-900"
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
              <Button color="black" onClick={() => console.log("Icon Only")}>
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
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }} // Change this to false to allow repeated animations
                    transition={{ delay: index * 0.2, duration: 0.5 }}
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
      <div className="py-12 px-4" id="latest-work">
        <h1 className="text-[3rem] sm:text-[6rem] lg:text-[8rem] font-bold font-lauren-thompson uppercase mb-4">
          Latest Work
        </h1>
        <div>
          <div className="relative border-2 border-black z-10">
            {/* Red border outside, placed behind */}
            <div className="absolute inset-0 border-2 border-black -m-6 top-[2.75rem] left-[2.75rem] pointer-events-none z-0"></div>

            {/* Card content with black border */}
            <div className="relative z-10">
              <div className="border-b px-4 grid grid-cols-2 bg-white">
                <div className="col-span-1">
                  <h2 className="text-[1rem] sm:text-[2rem] lg:text-[4rem] font-bold font-lauren-thompson uppercase">
                    PT Aino Indonesia
                  </h2>
                </div>
                <div className="col-span-1 flex justify-end items-center">
                  <div>
                    <Button
                      icon="ArrowUpRightIcon"
                      color="white"
                      className="border border-black"
                      onClick={() => console.log("Icon Only")}
                    />
                  </div>
                </div>
              </div>
              <div className="border-t-2 border-black">
                <Image
                  src={BgTreeBW}
                  alt="Description of the image"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
