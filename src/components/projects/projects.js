import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CardProject from "../cardProject";

export default function Projects(props) {

  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
      fetch('https://my-json-server.typicode.com/MarcosGAC/projetos-api/projetos')
          .then(resposta => resposta.json())
          .then(dados => {
              setProjetos(dados)
          })
  }, [])


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
       {projetos.map(projeto =>{
        return(
          <CardProject name={projeto.name} img={projeto.img} link={projeto.link} key={projeto.id}/>
        )
       })}
      </div>
    </div>
  );
}
