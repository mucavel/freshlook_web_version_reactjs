import React, { useState } from "react";
import "./css/Navbar.css";
import Logo from "../Logo/Logo";

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <Logo />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#home">Início</a>
        <a href="#aboutUs">Acerca</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contacto</a>
        <a href="#formulario">Reserva</a>
      </div>
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </div>
  );
};
export default NavBar;
