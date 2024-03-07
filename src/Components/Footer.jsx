import React from "react";
import '../styles/footer.css';
import github from '../assets/25231.png';
import linkedin from '../assets/circle-linkedin-512.png';
import sof from '../assets/768px-Stack_Overflow_icon.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <a href="https://github.com/KaiserGandros" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub"/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn"/>
                </a>
                <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
                    <img src={sof} alt="LinkedIn"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;