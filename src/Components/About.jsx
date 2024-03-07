import React from "react";
import '../styles/about.css';
import Me from '../assets/Snapchat-117772637.jpg';
const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="description">
                <h2>About Me</h2>
                <p>
                    Hello! My name is Joshua Eagan, i am currently a
                     21 year old living in central Michigan who is looking
                      to expand his horison by dipping into the developer 
                      world! 
                      I've been around the United States my whole life, 
                      from living in places like Maine when i was younger
                       to graduating highschool in Eugene Oregon.
                        I am constantly learning about something or 
                        another, from getting my pharmacy tech certification to taking a course for javascript, i wish to continue and learn as much as i can inorder to further my developer skills. Im mostly profecient in javascript and its MERN stack packages including things such as: SQL and NoSQL, Object Oriented Programing, Model View Controller method, Node, Express with some other niche things like progressive web apps. I am deemed as a dedicated developer with a nac of problem solving and am intrested in mostly the backend side of things when it comes to coding.  
                </p>
            </div>
            <div className="photo">
                <img src={Me} alt="Me"/>
            </div>
        </div>
    );
};

export default AboutMe;