import React from 'react';
import {useState} from "react";

import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";
import {VscFolderLibrary} from "react-icons/vsc";

import {useLanguage} from "../../i18n/LanguageContext";
import './styles.css';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#header')
    const {toggleLang, t} = useLanguage();

    const links = [
        {href: '#header', icon: <AiOutlineHome/>, label: t.nav.home},
        {href: '#about', icon: <AiOutlineUser/>, label: t.nav.about},
        {href: '#professional', icon: <BiBook/>, label: t.nav.professional},
        {href: '#skills', icon: <RiServiceLine/>, label: t.nav.skills},
        {href: '#portfolio', icon: <VscFolderLibrary/>, label: t.nav.portfolio},
        {href: '#contact', icon: <BiMessageSquareDetail/>, label: t.nav.contact},
    ];

    return (
        <nav>
            {links.map(({href, icon, label}) => (
                <a
                    key={href}
                    href={href}
                    onClick={() => setActiveNav(href)}
                    className={activeNav === href ? 'active' : ''}
                    aria-label={label}
                    title={label}
                >
                    {icon}
                </a>
            ))}
            <button
                type="button"
                className="nav__lang-toggle"
                onClick={toggleLang}
                aria-label={t.meta.langSwitchAria}
                title={t.meta.langSwitchAria}
            >
                {t.meta.langLabel}
            </button>
        </nav>
    );
}

export default Nav;
