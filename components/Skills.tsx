import React from "react";
import { motion } from "framer-motion";

type ServiceProps = {
  name: string;
  utilities: string[];
  cost: string;
};

const ServiceCard: React.FC<ServiceProps> = ({ name, utilities, cost }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="border border-gray-500/40 rounded-xl p-4 m-2 flex flex-col justify-between"
  >
    <h2 className="text-xl text-thin font-bold mb-2 text-[#F7AB0A]/80">
      {name}
    </h2>
    <ul className="text-gray-400 text-left">
      {utilities.map((utility, index) => (
        <li key={index}>{utility}</li>
      ))}
    </ul>
    <p className="text-lg font-bold mt-2 text-gray-100 ">{cost}</p>
  </motion.div>
);

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    // ‎ invisible character
    {
      name: "Standard",
      utilities: ["- Professional Equipment", "- Post-Processing", "- Digital Delivery", "- Print (Optional $)", "‎", "‎", "‎", "‎", "‎"],
      cost: "",
    },
    {
      name: "1 Hour",
      utilities: ["Options:","- Headshots","- Family Potraits","- Pet Photography", "- Product Photography", "- Life Style Photos", "- Car shots", "- Student Club events"],
      cost: "Total Cost: $150",
    },
    {
      name: "2 Hours",
      utilities: ["Options:", "- Headshots", "- Engagement Photos","- Pet Photography", "- Product Photography", "- Life Style Photos","- Student Club events", "‎ "],
      cost: "Total Cost: $260",
    },
    {
      name: "3 Hours",
      utilities: ["Options:", "- Engagement Photos", "- Product Photography", "- Life Style Photos","- Student Club events","- Club events", "‎ ","‎"],
      cost: "Total Cost: $320",
    },
    {
      name: "All Day",
      utilities: ["Options:","- Weddings", "- Music Festivals", "- Sporting Events", "- Engagement Photo", "- Student Clubs events", "- Corporate Events", "‎"],
      cost: "Total Cost: $450",
    },

    {
      name: "Custom",
      utilities: ["Don't see the service that you need?", "Looking for a custom amount of hours?", "No problem! I'm flexible and happy to tailor my services to meet your specific needs.", "Please feel free to contact me to discuss your unique requirements."],
      cost: "",
    },

    // Add more services as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-auto max-w-[2000px] px-10 text-center md:text-left">
      <h4 className="text-2xl text-gray-500 tracking-[20px] uppercase pt-3">
        Services
      </h4>

      <p className="text-sm text-thin text-gray-500 tracking-[3px] uppercase">
        Check out my different services!
      </p>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
