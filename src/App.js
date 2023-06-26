import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

// components
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Home />
        <Skills/>
        <Projects />
        <Experience />
        <Footer />
      </div>
      <SideBar/>
    </BrowserRouter>
  );
}

export default App;
