import React from "react";
import './css/Adress.css';
import Map from "../../components/Map/Map";
import WorkTimes from "../../components/WorkTimes/WorkTimes";

const Adress = () => {
    return(
        <section id="adress">
            <div className="adressH2" id="contact">
                <h2>Localize-<span>Nos</span></h2>
            </div>
            <div className="contact">
                <Map />
                <WorkTimes />
            </div>
        </section>
    );
}
export default Adress;