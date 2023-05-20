import Link from "next/link";

import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with{" "}
          <span className="text-primary text-2xl px-1 dark:text-primaryDark">
            &#9825;
          </span>
          By &nbsp;
          <Link href="/" className=" underline underline-offset-2">
            Isaiah Pereira
          </Link>
        </div>
        <Link href="/">Let's Chat!</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
