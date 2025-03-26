"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const sentence = `hi, my name is jaffar jatmiko jati, but you can call me jaffar. i'm an introvert who loves creativity—whether through music, film, gaming, 
or poetry. i adore melancholic things but also love being active and collaborative, finding that creativity exists in isolation as much as it does in shared experience.`;
const words = sentence.split(" ");

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
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
              I&apos;m a software engineer based in Indonesia. I love creating
              things, and I&apos;m very passionate about tech/programming and
              the creative universe. I&apos;m especially interested in frontend
              development, as it allows me to do what I love – which is code as
              well as design.
              <br />
              <br />I enjoy creating intuitive user interactions, playing around
              with animations, and building interfaces that are interactive and
              fluid. To me, frontend development is the ideal mixture of logic
              and art, where technicality and creativity unite to form something
              practical.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
