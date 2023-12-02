import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Project = {
  imageSrc: string;
  title: string;
  description: string;
  Link: string;
};

type Props = {};

function Projects({}: Props) {
  const projects: Project[] = [
    {
      imageSrc: "/images/headshot.JPG",
      title: "Headshots",
      description:
        "Showcasing a collection of professional headshots, capturing unique personalities and expressions and ensuring every subject is presented in the best possible light. Perfect for profiles, portfolios, or personal branding. SWIPE TO SEE MORE!",
      Link: "https://drive.google.com/drive/folders/1zL_DpiaEPAsRRwSWfak8tnAHyAuIt4kL?usp=share_link",
    },
    {
      imageSrc: "/images/event.JPG",
      title: "Events",
      description:
        "Snapping photos at all sorts of events, from graduations and birthdays to orientations and student club activities. Each photo is a memory, a frozen moment of joy and celebration. I focus on the little details and those spontaneous moments that make each event unique. ",
      Link: "https://drive.google.com/drive/folders/16gP1uXHAJZgOFoBMdj7QKHtYfcTAePrL?usp=share_link",
    },

    {
      imageSrc: "/images/pets.JPEG",
      title: "Pets",
      description:
        "Showcasing a variety of adorable pet portraits that capture the unique personalities of your furry friends. From playful poses to peaceful slumbers, each image highlights the charm and character of these beloved family members.",
      Link: "https://drive.google.com/drive/folders/1m_g1VfOOjtgACyBvDRoP2QbVsyb8YS5L?usp=share_link",
    },

    {
      imageSrc: "/images/car.JPEG",
      title: "Cars",
      description:
        "Featuring a collection of striking car photographs that highlight the sleek designs and intricate details of various automobiles. From vintage classics to modern marvels, each image captures the beauty and power of these machines.",
      Link: "https://drive.google.com/drive/folders/14NfAzNvr9mAF3X-3ruL_8lEPVKxec3oO?usp=share_link",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0 scrollbar-thin"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl pl-5 pt-1">
        Photography
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] mt-10 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-5 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className=" overflow-visible w-[300px] h-[300px] md:w-[300px] md:h-[1000px] object-cover lg:w-[420px] lg:h-[1000px] flex justify-center items-center"
            >
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={400} // specify the width
                height={1000} // and the height
              />
            </motion.div>
            <div className="space-y-8 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-thin text-center">
                <span className="underline decoration-white/50">
                  {project.title}
                </span>{" "}
              </h4>
              <p className=" text-md font-thin text-center ">
                {project.description}
              </p>
              <a
                className="px-6 py-2 border border-white/50 uppercase text-xs tracking-widest
                text-white-600/40 transition-all
                hover:border-[#F7AB0A]/40
                hover:text-[#F7AB0A]/40
                text-center flex justify-center animate-pulse mt-auto"
                href={project.Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View more
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
