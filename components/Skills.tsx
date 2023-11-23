import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px]
      xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl pt-3">
        Services
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over time, price and extras{" "}
      </h3>

      <div className="grid grid-cols-5 gap-5">
        <Skill imageSRC={"/images/techused1.png"} skillPercentage={"75%"} />
        <Skill imageSRC={"/images/techused3.png"} skillPercentage={"100%"} />
        <Skill imageSRC={"/images/techused2.png"} skillPercentage={"88%"} />
        <Skill imageSRC={"/images/techused4.png"} skillPercentage={"88%"} />
        <Skill imageSRC={"/images/techused4.png"} skillPercentage={"88%"} />
        <Skill imageSRC={"/images/techused4.png"} skillPercentage={"88%"} />
        <Skill imageSRC={"/images/techused4.png"} skillPercentage={"88%"} />
        <Skill imageSRC={"/images/techused4.png"} skillPercentage={"88%"} />
      </div>
    </motion.div>
  );
}

export default Skills;
