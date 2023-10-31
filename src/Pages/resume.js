import React from 'react';
import './resume.css';
import resumeDoc from "../assets/app-images/resume.pdf";


export default function Resume() {
    return (
        <div>
            <h2 id="resume" className="resume-title">Resume & Skill Set</h2>
            <p>
                Click {" "}
                <span>
                    <a href={resumeDoc} target="_blank" rel="noreferrer" className='emoji'>📄</a>
                </span>{" "}
                to download a pdf of my resume.
            </p>
                <p>HTML &#x2022; CSS &#x2022; JavaScript &#x2022; jQuery &#x2022; React &#x2022; Tailwind &#x2022; Bootstrap &#x2022; Adobe Photoshop</p>
                <p className='add-space'>MySQL &#x2022; MongoDB &#x2022; APIs &#x2022; Node.js &#x2022; Express &#x2022; Sequelize &#x2022; Mongoose &#x2022; GraphQL &#x2022; REST</p>
            <div className="bar"></div>
        </div>
    );
}