import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { FaBootstrap, FaNode, FaReact } from "react-icons/fa6";
import { SiExpress, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { Link } from "react-router-dom";
import AboutImg from "../assets/personalimg.jpg";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-slate-50">
        <div className="px-[30px] pb-[50px] to-blue-900 pt-[150px] min-h-[100vh] ">
          <div className="flex flex-col lg:flex-row justify-around items-start gap-5">
            <img
              src={AboutImg}
              alt="Noman"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="rounded bg-blue-500 md:w-[100%] lg:w-[35%] sm:w-[100%]"
            />

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className=" flex flex-col gap-5"
            >
              <h1 className="md:text-[30px] text-[25px] font-bold uppercase text-slate-900  font-headerFont">
                About Me
              </h1>
              <div className="text-slate-700 font-fonty max-w-[700px] flex flex-col gap-4 ">
                <p className="md:text-[18px] text-slate-700   text-[15px] ">
                  My name is{" "}
                  <strong className="uppercase text-blue-500 font-bold">
                    Noman Ahmed 
                  </strong>
                  , and I am a passionate{" "}
                  <strong className="capitalize">
                    Mern Stack / Full Stack Web Developer
                  </strong>
                  , committed to delivering value and innovative solutions to
                  businesses, organizations, and communities through my
                  expertise in both front-end and back-end development,
                  including proficiency in React.js, Node.js, Express.js and
                  MongoDB.
                </p>

                <Link
                  className="border p-2 rounded text-[15px] md:text-[20px] w-fit border-blue-500 text-slate-50 font-[500] hover:text-slate-50 hover:bg-slate-900 bg-blue-500"
                  to="/contact"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="py-[50px] "
          >
            <h1 className="md:text-[30px] text-center text-[25px] font-bold uppercase text-slate-900 mb-[40px] font-headerFont">
              My skills
            </h1>
            <div className="grid gap-5 md:gap-[40px]  grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  ">
                <AiFillHtml5 className="text-[100px] text-blue-500 " />
                <h2 className="text-slate-900  font-semibold text-[20px]">
                  HTML
                </h2>
              </div>
              <div className="flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  ">
                <BiLogoCss3 className="text-[100px] text-blue-500 " />
                <h2 className="text-slate-900  font-semibold text-[20px]">
                  CSS
                </h2>
              </div>
              <div className="flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  ">
                <BiLogoJavascript className="text-[100px] text-blue-500 " />
                <h2 className="text-slate-900  font-semibold text-[20px]">
                  Javascript
                </h2>
              </div>
              <div className="flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  ">
                <BiLogoTailwindCss className="text-[100px] text-blue-500 " />
                <h2 className="text-slate-900  font-semibold text-[20px]">
                  TailwindCSS
                </h2>
              </div>
              <div className="flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  ">
                <FaReact className="text-[100px] text-blue-500 " />
                <h2 className="text-slate-900  font-semibold text-[20px]">
                  ReactJs
                </h2>
              </div>

              <div className="flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer">
                <FaNode className="text-[100px] text-blue-500 " />
                <h2 className="text-slate-900  font-semibold text-[20px]">
                  NodeJs
                </h2>
              </div>
              <div className="flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  ">
                <SiExpress className="text-[100px] text-blue-500 " />
                <h2 className="text-slate-900  font-semibold text-[20px]">
                  ExpressJs
                </h2>
              </div>
              <div className="flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  ">
                <DiMongodb className="text-[100px] text-blue-500 " />
                <h2 className="text-slate-900  font-semibold text-[20px]">
                  mongoDb
                </h2>
              </div>
              <div className="flex flex-col items-center p-2 rounded-xl justify-center gap-1 shadow-2xl hover:bg-slate-200 cursor-pointer  ">
                <BsGithub className="text-[100px] text-blue-500 " />
                <h2 className="text-slate-900  font-semibold text-[20px]">
                  GitHub
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;




