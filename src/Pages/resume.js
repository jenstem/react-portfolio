import React from 'react';
import './resume.css';
import resumeDoc from "../assets/app-images/resume.pdf";


export default function Resume() {
    return (
        <div>
            <h2 id="resume" className="resume-title">Resume & Skill Set</h2>
            <p>
                {" "}
                <span>
                    <a href={resumeDoc} target="_blank" rel="noreferrer" className='download-resume'>Click here to download my resume PDF</a>
                </span>{" "}
            </p>
                <p> <b>Frontend:</b> <br></br>
                    HTML &#x2022; CSS &#x2022; JavaScript &#x2022; jQuery &#x2022; React &#x2022; Redux &#x2022; Tailwind &#x2022; Bootstrap &#x2022; Next.js &#x2022;
                    Mongoose &#x2022; Jupyter Notebook &#x2022; TypeScript</p>
                <p> <b>Backend:</b> <br></br>
                    Python &#x2022; Django &#x2022; Flask &#x2022; Pandas &#x2022; NumPy &#x2022; GraphQL &#x2022; SQLAlchemy &#x2022; Node.js &#x2022; Sequelize &#x2022; Express.js &#x2022; REST API &#x2022; AWS</p>
                <p> <b>Database:</b> <br></br>
                    MongoDB &#x2022; MySQL &#x2022; SQL &#x2022; NoSQL &#x2022; SQLite &#x2022; PostgreSQL &#x2022; Git</p>
                <p> <b>Tools:</b> <br></br>
                    Adobe Photoshop &#x2022; GitHub &#x2022; GitLab &#x2022; VS Code &#x2022; Insomnia &#x2022; Netlify &#x2022;
                    Heroku &#x2022; Wordpress &#x2022; Slack &#x2022; Microsoft Office 365</p>
                <p className='add-space'> </p>
            <div className="bar"></div>
        </div>
    );
}