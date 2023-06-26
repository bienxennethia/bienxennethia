import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

import profile from './profile.jpeg';
import MyResume from './cv.pdf';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__container">
        <div className="home__content">
          <h1 className="home__title">Hey! I'm <span className="highlight thea">Xennethia Bien</span></h1>
          <p className="home__copy">Welcome to my site! Call me <span className="highlight">Thea</span> for short. I am a skilled and dedicated web developer with extensive experience in <span className="highlight">Adobe Experience Manager</span> (AEM) based in the Philippines.
          </p>
          <p>I am currently working as a <span className="highlight">AEM Developer</span> at <Link to='http://codeandtheory.com/' className="home__copy--link highlight link">Code and Theory</Link>. I am passionate about my work and I am always eager to connect with other developers. Let's work together!</p>
          <div className="home__button">
            <a href={MyResume} download="Xennethia-Bien--resume.pdf" className="button">Download CV</a>
            <Link to="mailto:bienxennethia@gmail.com" className="button">Email me!</Link>
          </div>
        </div>
        <div className="home__image-container">
          <div className="home__image-content">
            <div className="home__image-overlay">
              <img src={profile} alt="Xennethia Bien-profile"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;