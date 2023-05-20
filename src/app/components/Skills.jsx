"use client";
import { motion } from "framer-motion";

const Skill = ({ name, xPos, yPos }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full 
        font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
        xs:font-bold
      "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: xPos, y: yPos, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 ">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark
          lg:p-6 md:p-4 sx:text-xs  sm:p-1"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" xPos="-22vw" yPos="2vw" />
        <Skill name="CSS" xPos="-5vw" yPos="-10vw" />
        <Skill name="Javascript" xPos="20vw" yPos="6vw" />
        <Skill name="React" xPos="0vw" yPos="12vw" />
        <Skill name="NextJS" xPos="-20vw" yPos="-15vw" />
        <Skill name="GatsbyJS" xPos="15vw" yPos="-12vw" />
        <Skill name="Web Design" xPos="32vw" yPos="-5vw" />
        <Skill name="Figma" xPos="0vw" yPos="-25vw" />
        <Skill name="FIrebase" xPos="-25vw" yPos="18vw" />
        <Skill name="Tailwind CSS" xPos="18vw" yPos="22vw" />
      </div>
    </>
  );
};

export default Skills;
