import React from "react";
import './css/WorkTimes.css';

const WorkTimes = () => {
    return(
        <div className="workTimes">
            <div className="fader">
                <h3>Nosso endereço</h3>
                <p>Avenida Mao Tse Tung, Nº 412, Maputo</p>
                <p>
                    <span style={{color: 'white', textDecoration: 'none'}}>
                        Telefone: {'(+258) 845509796'}
                    </span>
                </p>
                <h3>Horários</h3>
                <p>Segunda à Sexta-feira</p>
                <p>Das 08:00 às 21:30</p>
                <p>Finais de semana</p>
                <p>Das 09:00 às 18:30</p>
            </div>    
        </div>
    );
}
export default WorkTimes;