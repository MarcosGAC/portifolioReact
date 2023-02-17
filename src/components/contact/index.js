import React, { useEffect } from "react";
import github from "../../assets/github.svg";
import lkd from "../../assets/linkedin.svg";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="mt-4  min-h-[90vh] grid pt-20"
    >
      <h1 className="text-[40px] text-white font-bold text-center">Contact</h1>
      <div className="flex">
        <div className="max-w-[40%]">
          <h2
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="100"
            className=" font-light text-[25px] text-gray-400  "
          >
            Want to contact me? Sure, send me a mail. You can
            find me on these platforms:
          </h2>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-offset="100"
          className="ml-[20%]"
        >
          <div className="flex items-center m-2  text-gray-200">
            <a href="https://github.com/zBigode" >
            <img
              className="max-h-[50px] max-w-[50px] m-2"
              src={github}
              alt="logo github"
            />
            </a>
            <a href="https://github.com/MarcosGAC" >
            <p className="text-2xl text-[25px] pl-4">GitHub</p>
            </a>
          </div>
          <div className="flex items-center m-2  text-gray-200">
          <a href="https://www.linkedin.com/in/marcos-gabriel-246b01207/" >
            <img
              className="max-h-[50px] max-w-[50px] m-2"
              src={lkd}
              alt="logo linkedin"
            />
            </a>
            <a href="https://www.linkedin.com/in/marcos-gabriel-246b01207/" >
            <p className="text-2xl text-[25px] pl-4">Linkedin</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
