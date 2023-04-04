import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({isOpen, toggle}) => {
    return(
        <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-blue-100 list-none" : "hidden"}
        onClick={toggle}>
        <li className="hover:text-sky-600 font-mono">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-sky-600 font-mono">
          <Link to="/about">Sobre Mí</Link>
        </li>
        <li className="hover:text-sky-600 font-mono">
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li className="hover:text-sky-600 font-mono">
          <Link to="/contacto">Contacto</Link>
        </li>
      </div>
    )
}

export default Dropdown