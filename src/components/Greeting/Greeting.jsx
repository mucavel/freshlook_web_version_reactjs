import React from "react";
import './css/Greeting.css';

const Greenting = () => {
    return(
        <div className="greetingContainer">
            <div className="greetings">
                <h3>Bem-Vindo a Barbearia</h3>
                <h2>Fresk Look</h2>
            </div>
            <div className="intro">
                <p>
                    Estamos felizes em tê-lo aqui.
                    Esta pronto para renovar seu looK?
                    Então, faça já a sua reserva!
                </p>
            </div>
            <div className="reservar">
                <button>
                    <a href="#formulario">Fazer Reserva</a>
                </button>
            </div>
        </div>
    );
}
export default Greenting;