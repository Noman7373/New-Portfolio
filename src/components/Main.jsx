import { useEffect } from "react";
import myImage from "../assets/personalimg.jpg";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <main className="flex min-h-screen lg:flex-row md:gap-5 xs:gap-10 bg-slate-50 flex-col py-[100px] pt-[120px] items-center font-poppins justify-around p-10">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex max-w-[700px] flex-col gap-5 md:w-[100%] sm:w-[100%] lg:w-[48%]"
        >
          <h1 className="font-bold text-blue-500 text-[15px] font-headerFont uppercase md:text-[35px] sm:text-[25px] xs:text-[22px]">
            Noman Ahmed
          </h1>
          <p className="text-[13px] text-slate-500 md:text-[22px] sm:text-[18px] xs:text-[17px] font-[400]">
            I am a passionate{" "}
            <strong className="text-slate-900">
              Mern Stack / Full Stack Web Developer
            </strong>
            , committed to delivering value and innovative solutions to
            businesses, organizations, and communities through my expertise in
            both front-end and back-end development, including proficiency in
            React.js, Node.js, Express.js and MongoDB.
          </p>

          <div className="flex gap-5 items-center">
            <Link
              aria-label="link to my projects page"
              className="border p-2 rounded text-[15px] md:text-[20px] border-blue-500 text-slate-50 font-[500] hover:text-slate-50 hover:bg-slate-700 bg-slate-900"
              to="/projects"
            >
              My Projects
            </Link>
            <Link
              aria-label="link to about me page"
              className="border p-2 rounded text-[15px] md:text-[20px] border-blue-500 text-slate-900 font-[500] hover:text-slate-50 hover:bg-slate-900"
              to="/about"
            >
              About Me
            </Link>
          </div>
        </div>
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          className="bg-blue-500 md:w-[100%] lg:w-[30%] sm:w-[100%]  transition shadow-2xl ease-in delay-100 rounded-lg"
          alt="Noman Ahmed"
          src={myImage}
        ></img>
      </main>
    </>
  );
};

export default Main;
