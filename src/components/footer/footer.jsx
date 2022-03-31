import React from "react";
import "./footer.css";

import { AiFillInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const footer = () => {
  return (
    <footer>
      <h4>MIOTTI</h4>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre mim</a>
        </li>
        <li>
          <a href="#portfolio-page">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://github.com">
          <AiFillGithub />
        </a>
        <a href="https://linkedin.com">
          <AiFillLinkedin />
        </a>
        <a href="https://twitter.com">
          <AiOutlineTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Thiago Miotti. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
