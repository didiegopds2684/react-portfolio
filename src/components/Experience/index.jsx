import React from 'react'

import './styles.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {

    const items = [
        {
            name: "HTML",
            level: "Avançado"
        },
        {
            name: "CSS",
            level: "Avançado"
        },
        {
            name: "Vanilla JavaScript",
            level: "Avançado"
        },
        {
            name: "React JS",
            level: "Intermediário"
        },
        {
            name: "Node JS",
            level: "Iniciante"
        },
        {
            name: "Bootstrap",
            level: "Intermediário"
        },
        {
            name: "Tailwind CSS",
            level: "Iniciante"
        },
        {
            name: "Vanilla PHP",
            level: "Intermediário"
        },
        {
            name: "PHP Laravel",
            level: "Intermediário"
        },
        {
            name: "WordPress",
            level: "Iniciante"
        },
        {
            name: "Vanilla Java",
            level: "Iniciante"
        },
        {
            name: "Spring Boot Java",
            level: "Iniciante"
        },
        {
            name: "Linux",
            level: "Intermediário"
        },
        {
            name: "GIT",
            level: "Intermediário"
        },
        {
            name: "Docker",
            level: "Intermediário"
        },
        {
            name: "AWS",
            level: "Intermediário"
        },
        {
            name: "GCP",
            level: "Intermediário"
        },
        {
            name: "CI/CD",
            level: "Iniciante"
        },
        {
            name: "Kubernetes",
            level: "Iniciante"
        },
        {
            name: "Redes",
            level: "Intermediário"
        },


    ]

    return (
        <section id="experience">
            <h5>Quais minhas habilidades</h5>
            <h2>Conhecimento técnico</h2>

            <div className="container experience__container">
                <div className="experience__dev">
                    <div className="experience__content">
                        {
                            items.map((item, index) => (
                                <article className="experience__details" key={index}>
                                    <BsPatchCheckFill className="experience__details-icon"/>
                                    <div>
                                        <h4>{item.name}</h4>
                                        <small className="text-light">{item.level}</small>
                                    </div>
                                </article>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;