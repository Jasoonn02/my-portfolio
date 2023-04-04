import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Proyectos from "./Proyectos/Proyectos";
import Contacto from "./Contacto/Contacto";
import Dropdown from "./Dropdown/Dropdown";
import NavBar from "./NavBar/NavBar";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen)
  };

  useEffect(()=>{
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", hideMenu)

    return () =>{
      window.removeEventListener("resize", hideMenu)
    }
  })



  return (
    <BrowserRouter>
      <div className="App">
        <NavBar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
