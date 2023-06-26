import React from "react";
import { Link } from "react-router-dom";

import "./Project.scss";
// import { ReactComponent as AEM } from '../Images/aem.svg';
import { ReactComponent as ExternalIcon } from '../Images/link.svg';

const Project = (props) => {
  // const techIcons = {
  //   "aem": <AEM />,
  // }

  return (
    <div className="projects__card">
      <div className="projects__card-image">
        <Link to={props.link} target="_blank" rel="noopener noreferrer" className="projects__card-image--link">
          <div className="projects__card-image--container">
            <img src={props.image} alt={props.title} />
        </div>
        </Link>
      </div>
      <div className="projects__card-content">
        <h2 className="projects__card-title">{props.title}</h2>
        <p className="projects__card-position">{props.position}</p>
        <p className="projects__card-copy">{props.copy}</p>
        <div className="projects__card-tech">
          <ul className="projects__card-tech--list">
            {/* {props.tech.map((tech, index) => {
              return (
                <li key={index} className={`projects__card-tech--item ${tech}`}>
                  {techIcons[tech]}
                </li>
              )
            })} */}
            <li><Link to={props.link} className="projects__card-tech--item link" target="_blank" rel="noopener noreferrer"><ExternalIcon /></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Project;