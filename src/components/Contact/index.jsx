'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import './styles.css'
import { useLanguage } from "../../i18n/LanguageContext";
import { useReveal } from "../../hooks/useReveal";

const Contact = () => {
    const { t } = useLanguage();
    const form = useRef()
    const [revealRef, isVisible] = useReveal();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sdenilb', 'template_ihic0ef', form.current, '5KSmBWByyWSlwXBlj')
            .then(() => {
                alert(t.contact.form.success)
                e.target.reset();
            }, (error) => {
                console.log(error)
                alert(t.contact.form.error)
            });
    };

    const whatsappHref = `https://api.whatsapp.com/send?phone=5531995651680&text=${encodeURIComponent(t.contact.whatsapp.message)}`;

    return (
        <section id="contact" ref={revealRef} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="section__eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.title}</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__icon" />
                        <h3>{t.contact.email.label}</h3>
                        <h4>{t.contact.email.value}</h4>
                        <a href={`mailto:${t.contact.email.value}`}>{t.contact.email.cta}</a>
                    </article>
                    <article className="contact__option">
                        <BsLinkedin className="contact__icon" />
                        <h3>{t.contact.linkedin.label}</h3>
                        <h4>{t.contact.linkedin.value}</h4>
                        <a href="https://www.linkedin.com/in/diego-pedro-santos/" rel="noreferrer">
                            {t.contact.linkedin.cta}
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__icon" />
                        <h3>{t.contact.whatsapp.label}</h3>
                        <h4>{t.contact.whatsapp.value}</h4>
                        <a href={whatsappHref} rel="noreferrer">{t.contact.whatsapp.cta}</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder={t.contact.form.name} required />
                    <input type="email" name="email" placeholder={t.contact.form.email} required />
                    <textarea name="message" placeholder={t.contact.form.message} rows="7" required />
                    <button type="submit" className="btn btn-primary">{t.contact.form.submit}</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
