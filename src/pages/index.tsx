import Image from "next/image";

import Layout from "@/components/layout/layout";
import Button from "@/components/common/button";
import BgTreeBW from "@/assets/images/pexels-ian-panelo-7169401.jpg";
import Social from "@/components/common/social";
import LinkedInIcon from "@/components/icons/linkedin";
import GithubIcon from "@/components/icons/github";
import InstagramIcon from "@/components/icons/instagram";
import photoProfile from "@/assets/images/julian.jpg";

const Home = () => {
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
        <div className="flex justify-between">
          <div className="flex gap-4 p-4 items-baseline flex-1">
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
          <div className="p-4 flex-shrink-0">
            <Image
              src={photoProfile}
              alt="Description of the image"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div className="p-4 flex-1 mx-auto flex justify-end items-baseline">
            <Button color="black" onClick={() => console.log("Icon Only")}>
              let's the journey start
            </Button>
          </div>
        </div>
      </div>

      {/* Content Below Background Image */}
      <div className="py-12 px-4">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          This section appears below the background image. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam.
        </p>
      </div>
    </Layout>
  );
};

export default Home;
