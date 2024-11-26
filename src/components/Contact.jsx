import Aos from "aos";
import React, { useEffect } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="py-[100px] flex font-poppins items-center justify-center bg-slate-50 min-h-[100vh] ">
        <div>
          <div data-aos="fade-up" className="text-center">
            <h1 className="text-blue-500 text-[30px] md:text-[60px] font-bold uppercase font-headerFont mt-[40px]">
              Contact me
            </h1>
            <p className="font-semibold text-slate-600 text-[20px] md:text-[30px]">
              Hit me up! let's talk
            </p>
          </div>

          <div data-aos="fade-up" className="grid gap-5 my-[30px] grid-cols-2 ">
            <a
              className="flex flex-row gap-2 items-center"
              href="https://www.linkedin.com/in/noman7373/"
              target="_blank"
            >
              <AiFillLinkedin className="text-blue-500 text-[30px] md:text-[50px] p-1 md:p-2 bg-white rounded-full shadow-2xl" />
              <p className="text-slate-700 text-[20px]">LinkedIn</p>
            </a>
            <a
              className="flex flex-row gap-2 items-center"
              href="https://github.com/Noman7373"
              target="_blank"
            >
              <AiFillGithub className="text-blue-500 text-[30px] md:text-[50px] p-1 md:p-2 bg-white rounded-full shadow-2xl" />
              <p className="text-slate-700 text-[20px]">GitHub</p>
            </a>
            <a
              className="flex flex-row gap-2 items-center"
              href="mailto:officialnomanahmed@gmail.com"
              target="_blank"
            >
              <AiOutlineMail className="text-blue-500 text-[30px] md:text-[50px] p-1 md:p-2 bg-white rounded-full shadow-2xl" />
              <p className="text-slate-700 text-[20px]">Email</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
