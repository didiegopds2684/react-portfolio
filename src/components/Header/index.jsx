import React from 'react';

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import './styles.css';

import Me from "../../assets/me.png";

const Header = () => {
        return (
            <header id="header">
                <div className="container header__container">
                    <h5>Olá, eu sou</h5>
                    <h1>Diego Pedro</h1>
                    <h5 className="text-light">Fullstack Developer</h5>
                    <CTA/>
                    <HeaderSocials />
                    <div className="me">
                        <img src={Me} alt="me"/>
                    </div>

                    <a href="#contact" className="scroll__down">Descer</a>
                </div>
            </header>
        );
}

export default Header;