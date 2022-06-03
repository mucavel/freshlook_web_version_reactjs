import React from "react";
import './css/Header.css';
import NavBar from "../../components/Navbar/Navbar";
import Greeting from "../../components/Greetings/Greeting";

const Header = () => {
    return(
        <section id="home">
            <div className="headerContainer">
                <NavBar />
                <Greeting />
            </div>
        </section>
    );
    }
export default Header;