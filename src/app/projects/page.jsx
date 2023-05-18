"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { GithubIcon } from "../components/Icons";
import ProjectImage from "../../../public/images/projects/cryptoProject.jpg";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, image, link, githubLink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={image}
          alt={title}
          placeholder="blur"
          className="object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-3xl mb-2">{type}</span>
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-4 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-4 font-medium text-dark ">{summary}</p>
        <div className="my-z flex items-center">
          <Link href={githubLink} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark border border-dark text-light p-2 px-6 text-lg font-semibold hover:bg-light hover:text-dark"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, image, link, githubLink }) => {
  return (
    <article className="w-full flex flex-col item-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={image}
          alt={title}
          placeholder="blur"
          className="object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary  mb-2">{type}</span>
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>
        <div className="w-full my-z flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={githubLink} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Isaiah | Projects</title>
        <meta name="description" content="list of completed web projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="text-8xl mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title=" Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                link="/"
                type="Featured Project"
                image={ProjectImage}
                githubLink="https://github.com"
              />
            </div>
            <div className="col-span-6">
              <Project
                title=" Crypto Screener Application"
                link="/"
                type="Featured Project"
                image={ProjectImage}
                githubLink="https://github.com"
              />
            </div>
            <div className="col-span-6">
              <Project
                title=" Crypto Screener Application"
                link="/"
                type="Featured Project"
                image={ProjectImage}
                githubLink="https://github.com"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title=" Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                  It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                  local currency."
                link="/"
                type="Featured Project"
                image={ProjectImage}
                githubLink="https://github.com"
              />
            </div>
            <div className="col-span-6">
              <Project
                title=" Crypto Screener Application"
                link="/"
                type="Featured Project"
                image={ProjectImage}
                githubLink="https://github.com"
              />
            </div>
            <div className="col-span-6">
              <Project
                title=" Crypto Screener Application"
                link="/"
                type="Featured Project"
                image={ProjectImage}
                githubLink="https://github.com"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
