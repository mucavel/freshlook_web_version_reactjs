import React from "react";
import './css/Coments.css';
import { ComentsList } from './ComentsList';
import ComentsCardList from "../../components/ComentsCard/ComentsCardList";

const Coments = () => {
    return(
        <section id="Coments">
            <div className="ComentsContainer" id="coments">
                <div className="comentsH2">
                    <h2>Comentários dos <span>nossos Clientes</span></h2>
                </div>
                <div>
                    <ComentsCardList content={ComentsList}/>
                </div>
            </div>
        </section>
    );
}
export default Coments;