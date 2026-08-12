'use client';

import React from 'react';

import './styles.css'
import {useLanguage} from "../../i18n/LanguageContext";
import {useReveal} from "../../hooks/useReveal";

const Portfolio = () => {
    const {t} = useLanguage();
    const [ref, isVisible] = useReveal();

    return (
        <section id="portfolio" ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="section__eyebrow">{t.portfolio.eyebrow}</span>
            <h2>{t.portfolio.title}</h2>

            <div className="container portfolio__container">
                {
                    t.portfolio.projects.map(({id, tag, title, description, stack, result, github, github2, demo}) => (
                        <article className="portfolio__item" key={id}>
                            <span className="portfolio__tag text-mono">{tag}</span>
                            <h3>{title}</h3>
                            <p className="portfolio__desc">{description}</p>
                            <span className="portfolio__stack text-mono">{stack}</span>
                            <p className="portfolio__result">{result}</p>

                            {(github || github2 || demo) && (
                                <div className="portfolio__item-cta">
                                    {github && <a href={github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>}
                                    {github2 && <a href={github2} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>}
                                    {demo && <a href={demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Demo</a>}
                                </div>
                            )}
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

export default Portfolio;
