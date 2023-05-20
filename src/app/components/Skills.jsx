"use client";
import { motion } from "framer-motion";

const Skill = ({ name, xPos, yPos }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full 
      font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
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
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
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
