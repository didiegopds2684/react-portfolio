import React from 'react';

import './styles.css'
import IMG1 from '../../assets/letmeask.png';
import IMG2 from '../../assets/controle.png';
import IMG3 from '../../assets/crud.png';
import IMG4 from '../../assets/gallery.png';

const data = [
    {
        id: 1,
        image: IMG1,
        title: "LetMe Ask",
        description: "Projeto feito em React JS junto da Rocketseat, com intuito de criar salas de bate papos com chaves publicas. " +
            "Foi usado Firebase para host da aplicação e autenticação do Google para validar os usuários",
        github: "https://github.com/didiegopds2684/letmeask-bootcamp/",
        github2: "",
        demo: "https://letmeask-ca358.web.app//"
    },
    {
        id: 2,
        image: IMG2,
        title: "Controle Financeiro",
        description: "Projeto simples feito em React JS, com intuito de fazer um controle de entradas e saidas armazenando as informações no Local Storage.",
        github: "https://github.com/didiegopds2684/controle-financeiro",
        github2: "",
        demo: "https://didiegopds2684.github.io/controle-financeiro/"
    },
    {
        id: 3,
        image: IMG3,
        title: "CRUD Spring Boot/ReactJS",
        description: "CRUD FullStack usando Java Spring Boot para Backend, React JS com Bootstrap para o FrontEnd e banco de dados MySql.",
        github: "https://github.com/didiegopds2684/fullstack-crud-backend",
        github2: "https://github.com/didiegopds2684/fullstack-crud-frontend",
        demo: "",
    },
    {
        id: 4,
        image: IMG4,
        title: "TailwindCSS Image Gallery",
        description: "Galeria de imagens estilizada com tailwind css consumindo a API publica do site Pixabay para mostrar, buscar e possibilitar o download de imagens",
        github: "https://github.com/didiegopds2684/tailwindcss-image-gallery",
        github2: "",
        demo: "https://didiegopds2684.github.io/tailwindcss-image-gallery/"
    }
]


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Meus projetos</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo, description, github2}) => (
                        <article className="portfolio__item" key={id}>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__desc">
                                <span>{description}</span>
                            </div>
                            <div className="portfolio__item-cta">
                                <a href={github} target="_blank" rel="noreferrer" className="btn">Github</a>
                                {github2 === "" ? "" : <a href={github2} target="_blank" rel="noreferrer" className="btn">Github Front</a>}
                                {demo === "" ? "" :
                                    <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary" rel="noreferrer">Demo</a>}

                            </div>
                        </article>
                    ))
                }

            </div>
        </section>
    );
}

export default Portfolio;