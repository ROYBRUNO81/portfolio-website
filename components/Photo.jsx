"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className="relative flex justify-center items-center w-[300px] h-[300px] xl:w-[506px] xl:h-[506px]"
      >
        {/* Animated Circle */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] absolute"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4.73484, 236.2218, 26.28655, 25.06182"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.6, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[260px] h-[260px] xl:w-[460px] xl:h-[460px] overflow-hidden rounded-full"
        >
          <Image
            src="/profile.jpg"
            alt="Profile Photo"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;

