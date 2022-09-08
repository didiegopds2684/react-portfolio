import React from 'react';

import './styles.css'
import IMG1 from '../../assets/letmeask.png';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';

const data = [
    {
        id: 1,
        image: IMG1,
        title: "LetMe Ask",
        description: "Projeto feito em React JS junto da Rocketseat, com inuito de criar salas de bate papos com chaves publicas. " +
            "Foi usado Firebase para host da aplicação e autenticação do Google para validar os usuários",
        github: "https://github.com/didiegopds2684/letmeask-bootcamp/",
        demo: "https://letmeask-ca358.web.app//"
    },
    // {
    //     id: 2,
    //     image: IMG2,
    //     title: "Titulo 02",
    //     github: "https://github.com/",
    //     demo: "https://github.com/"
    // },
    // {
    //     id: 3,
    //     image: IMG3,
    //     title: "Titulo 03",
    //     github: "https://github.com/",
    //     demo: "https://github.com/"
    // },
]


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>Meus projetos</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo, description}) => (
                        <article className="portfolio__item" key={id}>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__desc">
                                <span>{description}</span>
                            </div>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn">Github</a>
                                <a href={demo} className="btn btn-primary" rel="noreferrer">Demo</a>
                            </div>
                        </article>
                    ))
                }

            </div>
        </section>
    );
}

export default Portfolio;