import Image from "next/image";
import Link from "next/link";

import Layout from "./components/Layout";
import profileImage from "../../public/images/profile/profile.png";
import AnimatedText from "./components/AnimatedText";
import { LinkArrow } from "./components/Icons";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image
              width="100%"
              height="100%"
              src={profileImage}
              alt="profile"
              className="w-full h-auto"
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
                  hover:text-dark  border-2 border-solid border-transparent hover:border-dark"
              >
                Resume
                <LinkArrow className={`w-6 ml-1`} />
              </Link>
              <Link
                href=""
                target="_blank"
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                Contact
              </Link>
              <button></button>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  );
}
