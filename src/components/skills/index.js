import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import css from "../../assets/css.svg";
import javascript from "../../assets/javascript.svg";
import Git from "../../assets/Git.svg";
import html from "../../assets/html.svg";
import nodejs from "../../assets/nodejs.svg";
import reactjs from "../../assets/reactjs.svg";
import tailwindcss from "../../assets/tailwindcss.svg";

const items = [
  {
    name: css,
    description: "logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: javascript,
    description: "logo",
    link: "https://www.javascript.com/",
  },
  {
    name: Git,
    description: "logo",
    link: "https://git-scm.com/",
  },
  {
    name: html,
    description: "logo",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: nodejs,
    description: "logo",
    link: "https://nodejs.org/en/docs/",
  },
  {
    name: reactjs,
    description: "logo",
    link: "https://pt-br.reactjs.org/",
  },
  {
    name: tailwindcss,
    description: "logo",
    link: "https://tailwindcss.com/",
  },
];

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className=" text-white  min-h-[90vh] grid"
    >
     
   
    <h1 className="text-[40px] font-bold pl-[100px] mt-20 ">Skills</h1>

      <h2 className="font-light text-[25px] pl-[100px] text-gray-400 ">Some of my skills:</h2>
      <div className="  flex-wrap flex justify-center">
        {items.map((item) => {
          return (
            <a
              href={item.link}
              key={item.name}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-offset="100"
              className=" flex justify-center w-[25%] items-center hover:bg-zinc-600  bg-zinc-500 rounded-3xl m-4 p-4 "
            >
              <button>
                <img
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-offset="100"
                  className="h-[100px]"
                  src={item.name}
                  alt={`${item.description} ${item.name}`}
                />
              </button>
            </a>
          );
        })}
      </div>
    </div>
  );
}
