import React from "react";
import { Link } from "react-router-dom";

import "./Project.scss";

const Project = (props) => {
  return (
    <div className="projects__card">
      <div className="projects__card-image">
        <Link to="https://www.venetianlasvegas.com/" target="_blank" rel="noopener noreferrer" className="projects__card-image--link">
          <div className="projects__card-image--container">
            <img src={props.image} alt={props.title} />
        </div>
        </Link>
      </div>
      <div className="projects__card-content">
        <h2 className="projects__card-title">{props.title}</h2>
        <p className="projects__card-position">{props.position}</p>
        <p className="projects__card-copy">{ props.copy }</p>
        <Link to={props.link} className="projects__card-link" target="_blank" rel="noopener noreferrer">View Project</Link>
      </div>
    </div>
  );
}

export default Project;