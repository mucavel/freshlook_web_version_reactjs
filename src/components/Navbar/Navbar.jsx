import React from "react";
import './css/NavBar.css';
import Logo from "../Logo/Logo";
import NavBarLinks from "../NavBarLinks/NavBarLinks";

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <Logo />
            </div>
            <div className="navbarLinks">
                <NavBarLinks />
            </div>
        </div>
    );
}
export default NavBar;