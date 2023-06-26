import React from "react";
import { Link } from "react-router-dom";

import "./Icons.scss";
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as GitHub } from './github.svg';
import { ReactComponent as LinkedIn } from './linkedin.svg';
import { ReactComponent as Email } from './email.svg';
import { ReactComponent as Arrow } from './arrow.svg';
import { ReactComponent as Nav } from './hamburger.svg';
import { ReactComponent as Close } from './close.svg';

const Icons = () => {
  return (
    <div className="icons__container">
      <Link to="https://github.com/bienxennethia" target="_blank"><GitHub /></Link>
      <Link to="mailto:bienxennethia@gmail.com"><Email /></Link>
      <Link to="https://www.linkedin.com/in/bienxennethia/" target="_blank"><LinkedIn /></Link>
      <div className="icons__logo">
        <Logo />
      </div>
    </div>
  );
};



export { Icons, Logo, Arrow, Nav, Close };