import React from "react";
import './css/ComentsCard.css';

const ComentsCard = ({profilePic, coment, clientName}) => {
    return(
        <div className="comentCard">
            <div className="comentsProfile">
                <img src={profilePic} alt="Perfil" />
            </div>
            <div className="coment">
                <p>"{coment}"</p>
            </div>
            <div className="client">
                <p><b>-{clientName}-</b></p>
            </div>
        </div>
    );
}
export default ComentsCard;