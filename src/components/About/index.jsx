import React from 'react';
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsAward } from "react-icons/bs"

import './styles.css'
import Me from '../../assets/Diego_Pedro.webp'
import Resume from "../../assets/Diego_Pedro_dos_Santos_Resume.pdf"
import { useLanguage } from "../../i18n/LanguageContext";

const ICONS = [FaAward, BsAward, VscFolderLibrary];

const About = () => {
    const { t } = useLanguage();

    return (
        <section id="about">
            <span className="section__eyebrow">{t.about.eyebrow}</span>
            <h2>{t.about.title}</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="Diego Pedro dos Santos" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        {t.about.cards.map((card, index) => {
                            const Icon = ICONS[index];
                            return (
                                <article className="about__card" key={card.title}>
                                    <Icon className="about__icon" />
                                    <h5>{card.value}</h5>
                                    <small>{card.label}</small>
                                </article>
                            );
                        })}
                    </div>

                    <p>{t.about.bio}</p>

                    <a href="#contact" className="btn btn-primary">{t.about.ctaTalk}</a>
                    <a href={Resume} target="_blank" rel="noopener noreferrer" className="ml-2">{t.about.ctaResume}</a>
                </div>
            </div>
        </section>
    );
}

export default About;
