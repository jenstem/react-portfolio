import React from 'react';
import ProjectCard from '../components/Project/ProjectCard';
import './projects.css';

const projectData = [
    { title: 'PWA Text Editor', description: 'Text editor web application', imageUrl: "https://github.com/jenstem/react-portfolio/blob/main/src/assets/app-images/PWA.jpg", url: "https://github.com/jenstem/pwa-text-editor", site: "https://hidden-ocean-30849-b1dc3b32b941.herokuapp.com/" },
    { title: 'Social Network API', description: 'A command line invoked network api', imageUrl: "../assets/app-images/social-network.jpg", url: 'https://github.com/jenstem/social-network-api', site: "Not Available" },
    { title: 'Tech Blog', description: 'CMS-style blog site', imageUrl: "./assets/app-images/tech-blog", url: "https://github.com/jenstem/tech-blog", site: "https://fast-brook-86367-d21f795e7f85.herokuapp.com/" },
    { title: 'Rhythm Reviews', description: 'A CMS-style review site', imageUrl: "../../assets/app-images/rhythm-reviews.jpg", url: "https://github.com/group7-project2/rhythm-reviews", site: "https://rhythm-reviews-8a43a75413f9.herokuapp.com/" },
    { title: 'E-Commerce Backend', description: 'Express.js API', imageUrl: '', url: "https://github.com/jenstem/e-commerce-backend", site: "Not Available" },
    { title: 'Employee Tracker', description: 'Command line application', imageUrl: '', url: "https://github.com/jenstem/employee-tracker", site: "Not Available" },
];

export default function Projects() {
    return (
        <div id="projects" className="projects-container">
            <h2 className="portfolio-size">My Portfolio</h2>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                    // <a
                    // href="/"
                    //     key={index}
                    // >
                        <ProjectCard {...project} />
                    // </a>
                ))}
            </div>
            <div className="add-space"></div>
            <div className="bar"></div>
        </div>
    );
};