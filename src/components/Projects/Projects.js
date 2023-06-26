import React from "react";

import "./Projects.scss";

import Project from "./Project/Project";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h1 className="projects__title title">Projects</h1>
        <div className="projects__grid">
          <Project title="The Venetian Resort Las Vegas" position="Full-Stack" copy="The Venetian Las Vegas is a luxury hotel and casino resort that offers shops, shows, and additional attractions all set within architectural replicas of some of Venice's greatest monuments located on the Las Vegas Strip in Paradise, Nevada, United States." image={require('./Images/venetian.png')} link="https://www.venetianlasvegas.com/" tech={['aem', "Angular", "React"]} />
          <Project title="Sands" position="Back-End" copy="Las Vegas Sands Corporation is an American casino and resort company with corporate headquarters in Paradise, Nevada, United States." image={require('./Images/sands.png')} link="https://www.sands.com/" tech={["AEM", "Angular", "React"]} />
          <Project title="Clear Labs" position="Full-Stack" copy="Clear Labs, Inc. is a private genomics testing company headquartered in San Carlos, California, United States." image={require('./Images/clearlabs.png')} link="https://www.clearlabs.com/" tech={["AEM", "Angular", "React"]} />
          <Project title="Skidmore, Owings & Merrill (SOM)" position="Front-End" copy="Skidmore, Owings & Merrill is an American architectural, urban planning and engineering firm." image={require('./Images/som.png')} link="https://www.som.com/" tech={["AEM", "Angular", "React"]} />
        </div>
      </div>
    </section>
  );
}

export default Projects;