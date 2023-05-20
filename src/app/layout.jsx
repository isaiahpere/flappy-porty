import Head from "next/head";
import "./globals.css";
import Script from "next/script";
import { Montserrat } from "next/font/google";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Flappy Porty",
  description: "Modern Portfolio, Animations",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
  },
};

//  STOPPED AT 1:31

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
      </Head>
      <body
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark `}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
