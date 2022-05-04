import React from 'react';
import {FaAward} from "react-icons/fa";
import {VscFolderLibrary} from "react-icons/vsc";
import {BsAward} from  "react-icons/bs"

import './styles.css'
import Me from '../../assets/me-2.png'

const About = () => {
        return (
            <section id="about">
                <h5>Descubra</h5>
                <h2>Sobre mim</h2>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={Me} alt="Me"/>
                        </div>
                    </div>

                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className="about__icon"/>
                                <h5>Experiencia</h5>
                                <small>1+ anos com<br/> desenvolvimento</small>
                            </article>
                            <article className="about__card">
                                <BsAward className="about__icon"/>
                                <h5>Experiencia</h5>
                                <small>2+ anos com<br/> tecnologia</small>
                            </article>
                            <article className="about__card">
                                <VscFolderLibrary className="about__icon"/>
                                <h5>Projetos</h5>
                                <small>10+ projetos<br/> finalizados</small>
                            </article>
                        </div>

                        <p>
                            Profissional de 22 anos formado em Ciência da Computação pela UNIBH com experiência em
                            suporte técnico, redes, DevOps e Desenvolvimento Web.
                        </p>

                        <a href="#contact" className="btn btn-primary">Vamos conversar!</a>
                    </div>
                </div>
            </section>
        );
}

export default About;