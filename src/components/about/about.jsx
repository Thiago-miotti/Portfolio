import React from "react";
import "./about.css";
import ME from "../../assets/aboutPic.jpeg";
import { FaAward } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Conheça tudo</h5>
      <h2>Sobre mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>2 anos de faculdade</small>
            </article>
            <article className="about__card">
              <MdWorkOutline className="about__icon" />
              <h5>Trabalho</h5>
              <small>1 ano como Assistente de TI</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projeto</h5>
              <small>15+ projetos completos</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quo
            aspernatur modi in hic? Alias officia labore fugiat, sunt ratione
            quisquam. Nisi nam eius cupiditate impedit labore, doloribus commodi
            accusamus.
          </p>

          <a href="#contact" className="btn btn-primary">
            Vamos conversar!
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
