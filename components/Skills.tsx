import React from "react";

type ServiceProps = {
  name: string;
  utilities: string[];
  cost: string;
};

const ServiceCard: React.FC<ServiceProps> = ({ name, utilities, cost }) => (
  <div className="border rounded-xl p-4 m-2 flex flex-col justify-between">
    <h2 className="text-xl text-thin font-bold mb-2">{name}</h2>
    <ul>
      {utilities.map((utility, index) => (
        <li key={index}>{utility}</li>
      ))}
    </ul>
    <p className="text-lg font-bold mt-2 ">Total Cost: ${cost}</p>
  </div>
);

const Services: React.FC = () => {
  const services: ServiceProps[] = [
    {
      name: "1 hour",
      utilities: ["Events","Headshots", "Clothing"],
      cost: "160"
    },{
      name: "1 hour",
      utilities: ["Events","Headshots", "Clothing","Image editting"],
      cost: "200",
    },
    {
      name: "2 Hours",
      utilities: ["Events","Headshots", "Clothing",],
      cost: "330",
    },
    {
      name: "2 Hours",
      utilities: ["Events","Headshots", "Clothing", "Photoshop"],
      cost: "360",
    },
    {
      name: "3 Hours +",
      utilities: ["Events","Headshots", "Clothing", "Photoshop"],
      cost: "500",
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
