import React from 'react';
import './styles.css';
import {BiCheck} from "react-icons/bi";

const Services = () => {
        return (
            <section id="services">
                <h5>O que eu ofereço</h5>
                <h2>Serviços</h2>

                <div className="container services__container">
                    <article className="service">
                        <div className="service__head">
                            <h3>Desenvolvimento Web</h3>
                        </div>
                        <ul className="service__list">
                            <li>
                                <BiCheck className="service__list-icon"/>
                                <p>Desenvolvimento de sites</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon"/>
                                <p>Completamente responsivos</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon"/>
                                <p>Personalizados</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon"/>
                                <p>Lojas virtuais</p>
                            </li>
                            <li>
                                <BiCheck className="service__list-icon"/>
                                <p>Landing Pages</p>
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
        );
}

export default Services;