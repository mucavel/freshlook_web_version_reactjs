import React from "react";
import './css/NavBarLinks.css';
import AparenceToggle from '../../images/moon.webp';

const NavBarLinks = () => {
    return(
        <ul className="links">
            <li><a href="#home">Início</a></li>
            <li><a href="#aboutUs">Acerca</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#form">Reserva</a></li>
            <li><img src={AparenceToggle} alt="Dark/Light" /></li>
        </ul>
    );
}
export default NavBarLinks;