import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500/50 text-2xl">
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <ExperienceCard
          title={"VP of Photography"}
          company={"Metropolitan Data University"}
          imageSrc={"/images/logo.jpg"}
          techUsed={[
            "/images/techused3.png",
            "/images/techused1.png",
            "/images/techused2.png",
          ]}
          startDate={"August 2023"}
          endDate={"Present"}
          summaryPoints={[
            "Took headshots for the team",
            "Made edits with photoshop",
          ]}
        />
        <ExperienceCard
          title={"VP Social communications"}
          company={"Metropolitan Data University"}
          imageSrc={"/images/logo.jpg"}
          techUsed={[
            "/images/techused3.png",
            "/images/techused1.png",
            "/images/techused2.png",
          ]}
          startDate={"August 2023"}
          endDate={"Present"}
          summaryPoints={[
            "Took headshots for the team",
            "Made edits with photoshop",
          ]}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
