import React from "react";

import './styles.css'
// import {BsListNested} from "react-icons/all";
import {MdArrowForwardIos} from "react-icons/all";

const data = [
    {
        id: 1,
        title: "Developer Web Full Stack",
        company: "Verticis Web Studio",
        duration: "10/2021 - atualmente",
        items: [
            "Desenvolvimento Backend com uso de PHP Laravel.",
            "Desenvolvimento Frontend Java Script usando React,HTML, CSS, Bootstrap.",
            "Criação e manutençao de sites completos e personalizados."
        ]
    },
    {
        id: 2,
        title: "Developer PHP",
        company: "Agência Curinga",
        duration: "07/2021 - 10/2021",
        items: [
            "Desenvolvimento Web com uso de PHP, Java Script, HTML, CSS, Bootstrap.",
            "Criação de landing pages.",
            "Criação e manutenção de sites com WordPress temas com código."
        ]
    },
    {
        id: 3,
        title: "DevOps Engineer",
        company: "Beltech",
        duration: "02/2020 - 06/2021",
        items: [
            "Trabalhar com melhorias constantes nas operações de servidores para maximizar a eficiência e segurança",
            "Participação na criação de ferramentas de automação e gerenciamento e organização de documentações e processos.",
            "Instalação e configuração de hardware e software mantendo os servidores internos em nuvem operando.",
            "Gerenciamento de servidores, aplicações, bancos dedados direcionamento de rede no Google CloudPlatform e AWS.",
        ]
    },
    {
        id: 4,
        title: "Estagiário de Suporte de TI",
        company: "Fideleasy/Beltech",
        duration: "12/2019 – 07/2020",
        items: [
            "Suporte de infraestrutura, técnico e de sistema atuando no Brasil presencialmente e na Bélgica e Luxemburgo com acesso remoto.",
            "Configuração de ativos para colaboradores.",
            "Gestão de recursos tecnológicos.",
            "Documentação de processos de suporte.",
            "Gerenciamento de redes, firewall, VPN."
        ]
    },
]

const Professional = () => {
    return (
        <section id="professional">
            <h5>Quais minhas</h5>
            <h2>Experiências profissionais</h2>
            <div className="container professional__container">
                {
                    data.map(({id, title, company, duration, items}) => (
                        <div className="experience__dev" id={id}>
                            <div className="professional__title-container">
                                <div className="professional__title">
                                    <h1>{title}</h1>
                                    <h2 className="f-itallic"> {company}</h2>
                                </div>
                                <h2 className="f-itallic">
                                    {duration}
                                </h2>
                            </div>
                            <article className="professional__article">
                                {items.map((item) => (
                                    <span><MdArrowForwardIos/> {item}</span>
                                ))}
                            </article>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Professional;