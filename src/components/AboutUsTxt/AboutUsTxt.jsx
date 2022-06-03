import React from "react";
import Logo from "../Logo/Logo";
import './css/AboutUsTxt.css';

const AboutUsTxt = () => {
    return(
        <>
            <div>
                <h3>Barbearia</h3>
                <Logo />
            </div>
            <div className="history">
                <p>
                A Barbearia Fresk Look surgiu em 2002. Graças aos nossos fieis clientes, 
                estamos já com mais de 20 anos de existência no mercado. Nesse perído, 
                reunimos os melhores profissionais do mercado! 
                Hoje somos umas das melhores Barbearias da região Sul de Moçambique
                e nos esforçamos sempre para fornecer os melhores serviços e garantir
                a total satisfação dos nossos Clientes.  
                </p>
            </div>
        </>
    );
}
export default AboutUsTxt;