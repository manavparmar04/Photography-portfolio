import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-5  uppercase tracking-[20px] text-gray-500/50 text-2xl">
        {" "}
        {/* top-24 */}
        Experience
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <ExperienceCard
          title={"VP of Photography"}
          company={"Metropolitan Data Science Assoication"}
          imageSrc={"/images/MDSA.png"}
          techUsed={[
            "/images/techused3.png",
            "/images/techused1.png",
            "/images/techused2.png",
          ]}
          startDate={"August 2023"}
          endDate={"Present"}
          summaryPoints={[
            "Captured professional headshots for members, enhancing their professional online presence.",
            "Documented and captured various events.",
            "Utilized advanced photo editing tools to enhance and retouch images.",
          ]}
          imageWidth={"400px"}
          imageHeight={"130px"}
          smWidth={"10"}
          smHeight={"100"}
        />
        <ExperienceCard
          title={"VP of Photography"}
          company={"Metropolitan U Quantum Science and Engineering"}
          imageSrc={"/images/QSEC.JPG"}
          techUsed={[
            "/images/techused3.png",
            "/images/techused1.png",
            "/images/techused2.png",
          ]}
          startDate={"August 2023"}
          endDate={"Present"}
          summaryPoints={[
            "Captured professional headshots for members, enhancing their professional online presence.",
            "Documented and captured various events.",
            "Utilized advanced photo editing tools to enhance and retouch images.",
          ]}
          imageWidth={"350"}
          imageHeight={"10"}
          smWidth={"26"}
          smHeight={"26"}
        />
        <ExperienceCard
          title={"VP of Social Communications"}
          company={"Student Leadership Conference"}
          imageSrc={"/images/temp.png"}
          techUsed={[]}
          startDate={"Nov 12 2023"}
          endDate={"Present"}
          summaryPoints={[
            "Responsibilities will include Photography and Videography for the main event",
            "Make reels and tiktoks to promote the event",
          ]}
          imageWidth={""}
          imageHeight={""}
          smWidth={"200"}
          smHeight={"100"}
        />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
