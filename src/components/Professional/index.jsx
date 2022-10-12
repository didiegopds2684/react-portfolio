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
            "Estruturação e desenvolvimento de sistemas Backend usando PHP com Framework Laravel.",
            "Desenvolvimento de sites e sistemas Frontend usando React JS.",
            "Experiência em Docker (Criação e configuração de containers).",
            "Criação e manutenção de sistemas completos e personalizados.",
            "Partipação ativa no contato direto com cliente, sugerir melhores alternativas, e contribuir na modelagem dos projetos"
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
                        <div key={id} className="experience__dev">
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