import React from "react";
import './css/Greeting.css';
import Logo from "../Logo/Logo";

const Greeting = () => {
    return(
        <div className="greetings">
            <div className="greeting-titles">
                <h2>Bem-Vindo à Barbaearia</h2>
                <Logo />
            </div>
            <div className="greeting-txt">
                <p>
                    Estamos felizes em tê-lo aqui. Esta pronto para renovar seu looK?
                    Então, faça já a sua reserva! 
                </p>
            </div>
            <div className="greeting-btn-container">
                <button className="btn-reserv">
                    <a href="#form">Faça sua Reserva</a>
                </button>
            </div>
        </div>
    );
}
export default Greeting;