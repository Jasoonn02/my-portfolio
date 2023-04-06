import React from "react";
import videogame from "../Imágenes/videogames.jpg";
import simple from "../Imágenes/simpleservice.jpg";
import { BsGithub, BsEye } from "react-icons/bs";

export default function Proyectos() {
  return (
    <section className="my-12 flex flex-col items-center justify-center w-[80%] m-auto lg:flex-row">
      <div className="border-1 rounded-lg bg-white w-[100%]">
        <div className="m-2">
          <img src={simple} alt="" />
          <h4 className="font-bold my-2">SIMPLE SERVICE</h4>
          <article className="flex justify-between">
            <div className="grid grid-cols-5 items-center">
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">REACT.JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">REDUX-TOOLKIT</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">EXPRESS.JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">POSTGRESQL</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">SEQUELIZE</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">FIREBASE</span>
            </div>
            <div className="flex flex-nowrap text-xl">
              <a href="" className="px-2">
                <BsGithub/>
              </a>
              <a href="https://simpleservice-lemon.vercel.app/" className="px-2">
                <BsEye/>
              </a>
            </div>
          </article>
        </div>
      </div>
      <div className="border-1 rounded-lg bg-white mt-6">
        <div className="m-2">
          <img src={videogame} alt="" />
          <h4 className="font-bold my-2">VIDEOGAMES</h4>
          <article className="flex justify-between">
            <div className="flex flex-nowrap items-center">
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">REACT.JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">REDUX</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">EXPRESS.JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">POSTGRESQL</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">SEQUELIZE</span>
            </div>
            <div className="flex flex-nowrap text-xl">
              <a href="https://github.com/Jasoonn02/PI-Videogame" className="px-2">
                <BsGithub/>
              </a>
              <a href="" className="px-2">
                <BsEye/>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
    // <div className="p-6 text-center">
    //   <div>
    //     <h1 className="font-serif text-2xl mb-6">Proyecto Final</h1>
    //     <div className="flex justify-center">
    //       <a href="https://simpleservice-lemon.vercel.app/">
    //         <img className="rounded-md w-[300px]" src={simple} alt="" />
    //       </a>
    //     </div>
    //     <p className="mt-4 font-semibold">
    //       Éste fué el proyecto final de Henry, un E-commerce el cual se hizo de
    //       forma grupal, se logró aprobarlo y así graduarnos del bootcamp.
    //     </p>
    //   </div>
    //   <div className="mt-12">
    //     <h1 className="font-serif text-2xl mb-6">Proyecto Individual</h1>
    //     <div className="flex justify-center">
    //       <a href="https://github.com/Jasoonn02/PI-Videogame">
    //         <img className="rounded-md w-[300px]" src={videogame} alt="" />
    //       </a>
    //     </div>
    //     <p className="mt-4 font-semibold">
    //       Mi primer proyecto individual fué todo un desafío, se obtuvo todos los
    //       datos a través de una API externa de videojuegos para así mostrarlos
    //       en forma de cartas y poder acceder detalladamente a cada una de ellas
    //       con su respectiva información. También se pueden ordenar desde la A-Z,
    //       buscar por nombre, filtrar por género y rating.
    //     </p>
    //   </div>
    // </div>
  );
}
