import React from 'react'

import './styles.css'
import {useLanguage} from "../../i18n/LanguageContext";

const Experience = () => {
    const {t} = useLanguage();

    return (
        <section id="skills">
            <span className="section__eyebrow">{t.skills.eyebrow}</span>
            <h2>{t.skills.title}</h2>

            <div className="container skills__container">
                {
                    t.skills.categories.map((category) => (
                        <article className="skills__category" key={category.name}>
                            <h4 className="text-mono skills__category-name">{category.name}</h4>
                            <div className="skills__tags">
                                {category.items.map((item) => (
                                    <span className="skills__tag" key={item}>{item}</span>
                                ))}
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
}

export default Experience;
