import React from "react";
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  const { title, description, imageUrl, url, site } = project;

  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <a href={url} className="project-description hover-link">{url}</a><br />
      <br />
      <a href={site} className="project-description hover-link">{site}</a>
    </div>

  );
}