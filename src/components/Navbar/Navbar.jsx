import React from "react";
import './css/Navbar.css';

const Navbar = () => {
    return(
        <div className="navbarContainer" id="home">
            <nav className="navbar">
                <div className="logo">
                    <h1>Fresk Look</h1>
                </div>
                <div className="links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about-us">Acerca</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="#contact">Contacto</a></li>
                        <li><a href="#formulario">Reserva</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;