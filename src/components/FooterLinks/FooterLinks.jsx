import React from "react";
import './css/FooterLinks.css';
import facebookIcon from '../../assets/images/facebook-icon.webp';
import whatsappIcon from '../../assets/images/whatsapp-icon.webp';
import instagramIcon from '../../assets/images/instagram-icon.webp';
import twitterIcon from '../../assets/images/twitter-icon.webp';

const FooterLinks = () => {
    return(
        <div className="footerLinks">
            <ul>
                <li><a href="#facebook"><img src={facebookIcon} alt="facebook" /></a></li>
                <li><a href="#whatsapp"><img src={whatsappIcon} alt="whatsapp" /></a></li>
                <li><a href="#instagram"><img src={instagramIcon} alt="instagram" /></a></li>
                <li><a href="#twitter"><img src={twitterIcon} alt="twitter" /></a></li>
            </ul>
        </div>
    );
}
export default FooterLinks;