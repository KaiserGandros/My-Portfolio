import React from "react";
import '../styles/portfolio.css';
import jate from '../assets/jate.png';
import NPE from '../assets/NPE2.png';
import notetaker from '../assets/notetaker.png'
import SNB from '../assets/insomnia.png';
import SVG from '../assets/logo4.svg';
import Markdown from '../assets/markdown.png';

const portfolioItems = [
    {
        id: 1,
        title: 'National Park Explorer',
        image: NPE,
        github: 'https://github.com/ANelson44/national-park-explorer'
    },
    {
        id: 2,
        title: 'Social Network Backend',
        image: SNB,
        github: 'https://github.com/KaiserGandros/18-socialapi'
    },
    {
        id: 3,
        title: 'PWA Text Editor',
        image: jate,
        github: 'https://github.com/KaiserGandros/JATE'
    },
    {
        id: 4,
        title: 'SVG-Generator',
        image: SVG,
        github: 'https://github.com/KaiserGandros/SVG-Generator'
    },
    {
        id: 5,
        title: 'Note Taker',
        image: notetaker,
        github: 'https://github.com/KaiserGandros/Note-maker-app'
    },
    {
        id: 6,
        title: 'Readme Generator',
        image: Markdown,
        github: 'https://github.com/KaiserGandros/Readme-Generator'
    }
]

const Portfolio = () => {
    return (
        <div className="portfolio">
            {portfolioItems.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.image} alt={item.title}/>
                    <div className="card-body">
                        <h3>{item.title}</h3>
                        <a href={item.github} target="_blank" rel="noopener noreferrer">Github Repo</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Portfolio;