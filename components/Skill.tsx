import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  imageSRC: string;
  skillPercentage: string;
};

function Skill({ directionLeft, imageSRC, skillPercentage }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex place-items-center rounded-full overflow-hidden w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out">
          <Image
            src={imageSRC}
            alt="tech used"
            width={200} // specify the width
            height={200} // and the height
          />
        </div>
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="  text-sm md:text-3xl lg:text-3xl font-bold text-black opacity-100">
            {skillPercentage}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
