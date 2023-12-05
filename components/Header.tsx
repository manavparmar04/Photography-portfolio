import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

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
        <div className="pt-0 pb-6 sm:flex hidden">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#photos">
            <button className="heroButton">Photography</button>
          </Link>
          <Link href="#services">
            <button className="heroButton">Services</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </motion.div>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden absolute top-5 right-10 text-[#F7AB0A] animate-pulse text-3xl "
        >
          ☰
        </button>
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 ${
            isOpen ? "block" : "hidden"
          } sm:hidden z-50`}
        >
          <div className="bg-[#292929]/90 h-full w-screen fixed top-0 right-0 p-5 pr-5 text-3xl font-semibold text-center flex flex-col text-gray-500">
            <button onClick={() => setIsOpen(false)}>X</button>
            <Link href="#about">
              <button className="heromenuButton mb-5 mt-5">About</button>
            </Link>
            <Link href="#experience">
              <button className="heromenuButton mb-5">Experience</button>
            </Link>
            <Link href="#photos">
              <button className="heromenuButton mb-5">Photography</button>
            </Link>
            <Link href="#services">
              <button className="heromenuButton mb-5">Services</button>
            </Link>
            <Link href="#contact">
              <button className="heromenuButton mb-5">Contact</button>
            </Link>
            <Link href="#hero">
              <button className="heromenuButton mb-5">Return to Top</button>
            </Link>
            <div className="flex flex-row mt-4 justify-center">
              <SocialIcon
                className="hover:opacity-40 opacity-100 transition-opacity duration-200 animate-pulse"
                url="https://www.instagram.com/manavphotography_/"
                fgColor="gray"
                bgColor="transparent"
                target="_blank"
              />
              <SocialIcon
                className="hover:opacity-40 opacity-100 transition-opacity duration-200 animate-pulse"
                url="https://www.linkedin.com/in/manav-parmar-039a24248/"
                fgColor="gray"
                bgColor="transparent"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
