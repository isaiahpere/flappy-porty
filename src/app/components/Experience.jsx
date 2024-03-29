"use client";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      className="my-8 first:mt-0 last:mb-0  w-[60%] mx-auto flex flex-col items-center justify-between md:w-{80%]"
      ref={ref}
    >
      <LiIcon refElement={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="sx:pl-5"
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl sx:text-lg ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });
  return (
    <div className="my-64 lg:my-32 sm:my-16">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://google.com"
            time="2022 - Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
              search engine, including improving the accuracy and relevance of search results and 
              developing new tools for data analysis and visualization."
          />
          <Details
            position="Intern"
            company="Meta"
            companyLink="https://meta.com"
            time="2021 - 2022"
            address="Menlo Park, CA"
            work="Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
              share short-form video content, including designing and implementing a new user interface and developing 
              the backend infrastructure to support the feature."
          />
          <Details
            position="Software Developer"
            company="Amazon"
            companyLink="https://amazon.com"
            time="2020 - 2021"
            address="Seattle, WA"
            work="Worked on a team responsible for developing Amazon's mobile app, including implementing new features such 
              as product recommendations and user reviews, and optimizing the app's performance and reliability."
          />
          <Details
            position="Software Developer Internr"
            company="Microsoft"
            companyLink="https://microsoft.com"
            time="2019 - 2020"
            address="Seattle, WA"
            work="Worked on a team responsible for developing new features for Microsoft's Windows operating system, 
              including implementing a new user interface for a system settings panel and optimizing the performance of 
              a core system component."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
