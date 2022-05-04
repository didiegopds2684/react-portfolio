import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/diego-pedro-162496172/" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/didiegopds2684" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.instagram.com/diegoxpedro/" rel="noreferrer"><FaInstagram/></a>
        </div>
    );
}

export default HeaderSocials;