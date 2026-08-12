'use client';

import React from 'react';

import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import IntegrationMap from "../IntegrationMap";
import './styles.css';

import {useLanguage} from "../../i18n/LanguageContext";

const Header = () => {
    const {t} = useLanguage();

    return (
        <header id="header">
            <div className="container header__container">
                <div className="header__text">
                    <p className="header__greeting">{t.header.greeting}</p>
                    <h1>{t.header.name}</h1>
                    <p className="header__role">{t.header.role}</p>
                    <p className="header__tagline">{t.header.tagline}</p>
                    <CTA/>
                    <HeaderSocials/>
                </div>

                <div className="header__map">
                    <IntegrationMap caption={t.header.mapCaption}/>
                </div>

                <a href="#contact" className="scroll__down">{t.header.scrollDown}</a>
            </div>
        </header>
    );
}

export default Header;
