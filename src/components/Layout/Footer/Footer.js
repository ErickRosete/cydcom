import React from "react";
import "./Footer.css";
import logoAstra from "../../../Assets/Images/Logos/logo-astra.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer__comp">
        <p>©2019 | Epsilon Computadoras S.A de C.V.</p>
        <p>Aviso de privacidad | Terminos de uso</p>
      </div>
      <div className="footer__dev">
        <p>Desarrollado por:<img height={22} src={logoAstra} alt="logo AstraDev"></img></p>
      </div>
    </footer>
  );
};

export default Footer;
