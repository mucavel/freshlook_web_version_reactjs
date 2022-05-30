import React from "react";
import './css/Header.css';
import NavBar from "../../components/NavBar/NavBar";
import Greeting from "../../components/Greetings/Greeting";

class Header extends React.Component {
    render(){
        return(
            <section id="home">
                <div className="headerContainer">
                    <NavBar />
                    <Greeting />
                </div>
            </section>
        );
    }
}
export default Header;