import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

// components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Home />
        <Skills/>
        <Projects />
        <Experience />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
