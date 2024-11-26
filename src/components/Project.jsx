import homemartStyle from "../assets/home-decor.png";
import expenseTraker from "../assets/expense.png";
import bankApp from "../assets/bankapp.png";
import { useEffect } from "react";
import Aos from "aos";
import { Link } from "react-router-dom";
import { GiLinkedRings } from "react-icons/gi";
import { AiFillGithub } from "react-icons/ai";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projectItems = [
    {
      ProjectImg: homemartStyle,
      projectName: "HOMEMART STYLE",
      ProjectDescr:
        "HOMEMART STYLE is a dedicated e-commerce platform specializing in furniture, offering a diverse range suitable for both homes and offices. the website ensures a seamless shopping experience, enabling users to explore an extensive catalog of furniture items. Users can conveniently add items to their shopping cart and create a personalized wishlist. The cart utilizes local storage for efficient item management. Additionally, a powerful search feature assists users in locating specific products. Notably, the website features a robust authentication system, allowing only authenticated users to access the checkout process.",
      projectStack: [" React", "Redux Toolkit", "Tailwindcss"],
      ProjectGit: "github.com/Noman7373/HOMEMART-STYLE",
      ProjectUrl: "homemart-style-mart.onrender.com/",
      label: "link to HomeMart Style",
    },
    {
      ProjectImg: bankApp,
      projectName: "BANKING APP",
      ProjectDescr:
        "A Banking App is a mobile or web-based application that allows users to manage their personal or business financial transactions, accounts, and other banking services in a secure and user-friendly environment. The goal of this project is to provide users with the ability to manage their bank accounts, view transaction history, transfer funds, and perform other common banking tasks, all through an intuitive and accessible interface..",
      projectStack: [" React", "Tailwindcss", "Redux Toolkit"],
      ProjectGit: "github.com/Noman7373/Banking-App",
      ProjectUrl: "fintrackexpensetrackhq.netlify.app/",
      label: "link to Banking App",
    },
    {
      ProjectImg: expenseTraker,
      projectName: "Expense Traker",
      ProjectDescr:
        "The Expense Tracker App is a personal finance management tool designed to help users track their income, expenses, and overall financial health. Developed by [Noman Ahmed], this app empowers users to manage their finances by providing them with clear visibility into their spending habits, budgeting, and financial goals. The app is built with a focus on simplicity, ease of use, and security, allowing users to take control of their financial journey and make informed decisions about saving, spending, and budgeting.",
      projectStack: ["React", "Tailwindcss"],
      ProjectGit: "github.com/Noman7373/Expense-Tracker-App",
      ProjectUrl: "fintrackexpensetrackhq.netlify.app/",
      label: "link to Lorddube logistics energy",
    },
  ];

  return (
    <>
      <div className="py-[100px] font-poppins pt-[150px] bg-slate-50 overflow-x-hidden px-[20px]">
        <div data-aos="fade-up" className="text-center">
          <h1 className="uppercase text-blue-500 font-bold font-headerFont text-[25px] md:text-[50px]">
            My Projects
          </h1>
          <p className="text-[15px] md:text-[25px] text-slate-700 font-semibold">
            Take A Look At The Some Of The Project That I Built
          </p>
        </div>
        <div className="mt-[50px] flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-[50px] ">
            {projectItems.map((project, index) => {
              return (
                <div
                  data-aos="fade-up"
                  className="flex flex-col h-full justify-center  bg-white gap-2 p-5 rounded shadow-2xl"
                  key={index}
                >
                  <div>
                    <img
                      className="shadow rounded"
                      src={project.ProjectImg}
                      alt={project.projectName}
                    />
                  </div>
                  <div className=" flex flex-col gap-4">
                    <h1 className="font-bold uppercase text-slate-900 text-[25px]">
                      {project.projectName}
                    </h1>
                    <p className="text-slate-700  text-[12px] md:text-[15px] text-wrap">
                      {" "}
                      {project.ProjectDescr}
                    </p>
                    <b className="text-slate-900 mb-[-15px] ">TOOLS: </b>
                    <p className=" flex  flex-row gap-[2px] p-1 shadow rounded items-center">
                      {" "}
                      {project.projectStack.map((stack) => {
                        return (
                          <span
                            className={`md:text-[15px] text-[12px] font-semibold text-slate-700   rounded w-full text-center  capitalize`}
                          >
                            {" "}
                            {stack}
                          </span>
                        );
                      })}{" "}
                    </p>
                    <div className="flex gap-3 items-center">
                      <a
                        aria-label={project.label}
                        className="bg-blue-500 text-center flex items-center justify-center gap-2 w-full hover:bg-slate-900 capitalize text-slate-50 p-1 px-3 rounded text-[20px]"
                        href={`https://${project.ProjectUrl}`}
                        target="_blank"
                      >
                        Live <GiLinkedRings />
                      </a>
                      <a
                        aria-label={project.label}
                        className="flex w-full justify-center gap-2 items-center hover:bg-slate-900 hover:text-slate-50 text-slate-900 p-1 px-3 border text-[20px] rounded"
                        href={`https://${project.ProjectGit}`}
                        target="_blank"
                      >
                        code <AiFillGithub />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Link
          aria-label="link to more projects"
          className="flex my-[40px] font-bold capitalize justify-center gap-2 items-center hover:bg-slate-900 hover:text-slate-50 text-slate-900 p-1 px-3 border text-[20px] rounded"
          href="/more-projects"
        >
          View more projects
        </Link>
      </div>
    </>
  );
};

export default Project;
