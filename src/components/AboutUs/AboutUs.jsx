import React from "react";
import aboutImg from '../../images/about-us.webp';

const AboutUs = () => {
    return(
        <div className="about-us" id="about-us">
            <div className="about-txt"></div>
            <div className="about-img">
                <img src={aboutImg} alt="Acerca de nós"/>
            </div>
        </div>
    );
}
export default AboutUs;