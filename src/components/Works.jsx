import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { personalInfo, projects, oldProjects } from "../constants";
import { Tilt } from "react-tilt";
import { demo } from "../assets";
import * as Accordion from "@radix-ui/react-accordion"; 

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  hosted_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div
          className="relative w-full h-[230px] cursor-pointer"
          onClick={() => window.open(hosted_link, "_blank")}
        >
          <img
            src={image}
            alt="project-image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(hosted_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={demo}
                alt="source-code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {personalInfo.projectsIntro}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <Accordion.Root
        type="single"
        collapsible
        className="mt-10 w-full"
        onValueChange={(value) => setIsOpen(value === "oldProjects")}
      >
        <Accordion.Item value="oldProjects" className="border-b border-gray-700">
          <Accordion.Trigger className="w-full flex justify-between items-center bg-gray-800 text-white px-4 py-3 rounded-lg cursor-pointer text-lg font-bold hover:bg-gray-700 transition-all">
            <span>Old Projects</span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ▼
            </motion.span>
          </Accordion.Trigger>

          <Accordion.Content forceMount className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mt-10 flex flex-wrap gap-7">
                {oldProjects.length > 0 ? (
                  oldProjects.map((project, index) => (
                    <ProjectCard key={`old-project-${index}`} index={index} {...project} />
                  ))
                ) : (
                  <p className="text-gray-400">No old projects available.</p>
                )}
              </div>
            </motion.div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};

export default SectionWrapper(Works, "");
