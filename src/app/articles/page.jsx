"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";

import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import paginationImage from "../../../public/images/articles/pagination.jpg";
import scrollImage from "../../../public/images/articles/smoothScroll.png";
import formValidationImage from "../../../public/images/articles/formValidation.png";
import modalImage from "../../../public/images/articles/modal.png";
import reduxImage from "../../../public/images/articles/redux.png";
import todoImage from "../../../public/images/articles/todo.png";
import loadingImage from "../../../public/images/articles/loading.jpg";
import { useRef } from "react";

const FramerImage = motion(Image);

const MovingImage = ({ title, image, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imageRef = useRef(null);

  const handleMouse = (e) => {
    imageRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  };

  const handleMouseLeave = (e) => {
    imageRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer"
    >
      <h2 className="capitalize text-xl font-semibold hover:underline underline-offset-2">
        {title}
      </h2>
      <FramerImage
        src={image}
        alt={title}
        className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden"
        ref={imageRef}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        priority={true}
        sizes="
          (max-width: 768px) 100vw
          (max-width: 1200px) 50vw
          50vw
        "
      />
    </Link>
  );
};

const Article = ({ image, title, date, link }) => {
  return (
    <motion.li
      className="
        relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 
        border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col xs:text-sm
      "
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeIn" } }}
      viewport={{ once: true }}
    >
      <MovingImage title={title} image={image} link={link} />
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm xs:pt-3">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ image, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light flex flex-col items-center justify-between">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="
            (max-width: 768px) 100vw
            (max-width: 1200px) 50vw
            50vw
          "
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2  hover:underline underline-offset-2 xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  );
};

const Articles = () => {
  return (
    <>
      <Head>
        <title>Isaiah | Articles Page</title>
        <meta name="description" content="about page for Isaiah" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World! "
            className="mb-16 text-8xl lg:text-7xl sm:mb-8 sx:text-6xl xs:text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8  md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="how to build a custom pagination component in ReactJS from scratch.
                Follow this step-by-step guide to integrate a really awesome Pagination component in favorite
                your ReactJS project."
              time="9 min read"
              link="/"
              image={paginationImage}
            />
            <FeaturedArticle
              title="Creating Stunning Loading Screens In React"
              summary="Learn how to create stunning loading screens in React with 3 different methods. 
              Discover how to use React-Loading, React-Lottie & build a custom loading screen. 
              Improve the user experience."
              time="14 min read"
              link="/"
              image={loadingImage}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              image={formValidationImage}
              date="05/16/2023"
              link="/"
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              image={scrollImage}
              date="05/16/2023"
              link="/"
            />
            <Article
              title="Creating An Efficient Modal Component In React Using Hooks And Portals"
              image={modalImage}
              date="05/16/2023"
              link="/"
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              image={todoImage}
              date="05/16/2023"
              link="/"
            />
            <Article
              title="Build A Fabulous Todo List App With React, Redux And Framer-Motion"
              image={reduxImage}
              date="05/16/2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Articles;
