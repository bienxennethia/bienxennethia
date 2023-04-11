import React from "react";

import "./Experience.scss";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <h1 className="experience__title title">Experience</h1>
        <h1 className="experience__content--company">Code and Theory</h1>
        <div className="experience__content">
          <div className="experience__content--item">
            <h2 className="experience__content--title">AEM Developer</h2>
            <p className="experience__content--date">2022 - Present</p>
            <ul>
              <li>Identified issues, analyzed information and provided solutions to problems.</li>
              <li>Designed and developed web pages using servlet, Angular, and React</li>
              <li>Experienced developing websites with Accessibility features and testing using VoiceOver and aXe Devtools.</li>
              <li>On-board new developers assigned on AEM project.</li>
              <li>Technologies used: AEM, WordPress, Angular, React</li>
            </ul>
          </div>
          <div className="experience__content--item">
            <h2 className="experience__content--title">Jr. Back-End Developer</h2>
            <p className="experience__content--date">2020 - 2022</p>
            <ul>
              <li>Designed and built AEM dialogs, components, templates, and OSGi bundles.</li>
              <li>Designed and developed web pages using AEM, Sightly, HTL, JavaScript, HTML, CSS/SCSS, and JQuery.</li>
              <li>Experience working in an agile environment, involved in daily standup meetings.</li>
              <li>Technologies used: AEM, WordPress, Laravel, JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
    