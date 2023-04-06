import React from "react";
import videogame from "../Imágenes/videogames.jpg";
import simple from "../Imágenes/simpleservice.jpg";
import { BsGithub, BsEye } from "react-icons/bs";

export default function Proyectos() {
  return (
    <section className="my-12 flex flex-col items-center justify-center px-8 m-auto lg:flex-row">
      <div className="border-1 rounded-lg bg-white">
        <div className="m-2">
          <img src={simple} alt="" />
          <h4 className="font-bold my-2">SIMPLE SERVICE</h4>
          <article className="flex justify-between">
            <div className="grid grid-cols-2 items-center">
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700 my-1">JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">REACT.JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">REDUX-TOOLKIT</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">EXPRESS.JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700 my-1">POSTGRESQL</span>
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
            <div className="grid grid-cols-2 items-center">
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700 my-1">JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">REACT.JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700 my-1">REDUX</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700">EXPRESS.JS</span>
            <span className="text-[12px] bg-slate-200 rounded-lg px-2 mr-2 text-slate-700 my-1">POSTGRESQL</span>
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
  );
}
