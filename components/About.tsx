import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  const [currentImage, setCurrentImage] = useState("/images/aboutt.JPEG");
  const images = [
    "/images/aboutt.JPEG",
    "/images/about1.JPEG",
    "/images/about2.JPEG",
    "/images/about4.JPG",
    "/images/about5.JPG",
    "/images/about6.JPG",
    "/images/about7..JPG",
    "/images/about8.JPEG",
    "/images/about9.JPG",
    "/images/about10.JPEG",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(
        images[(images.indexOf(currentImage) + 1) % images.length]
      );
    }, 7000); // Changing speed of the image showing up (5 seconds rn)
    return () => clearInterval(timer);
  }, [currentImage]);

  return (
    <div className="min-h-screen flex flex-col relative text-center md:text-center md:flex-row max-w-7xl px-1 justify-center mx-auto items-center flex-grow ">
      <h3 className="  sm:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-3">
        {" "}
        About
      </h3>

      {/*

       */}

      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={currentImage}
          alt="Current Image"
          width={200} // replace with your desired width
          height={300} // replace with your desired height
          unoptimized={true}
          className="-mb-1 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[3500px] md:h-[500px] xl:w-[4500px] xl:h-[500px]"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-thin">
          Little background about <span className="text-[#F7AB0A]"> Me</span>{" "}
        </h4>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-base p-4 space-y-10 font-thin"
        >
          Hello, My name is Manav Parmar, currently, a second-year Computer
          Science student at Toronto Metropolitan University. You might be
          wondering, what does my work in computer science have to do with photography?
          Well, not much! However, I decided to combine my two passions and use my
          skills in computer science to make this website from the ground up, so
          everything you see has been made by me. If you come across any issues
          feel free to let me know. But anyways, photography has always been
          something I enjoyed doing and over the years, I have had the opportunity
          to refine my skills and now, I am excited to take things to the next
          level by offering my services to others. The images you see on this
          page are just a small sample of my work. There is a whole page
          dedicated to showcasing my photography, so feel free to explore and
          enjoy! If you have any inquiries, want to connect, or just fancy a
          chat, do not hesitate to reach out! You can contact me through my
          social media platforms or send me an email at the very bottom. 
        </motion.p>
      </div>
    </div>
  );
}
