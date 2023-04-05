import React from "react";
import landing from "../Imágenes/landing.jpg";
import resume from "../Imágenes/CVJasonValderrama.pdf"

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="mt-24 text-center md:-mt-48 lg:flex justify-between m-20 lg:mt-0">
        <div className="md:mt-72 lg:mt-52">
          <h1 className="text-5xl font-serif md:text-6xl lg:text-5xl xl:text-7xl">Jason Valderrama</h1>
          <h2 className="text-2xl font-serif md:ml-2 md:text-4xl lg:text-4xl">Full Stack Developer</h2>
        </div>
        <div className="flex justify-center mt-24 md:mt-12 lg:mt-28">
          <img className="rounded-full w-[250px] md:w-[400px] lg:w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]" src={landing} alt=""/>
        </div>
      </div>
      <div className="flex justify-center mt-28 md:mt-20 lg:mt-36">
        <button className="bg-white rounded-full p-1 hover:bg-green-200">
          <a className="font-serif" href={resume} download="CV-JasonValderrama">
            Descargar CV
          </a>
        </button>
      </div>
    </div>
  );
}
