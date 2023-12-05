import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  company: string;
  imageSrc: string;
  techUsed: string[];
  startDate: string;
  endDate: string;
  summaryPoints: string[];
  imageWidth: string;
  imageHeight: string;
  smWidth: string;
  smHeight: string;
};

export default function ExperienceCard({
  title,
  company,
  imageSrc,
  techUsed,
  startDate,
  endDate,
  summaryPoints,
  imageWidth,
  imageHeight,
  smWidth,
  smHeight,
}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
                      w-[322px] md:w-[600px] sm:w-[400px] xl:w-[900px] snap-center bg-[#292929] p-10
                      hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
                      overflow-auto mt-12 mb-5"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          className={
            "w-[" +
            smWidth +
            "] h-[" +
            smHeight +
            "] rounded-full object-cover object-center xl:w-[" +
            imageWidth +
            "] xl:h-[" +
            imageHeight +
            "]"
          }
          src={imageSrc}
          alt=""
          width={200} // specify the width
          height={200} // and the height
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-thin">{title}</h4>
        <p className=" text-2xl mt-1">{company}</p>
        {/* 
        <div className='flex space-x-2 my-2'>
        {techUsed.map((tech, index) => (
            <Image 
                key={index}
                className='h-10 w-10 rounded-full object-cover'
                src={tech}
                alt="tech"
                width={200} // specify the width
                height={200} // and the height
            />
        ))}
        </div>*/}
        <p className="uppercase py-5 text-gray-300">
          Started: {startDate} | Ended: {endDate}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg h-[200px] font-thin">
          {summaryPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
