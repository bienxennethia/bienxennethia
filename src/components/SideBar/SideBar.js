import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.scss";
import { Icons } from "../Icons/Icons";

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__content'>
        <div className="sidebar__content--gmail"><Link to="mailto:bienxennethia@gmail.com" className="link">bienxennethia@gmail.com</Link></div>
          <Icons />
      </div>
    </div>
  );
}

export default SideBar;