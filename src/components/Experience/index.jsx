import React from 'react'

import './styles.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>Quais minhas habilidades</h5>
            <h2>Conhecimento técnico</h2>

            <div className="container experience__container">
                <div className="experience__dev">
                    <h1>Desenvolvimento</h1>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Avançado</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Avançado</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Laravel</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Wordpress</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>React JS</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>MySql</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__tech">
                    <h1>DevOps</h1>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>AWS</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>GCP</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Linux</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>CI / CD</h4>
                                <small className="text-light">Iniciante</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Docker</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Git</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;