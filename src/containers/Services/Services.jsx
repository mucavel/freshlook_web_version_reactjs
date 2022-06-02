import React from "react";
import './css/Services.css';
import { CardContent } from "../../assets/TextFiles/CardContent";
import ServicesCardList from "../../components/ServicesCard/ServiceCardList";


const Services = () => {
    return(
        <section id="services">
            <div className="servicesH2">
                <h2>Nossos <span>Serviços</span></h2>
            </div>
            <div className="servicesContainer">
                <ServicesCardList content={CardContent}/>
            </div>
        </section>
    );
}
export default Services;