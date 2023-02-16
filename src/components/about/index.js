import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


export default function About() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div
    className=" pt-[160px] flex min-w-[80%] w-[90%] min-h-[90vh]"
    >
      <div className=" flex ">
        <div className="pl-4 font-light text-[15px] text-gray-400 ">
          <h1 className=" text-center text-[50px] font-bold text-teal-500">Hi! Im Marcos Gabriel.</h1>
       <div className="h-full w-full items-center flex">
          <p className="font-light text-[25px]">
            Student of information systems at the State University of Montes
            Claros (UNIMONTES), I am a fan of Web programming, especially when
            it comes to Front-End development. I am looking for my first
            professional experience in the field. See some of my{" "}
            <a href="#skills"className="text-blue-600 hover:underline">
              {" "}
              skills
            </a>{" "}
            and{" "}
            <a href="#projects" className="text-blue-600 hover:underline">
              projects
            </a>
            :
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
