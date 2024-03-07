import React from 'react';
import '../styles/resume.css';

const Resume = () => {
  const frontEndSkills = ["HTML", "CSS", "JavaScript", "React", "APIs", "Bootstrap", "Tailwind"];
  const backEndSkills = ["Node.js", "Express", "MongoDB", "SQL", "Jest", "MVC/ORM", "Progressive Web Apps"];

  return (
    <>
    <div className="resume">
      <div className="card">
        <h2>Front-end</h2>
        <ul>
          {frontEndSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="card">
        <h2>Back-end</h2>
        <ul>
          {backEndSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
    <div className="resume-download">
        <a href='' className='download-button'>
            Download Resume
        </a>
      </div>
    </>
  );
};

export default Resume;
