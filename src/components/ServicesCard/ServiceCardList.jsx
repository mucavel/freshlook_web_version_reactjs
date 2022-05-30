import React from "react";
import './css/ServicesCard.css';
import ServicesCard from "./ServicesCard";

const ServicesCardList = ({content}) => {
    return(
        <div className="cardsContainer" id="service">
            {
                content.map((cont, i) => {
                    return <ServicesCard   
                    key= {content[i].id} 
                    img={content[i].img} 
                    title={content[i].title} 
                    text={content[i].text}/>
                })
            }
        </div>
    );
}
export default ServicesCardList;