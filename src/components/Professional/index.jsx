import React from "react";

import './styles.css'
import {MdArrowForwardIos} from "react-icons/all";
import {useLanguage} from "../../i18n/LanguageContext";

const Professional = () => {
    const {t} = useLanguage();

    return (
        <section id="professional">
            <span className="section__eyebrow">{t.professional.eyebrow}</span>
            <h2>{t.professional.title}</h2>
            <div className="container professional__container">
                <div className="timeline">
                    {
                        t.professional.jobs.map(({id, title, company, duration, items}) => (
                            <div key={id} className="timeline__item">
                                <div className="timeline__rail">
                                    <span className="timeline__dot"/>
                                </div>
                                <div className="timeline__body">
                                    <span className="timeline__duration text-mono">{duration}</span>
                                    <h3>{title}</h3>
                                    <span className="timeline__company f-itallic">{company}</span>
                                    <ul className="timeline__list">
                                        {items.map((item) => (
                                            <li key={item.slice(0, 24)}>
                                                <MdArrowForwardIos className="timeline__list-icon"/>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Professional;
