import React from 'react';
import CvBr from "../../assets/Diego_CV.pdf";

const CTA = () => {
        return (
            <div className="cta">
                <a href={CvBr} download className="btn">Download CV</a>
                <a href="#contact" className="btn btn-primary">Fale comigo</a>
            </div>
        );
}

export default CTA;