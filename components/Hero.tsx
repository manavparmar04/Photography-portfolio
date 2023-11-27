import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Welcome to MP's Photography",
      "Capturing Moments One Click at a Time",
      "Bringing Life to Photos",
      /* This can be changed later */
    ],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles /> {/* This can be changed later */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/hero.JPG"
          alt=""
          width={500} // specify the width
          height={500} // and the height
          className="rounded-full h-32 w-32 mx-auto object-cover object-center"
        />
      </motion.div>
      <div className="z-25">
        {" "}
        {/* Made Z greater than 0 to bring up the layer, almost like putting this layer ahead of the background*/}
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Manav Parmar
        </h2>
        <h1 className="text-5xl lg:text6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        {/*
        <div className='pt-5'>
                

                <Link href= "#about">
                    <button className='heroButton'>About</button>
                </Link>

                <Link href= "#experience">
                    <button className='heroButton'>Experience</button>
                </Link>

                <Link href= "#services">
                    <button className='heroButton'>Services</button>
                </Link>

                <Link href= "#projects" >
                    <button className='heroButton'>Projects</button>
                </Link> 

                <Link href= "#contact">
                    <button className='heroButton'>Contact</button>
                </Link>

                

            
            </div>
             */}
      </div>
    </motion.div>
  );
}
