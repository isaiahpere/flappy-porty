import Image from "next/image";
import Link from "next/link";

import Layout from "./components/Layout";
import profileImage from "../../public/images/profile/profile.png";
import AnimatedText from "./components/AnimatedText";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";
import lightbulbImage from "../../public/images/svgs/bulb.svg";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:bg-dark dark:text-light">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              src={profileImage}
              alt="profile"
              className="w-full h-auto"
              priority={true}
              sizes="
                (max-width: 768px) 100vw
                (max-width: 1200px) 50vw
                50vw
              "
            />
          </div>
          <div className="w-1/2 flex flex-col item-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="text-4xl text-left"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/dummy.pdf"
                target="_blank"
                download={true}
                className="
                  flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
                  font-semibold hover:bg-light 
                  hover:text-dark  border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
              >
                Resume
                <LinkArrow className={`w-6 ml-1`} />
              </Link>
              <Link
                href=""
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
              >
                Contact
              </Link>
              <button></button>
            </div>
          </div>
        </div>
        <HireMe />
        <div>
          <Image
            src={lightbulbImage}
            alt="Isaiah"
            width="100%"
            height="100%"
            className="h-auto absolute right-8 bottom-8 inline-block w-24"
          />
        </div>
      </Layout>
    </main>
  );
}
