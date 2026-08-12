'use client';

import React from 'react';

import './styles.css'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer>
            <a href="#header" className="footer__logo">{t.footer.logo}</a>
            <ul className="permalinks">
                {t.footer.links.map(({ label, href }) => (
                    <li key={href}><a href={href}>{label}</a></li>
                ))}
            </ul>

            <div className="footer__socials">
                <a href="https://www.instagram.com/diegoxpedro/" rel="noreferrer"><FaInstagram /></a>
                <a href="https://github.com/didiegopds2684" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/diego-pedro-santos/" rel="noreferrer"><FaLinkedin /></a>
            </div>

            <div className="footer__copyright">
                <small>{t.footer.copyright}</small>
            </div>
        </footer>
    );
}

export default Footer;
