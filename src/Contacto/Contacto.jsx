import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export default function Contacto() {
  return (
    <div>
      <div className="mb-20">
        <h1 className="text-3xl font-serif text-center mt-12">Contacto</h1>
      </div>
      <div className="mt-8 grid grid-rows-3 place-items-center lg:grid-cols-3">
        <a href="https://www.linkedin.com/in/jason-valderrama-b50587221/">
          <h1 className="mt-12">
            <BsLinkedin size="60px" />
          </h1>
        </a>
        <a href="https://github.com/Jasoonn02">
          <h1 className="mt-12">
            <BsGithub size="60px" />
          </h1>
        </a>
        <a href="https://www.instagram.com/jason.valderrama/">
          <h1 className="mt-12">
            <BsInstagram size="60px" />
          </h1>
        </a>
      </div>
    </div>
  );
}
