import React from "react";
import './css/AboutUs.css';
import AboutUsTxt from "../../components/AboutUsTxt/AboutUsTxt";

const AboutUs = () => {
    return(
        <section id="aboutUs">
            <div className="aboutUsH2">
                <h2>Acerca de <span>Nós</span></h2>
            </div>
            <div className="aboutUsContainer">
                <div className="about-txt">
                    <AboutUsTxt />
                </div>
                <div className="about-img"></div>
            </div>
        </section>
    );
}
export default AboutUs;