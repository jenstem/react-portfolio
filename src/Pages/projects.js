import React from 'react';
import ProjectCard from '../components/Project/ProjectCard';
import './projects.css';
import PWA from '../assets/app-images/PWA.jpg';
import SocialNetwork from '../assets/app-images/social-network.jpg';
import TechBlog from '../assets/app-images/tech-blog.jpg';
import RhythmReviews from '../assets/app-images/rhythm-reviews.jpg';
import ECommerceBackend from '../assets/app-images/ecommerce.jpg';
import EmployeeTracker from '../assets/app-images/employee-tracker.jpg';
import RhythmReviews2 from '../assets/app-images/rhythmreview2.jpg';

const projectData = [
    { title: 'Rhythm Reviews 2.0', description: 'A React review site', imageUrl: RhythmReviews2, url: "https://github.com/group2-project3/rhythm-reviews-2.0", site: "https://rhythm-reviews-v2-a30efa7f58da.herokuapp.com/" },
    { title: 'PWA Text Editor', description: 'Text editor web application', imageUrl: PWA, url: "https://github.com/jenstem/pwa-text-editor", site: "https://hidden-ocean-30849-b1dc3b32b941.herokuapp.com/" },
    { title: 'Social Network API', description: 'A command line invoked network api', imageUrl: SocialNetwork, url: 'https://github.com/jenstem/social-network-api', site: "Not Available" },
    { title: 'Tech Blog', description: 'CMS-style blog site', imageUrl: TechBlog, url: "https://github.com/jenstem/tech-blog", site: "https://fast-brook-86367-d21f795e7f85.herokuapp.com/" },
    { title: 'Rhythm Reviews', description: 'A CMS-style review site', imageUrl: RhythmReviews, url: "https://github.com/group7-project2/rhythm-reviews", site: "https://rhythm-reviews-8a43a75413f9.herokuapp.com/" },
    { title: 'E-Commerce Backend', description: 'Express.js API', imageUrl: ECommerceBackend, url: "https://github.com/jenstem/e-commerce-backend", site: "Not Available" },
    { title: 'Employee Tracker', description: 'Command line application', imageUrl: EmployeeTracker, url: "https://github.com/jenstem/employee-tracker", site: "Not Available" },
];

export default function Projects() {
    return (
        <div id="projects" className="projects-container">
            <h2 className="portfolio-size">My Portfolio</h2>
            <div className="projects-grid">
                {projectData.map((project, index) => (
                        <ProjectCard project={project} />
                ))}
            </div>
            <div className="add-space"></div>
            <div className="bar"></div>
        </div>
    );
};