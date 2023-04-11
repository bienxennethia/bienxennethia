import React from "react";

import { Icons } from "../Icons/Icons";

import "./Footer.scss";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <nav className="footer__container">
        <p>Developed and Design by Xennethia Bien; © {year}</p>
        <Icons />
      </nav>
      
  {/* Image Reference:
  https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fsearch%3Fq%3Dblack&psig=AOvVaw2Zc2nGwGS_88btNLlSWFTS&ust=1679699166571000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCEmpOV8_0CFQAAAAAdAAAAABAD */}
    </div>
  )
}

export default Footer;