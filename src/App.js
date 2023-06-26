import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.scss';

// components
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import { Icons } from './components/Icons/Icons';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Home />
        <Skills/>
        <Projects />
        <Experience />
        <Footer />
        <div className='container--side'>
          <div className='container--side__content'>
            <div className="container--gmail"><Link to="mailto:bienxennethia@gmail.com" className="link">bienxennethia@gmail.com</Link></div>
              <Icons />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
