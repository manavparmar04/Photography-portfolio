import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  const [currentImage, setCurrentImage] = useState("/images/aboutt.JPEG");
  const images = [
    "/images/about1.JPEG",
    "/images/about2.JPEG",
    "/images/about3.JPG",
    "/images/about4.JPG",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(
        images[(images.indexOf(currentImage) + 1) % images.length]
      );
    }, 8000); // Changing speed of the image showing up (5 seconds rn)
    return () => clearInterval(timer);
  }, [currentImage]);

  return (
    <div className="h-screen flex flex-col relative text-center md:text-center md:flex-row max-w-7xl px-1 justify-center mx-auto items-center ">
      <h3 className="  sm:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-3">
        {" "}
        {/* Change to justify-center to center about */}
        About
      </h3>

      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Image
          src={currentImage}
          alt="Current Image"
          width={200} // replace with your desired width
          height={300} // replace with your desired height
          className="-mb-1 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[3500px] md:h-[500px] xl:w-[4500px] xl:h-[600px]"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Little background about <span className="text-[#F7AB0A]"> Me</span>{" "}
        </h4>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-base p-4 space-y-10"
        >
          Hello, My name is Manav Parmar, currently, a second-year Computer
          Science student at Toronto Metropolitan University. Since elementary
          school Photography has been a passion of mine, Over the years, I’ve
          had the opportunity to refine my skills and now, I’m excited to take
          things to the next level by offering my services to others. The images
          you see on this page are just a small sample of my work. There’s a
          whole page dedicated to showcasing my photography, so feel free to
          explore and enjoy! If you have any inquiries, want to connect, or just
          fancy a chat, don’t hesitate to reach out! You can contact me through
          my social media platforms or send me an email. You’ll find all the
          necessary details on the contact page below. I look forward to hearing
          from you!
        </motion.p>
      </div>
    </div>
  );
}
