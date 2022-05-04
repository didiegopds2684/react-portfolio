import React from 'react';

import './styles.css'
import {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const Footer = () => {
        return (
            <footer>
                <a href="#" className="footer__logo">Diego Pedro</a>
                
                <ul className="permalinks">
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">Sobre mim</a></li>
                    <li><a href="#experience">Expêriencia</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>

                <div className="footer__socials">
                    <a href="https://www.instagram.com/diegoxpedro/">{FaInstagram()}</a>
                    <a href="https://github.com/didiegopds2684">{FaGithub()}</a>
                    <a href="https://www.linkedin.com/in/diego-pedro-162496172/">{FaLinkedin()}</a>
                </div>

                <div className="footer__copyright">
                    <small>&copy; Diego Pedro. Todos direitos reservados.</small>
                </div>
            </footer>
        );
}

export default Footer;