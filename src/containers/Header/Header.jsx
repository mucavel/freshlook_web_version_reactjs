import React from 'react';
import './css/Header.css';
import Navbar from '../../components/Navbar/Navbar';
import Greenting from '../../components/Greeting/Greeting';

const Header = () => {
    return(
        <header className='headerContainer'>
            <section className='fader'>
                <Navbar />
                <Greenting />
            </section> 
        </header>
    );
}
export default Header;
