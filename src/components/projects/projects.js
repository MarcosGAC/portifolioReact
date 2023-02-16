import pokedex from "../../assets/pokedex.png";
import netflix from "../../assets/netflix.png";
import NLW from "../../assets/NLW.png";
import CardProject from "../cardProject";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Projects(props) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="mt-20 text-white  min-h-[100vh]">
      <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
        <h1 className="text-[40px] font-bold pt-20">Projects</h1>
        <p className="font-light text-[25px] text-gray-400 ">
          My recent projects
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  mt-20 gap-5">
        <CardProject
          name="A project based in netflix to train react Rooks"
          img={netflix}
          link={"https://estudo-net-flix.vercel.app/"}
        />
        <CardProject
          name="Project developed for housing management"
          img={NLW}
          link={"https://habits-web-ten.vercel.app/"}
        />
        <CardProject
          name="A pokédex created with Reactjs to practice"
          img={pokedex}
          link={"https://pokedex-pokeapi-two.vercel.app/"}
        />
        <CardProject name="shortly" />
      </div>
    </div>
  );
}
