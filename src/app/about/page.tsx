"use client";

import Button from "@/components/common/button";

const About = () => {
  const handleClick = () => {};

  return (
    <div>
      <div className="text-center text-white px-4">
        <h1>about</h1>
        <div className="flex space-x-4">
          <Button icon="SunIcon" onClick={() => handleClick()}>
            With Sun Icon
          </Button>
          <Button icon="MoonIcon" iconPosition="right" color="indigo">
            With Moon Icon Right
          </Button>
          <Button icon="MoonIcon" color="gray" iconPosition="left">
            With Moon Icon Left
          </Button>
          <Button
            icon="MoonIcon"
            color="red"
            onClick={() => console.log("Icon Only")}
          />
          <Button color="red" onClick={() => handleClick()}>
            asasasasas
          </Button>
        </div>
      </div>
      <div className="py-12 px-4">
        {/* <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg">
          This section appears below the background image. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          Sed cursus ante dapibus diam.
        </p> */}
      </div>
    </div>
  );
};

export default About;
