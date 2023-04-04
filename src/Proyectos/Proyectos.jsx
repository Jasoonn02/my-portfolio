import React from "react";
import videogame from "../Imágenes/videogames.jpg";
import simple from "../Imágenes/simpleservice.jpg";

export default function Proyectos() {
  return (
    <div className="p-6 text-center">
      <div>
        <h1 className="font-serif text-2xl mb-6">Proyecto Final</h1>
        <div className="flex justify-center">
          <a href="https://simpleservice-lemon.vercel.app/">
            <img className="rounded-md w-[300px]" src={simple} alt="" />
          </a>
        </div>
        <p className="mt-4 font-semibold">
          Éste fué el proyecto final de Henry, un E-commerce el cual se hizo de
          forma grupal, se logró aprobarlo y así graduarnos del bootcamp.
        </p>
      </div>
      <div className="mt-12">
        <h1 className="font-serif text-2xl mb-6">Proyecto Individual</h1>
        <div className="flex justify-center">
          <a href="https://github.com/Jasoonn02/PI-Videogame">
            <img className="rounded-md w-[300px]" src={videogame} alt="" />
          </a>
        </div>
        <p className="mt-4 font-semibold">
          Mi primer proyecto individual fué todo un desafío, se obtuvo todos los
          datos a través de una API externa de videojuegos para así mostrarlos
          en forma de cartas y poder acceder detalladamente a cada una de ellas
          con su respectiva información. También se pueden ordenar desde la A-Z,
          buscar por nombre, filtrar por género y rating.
        </p>
      </div>
    </div>
  );
}
