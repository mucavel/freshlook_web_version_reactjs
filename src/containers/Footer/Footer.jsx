import React from "react";
import './css/Footer.css';
import FooterLinks from "../../components/FooterLinks/FooterLinks";
import Logo from "../../components/Logo/Logo";

const Footer = () => {

    let date = new Date();
    let year = date.getFullYear();

    return(
        <section id="footer">
            <div className="footerContainer">
                <div className="footerLogo">
                    <Logo />
                </div>
                <div className="footerLink">
                    <FooterLinks />
                </div>
            </div>
            <div className="developer">
                <p>Desenvolvedor - 
                    <span className="developerName"> Salvador Carlos Mucavele </span>
                    <span className="year">{'\u00A9'}{' '+year}</span>
                </p>
            </div>
        </section>
    );
}
export default Footer;