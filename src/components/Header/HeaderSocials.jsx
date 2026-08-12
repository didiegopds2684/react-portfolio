import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/diego-pedro-santos/" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin /></a>
            <a href="https://github.com/didiegopds2684" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.instagram.com/diegoxpedro/" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
        </div>
    );
}

export default HeaderSocials;