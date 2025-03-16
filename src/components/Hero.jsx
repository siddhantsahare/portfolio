import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";
import { Typewriter } from "react-simple-typewriter";
import { heroTitles } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Floating Background Image */}
      <motion.img
        src="/photo2.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        initial={{ y: -20, opacity: 0.8 }}
        animate={{ y: [0, 10, 0], opacity: 1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Text Section */}
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 inset-0`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-electric-purple">Hi</span>, I'm{" "}
            {personalInfo.name}
          </h1>
          {/* <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Innovative {personalInfo.role}, <br className="sm:block hidden" />
            building web and mobile applications
          </p> */}
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            <span className="whitespace-nowrap">
              Innovative{" "}
              <span className="text-[#00FF00] font-bold">
                <Typewriter
                  words={heroTitles}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </span>
            , <br />
            building web and mobile applications
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
