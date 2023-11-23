import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-center max-w-7xl mx-auto z-20 xl:items-center sm:text-size">
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer "
      >
        <div className="pt-0 pb-6">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#services">
            <button className="heroButton">Services</button>
          </Link>

          <Link href="#photos">
            <button className="heroButton">Photos</button>
          </Link>

          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </motion.div>
    </header>
  );
}
