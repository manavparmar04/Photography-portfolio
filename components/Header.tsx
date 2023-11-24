import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden absolute top-5 right-10 text-[#F7AB0A] "
        >
          ☰
        </button>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-20 ${
            isOpen ? "block" : "hidden"
          } sm:hidden`}
        >
          <div className="bg-[#292929] h-full w-32 fixed top-0 right-0 p-5 pr-5">
            <button onClick={() => setIsOpen(false)}>☰</button>
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
        </div>

        <div className="pt-0 pb-6 sm:flex hidden">
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
