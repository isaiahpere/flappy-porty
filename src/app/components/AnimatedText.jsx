"use client";
import React from "react";
import { motion } from "framer-motion";

// animation for entire quote
const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      Delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

// animation per single word
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div
      className={
        "w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden "
      }
    >
      <motion.h1
        className={`${className} inline-block w-full text-dark font-bold capitalize dark:text-light sm:py-0 `}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
