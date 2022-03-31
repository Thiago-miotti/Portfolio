import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/FotoDeperfil1.png";
import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá meu nome é </h5>
        <h1>Thiago Miotti</h1>
        <h5 className="text-light">Estudante de SI / Front-end developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
