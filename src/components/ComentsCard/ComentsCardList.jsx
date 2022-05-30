import React from "react";
import './css/ComentsCard.css';
import ComentsCard from "./ComentsCard";

const ComentsCardList = ({content}) => {
    const firstComents = content.map((coment, i) =>{
        return(
            <ComentsCard 
                key = {content[i].id}
                profilePic = {content[i].profilePic}
                coment = {content[i].coment}
                clientName = {content[i].clientName} 
            />
        );
    })
    return(
        <div>{firstComents}</div>
    );
}
export default ComentsCardList;