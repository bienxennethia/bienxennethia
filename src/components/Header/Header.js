import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import './Header.scss';
import { Logo, Nav, Close } from '../Icons/Icons';
import MyResume from './cv.pdf';

const NavLink = ({ to, children, onClick, offsetVal = -90, className}) => {
  
  const defaultAttr = {
    activeClass: "active",
    offset: offsetVal,
    duration: 500,
    smooth: true,
    spy: true,
    className: className || 'header__nav--link',
    to,
    onClick
  }

  return (
    <Link
      {...defaultAttr}>
      {children}
    </Link>
  );
}

const Header = () => {

  let [ isNavOpen, setIsNavOpen ] = useState(false);
  let [ navClass, setNavClass ] = useState('');
  let [ resumeText, setResumeText ] = useState('Resume');
  let [ isMobile, setIsMobile ] = useState(false);

  const updateNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    if (window.innerWidth < 640) {
      setNavClass(isNavOpen ? 'is-open' : '');
    }

  }, [isNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsNavOpen(false);
        setNavClass('');
        setResumeText('Download Resume');
        setIsMobile(true);
      } else {
        setResumeText('Resume');
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      <div className='header__container'>
        <NavLink className='header__logo' to='home' onClick={() => setIsNavOpen(false)} offset='0'>
          <Logo />
        </NavLink>
        <div  className={'header__actions ' + navClass} onClick={updateNav}>
          <Nav id='menu' />
          <Close id='close' />
        </div>
        <nav className={navClass} onClick={() => setIsNavOpen(false)}>
          <ul className='header__nav'>
            <li><NavLink to='home' onClick={updateNav} offset="0">Home</NavLink></li>
            <li><NavLink to='projects' onClick={updateNav}>Projects</NavLink></li>
            <li><NavLink to='experience' onClick={updateNav}>Experience</NavLink></li>
            <li><a href={MyResume} className={isMobile || 'resume-btn'}  download="Xennethia-Bien--resume.pdf" onClick={updateNav}>{resumeText}</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;