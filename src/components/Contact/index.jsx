import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


import {MdOutlineEmail} from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import './styles.css'

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sdenilb', 'template_ihic0ef', form.current, '5KSmBWByyWSlwXBlj')
            .then((result) => {
                alert('Email enviado com sucesso')
                e.target.reset();
            }, (error) => {
                alert('Houve um erro tente novamente mais tarde')
            });
    };

    return (
        <section id="contact">
            <h5>Mantenha contato</h5>
            <h2>Comigo</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__icon"/>
                        <h4>Email</h4>
                        <h5>diegoxdavi@gmail.com</h5>
                        <a href="mailto:diegoxdavi@gmail.com">Envie uma mensagem</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__icon"/>
                        <h4>Linkedin</h4>
                        <h5>Diego Pedro</h5>
                        <a href="https://www.linkedin.com/in/diego-pedro-162496172/" rel="noreferrer">Envie uma
                            mensagem</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+55 31 9 99565-1680</h5>
                        <a href="https://api.whatsapp.com/send?phone=5531995651680&text=Ol%C3%A1%2C%20vi%20o%20seu%20site%20e%20tenho%20interesse%20de%20conversar%20com%20voc%C3%AA."
                           rel="noreferrer">Envie uma mensagem</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Seu nome completo" required/>
                    <input type="email" name="email" placeholder="Seu email" required/>
                    <textarea name="message" placeholder="Sua mensagem" rows="7" required/>
                    <button type="submit" className="btn btn-primary">Enviar mensagem</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;