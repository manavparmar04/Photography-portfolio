import React from "react";
import AutosizeTextarea from "react-textarea-autosize";
import {
  PhoneIcon,
  LocationMarkerIcon,
  MailIcon,
} from "@heroicons/react/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:manavparmar3775@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  //console.log(formData);

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 py-15 justify-center mx-auto items-center gap-10  ">
      <div>
      <h3 className=" flex top-20  uppercase tracking-[20px] text-gray-500 text-2xl sm: px-5 py-2  ">
        Contact
      </h3>
      <h4 className="text-2xl font-thin text-center">
        {" "}
        <span className="decoration-[#F7AB0A]/40 underline ">
          {" "}
          Like what you see? Let's Talk!
        </span>
      </h4>

      </div>
      
      <div className="flex flex-col space-y-2">
        <div className="space-y-8">
          {/* <div className="flex items-center space-x-5 justify-center pt-5">
            <PhoneIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">+1 911</p>
          </div>*/}

          <div className="flex items-center space-x-5 justify-center font-thin">
            <LocationMarkerIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">Markham, Ontario </p>
          </div>

          <div className="flex items-center space-x-5 justify-center font-thin">
            <MailIcon className="h-6 w-6 text-[#F7AB0A] animate-pulse" />
            <p className="text-2xl">manavparmar3775@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-1 w-fit mx-auto pt-5"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Full Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <AutosizeTextarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />

          <button
            type="submit"
            className="bg-[#F7AB0A] hover:bg-[#F7AB0A] dark:hover:bg-gray-600  py-5 px-10 rounded-md text-black font-bold text-lg transition-colors duration-200"
          >
            Submit
          </button>
        </form>
        <div className="flex justify-center items-center">
          <SocialIcon
            className="hover:opacity-40 opacity-100 transition-opacity duration-200 animate-pulse"
            url="https://github.com/manavparmar04"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
          {/*<SocialIcon
            className="hover:opacity-40 opacity-100 transition-opacity duration-200 animate-pulse"
            url="https://www.youtube.com/results?search_query=mr+beast"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          /> */}

          <SocialIcon
            className="hover:opacity-40 opacity-100 transition-opacity duration-200 animate-pulse"
            url="https://www.instagram.com/manav.04/"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
          <SocialIcon
            className="hover:opacity-40 opacity-100 transition-opacity duration-200 animate-pulse"
            url="https://www.linkedin.com/in/manav-parmar-039a24248/"
            fgColor="gray"
            bgColor="transparent"
            target="_blank"
          />
        </div>
        <div className="flex justify-center items-center animate-pulse">
          <Link href="#hero">
            <button className="heroButton">Return to Top</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
