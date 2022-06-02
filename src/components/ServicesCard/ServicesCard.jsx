import React from "react";
import './css/ServicesCard.css';

const ServicesCard = ({img, title, text}) => {
    return(
        <div className="serviceCard">
            <div className="servicesImg">
                <img src={img} alt="Serviço" />
            </div>
            <div className="servicesTitle">
                <h3>{title}</h3>
            </div>
            <div className="servicesParagraph">
                <p>{text}</p>
            </div>
        </div>
    );
}
export default ServicesCard;