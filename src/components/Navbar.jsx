import React, { useState } from "react";
import { AiFillTwitterCircle, AiOutlineMenu } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const navs = ["Home", "About", "Projects", "Contact"];
  const [showNav, setShowNav] = useState("right-[-1000px]");

  return (
    <>
      <nav className="fixed w-full bg-slate-50 overflow-x-hidden shadow-2xl flex flex-row justify-between py-[20px] z-[100] px-[30px]">
        <Link
          className="font-headerFont  font-bold text-black uppercase text-[25px]"
          to="/"
        >
          Noman Ahmed
        </Link>

        <div
          style={{ transition: "1s" }}
          className={` font-fonty fixed ${showNav} w-[50%] md:w- top-0 justify-center  md:static items-center bottom-0 md:px-0 md:py-0 py-[50px]  gap-[20px] px-[100px] flex flex-col md:flex-row  bg-slate-50 md:bg-0 rounded  shadow-xl md:shadow-none capitalize text-center `}
        >
          {navs.map((link) => {
            return (
              <Link
                key={link}
                aria-label={`link to ${link} page`}
                onClick={() => setShowNav("right-[-1000px]")}
                className={`link ${
                  pathname == `/${link}` ? "font-bold" : ""
                } text-slate-900 text-[15px] md:text-[20px] `}
                href={link == "home" ? "/" : link}
                to={`${
                  link == "About"
                    ? "/about"
                    : link == "Projects"
                    ? "/projects"
                    : link == "Home"
                    ? "/"
                    : "/contact"
                }`}
              >
                {link}
              </Link>
            );
          })}

          <hr />
          <div className="flex md:hidden gap-3 items-center">
            <a
              className="flex flex-row gap-2 items-center"
              aria-label="link to my github profile"
              href="https://github.com/Noman7373"
              target="_blank"
            >
              {" "}
              <BsGithub className="text-slate-900 hover:text-blue-500  bg-white shadow-2xl p-1 text-[30px] rounded-full " />{" "}
            </a>
            <a
              className="flex flex-row gap-2 items-center"
              aria-label="link to my linkedin profile"
              href="https://www.linkedin.com/in/noman7373/"
              target="_blank"
            >
              {" "}
              <BsLinkedin className="text-slate-900 hover:text-blue-500 rounded  bg-white shadow-2xl p-1 text-[30px]" />
            </a>
            <a
              className="flex flex-row gap-2 items-center"
              aria-label="link to my twitter profile"
              href="https://github.com/Noman7373"
              target="_blank"
            >
              {" "}
              <AiFillTwitterCircle className="text-slate-900 hover:text-blue-500 bg-white shadow-2xl p-1 text-[30px] rounded-full " />
            </a>
          </div>
        </div>

        <div className="relative z-10 flex md:hidden items-center ">
          {showNav == "right-[-1000px]" ? (
            <AiOutlineMenu
              onClick={() => setShowNav("right-0")}
              className="text-[30px] text-black hover:text-blue-500"
            />
          ) : (
            <FaXmark
              onClick={() => setShowNav("right-[-1000px]")}
              className="text-[30px] text-black hover:text-red-500"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
