import React from "react";
import './css/Coments.css';
import { ComentsList } from './ComentsList';
import ComentsCard from "../../components/ComentsCard/ComentsCard";

const Coments = () => {
    return(
        <section id="Coments">
            <div className="comentsContainer" id="coments">
                <div className="comentsH2">
                    <h2>Comentários dos <span>nossos Clientes</span></h2>
                </div>
                <div className="slider reveal">
                    <div className="coment-slide coment_part-one">
                        <ComentsCard key = {ComentsList[0].id} profilePic = {ComentsList[0].profilePic}
                        coment = {ComentsList[0].coment} clientName = {ComentsList[0].clientName}/>

                        <ComentsCard key = {ComentsList[1].id} profilePic = {ComentsList[1].profilePic}
                        coment = {ComentsList[1].coment} clientName = {ComentsList[1].clientName}/>
                    </div>
                    <div className="coment-slide coment_part-two">
                        <ComentsCard key = {ComentsList[2].id} profilePic = {ComentsList[2].profilePic}
                        coment = {ComentsList[2].coment} clientName = {ComentsList[2].clientName}/>
                        
                        <ComentsCard key = {ComentsList[3].id} profilePic = {ComentsList[3].profilePic}
                        coment = {ComentsList[3].coment} clientName = {ComentsList[3].clientName}/>
                    </div>
                    <div className="coment-slide coment_part-three">
                        <ComentsCard key = {ComentsList[4].id} profilePic = {ComentsList[4].profilePic}
                        coment = {ComentsList[4].coment} clientName = {ComentsList[4].clientName}/>
                        
                        <ComentsCard key = {ComentsList[5].id} profilePic = {ComentsList[5].profilePic}
                        coment = {ComentsList[5].coment} clientName = {ComentsList[5].clientName}/>
                    </div>
                    <div className="coment-slide coment_part-four">
                        <ComentsCard key = {ComentsList[6].id} profilePic = {ComentsList[6].profilePic}
                        coment = {ComentsList[6].coment} clientName = {ComentsList[6].clientName}/>
                        
                        <ComentsCard key = {ComentsList[7].id} profilePic = {ComentsList[7].profilePic}
                        coment = {ComentsList[7].coment} clientName = {ComentsList[7].clientName}/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Coments;