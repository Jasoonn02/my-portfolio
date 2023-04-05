import React from "react";
import { Link } from "react-router-dom";

export default function NavBar({toggle}) {
  return (
    <nav className="flex justify-end shadow-md md:justify-center">
      <div className="hidden md:flex right-0 list-none space-x-16 my-12">
        <li className="hover:text-sky-100">
          <Link to="/" className="xl:text-[20px]">Home</Link>
        </li>
        <li className="hover:text-sky-100">
          <Link to="/about" className="xl:text-[20px]">Sobre Mí</Link>
        </li>
        <li className="hover:text-sky-100">
          <Link to="/proyectos" className="xl:text-[20px]">Proyectos</Link>
        </li>
        <li className="hover:text-sky-100">
          <Link to="/contacto" className="xl:text-[20px]">Contacto</Link>
        </li>
        <br />
      </div>
      <div className="my-4 pr-8 cursor-pointer md:hidden"
      onClick={toggle}>
        <svg className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
}
