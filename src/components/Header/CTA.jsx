import React from 'react';
import Resume from "../../assets/Diego_Pedro_dos_Santos_Resume.pdf";
import {useLanguage} from "../../i18n/LanguageContext";

const CTA = () => {
    const {t} = useLanguage();

    return (
        <div className="cta">
            <a href={Resume} download className="btn">{t.header.ctaDownload}</a>
            <a href="#contact" className="btn btn-primary">{t.header.ctaContact}</a>
        </div>
    );
}

export default CTA;
