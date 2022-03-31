import React from "react";
import "./contact.css";

import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_wbm41rd",
      "template_a7dhfln",
      form.current,
      "wtVxqPaLByi0LPBV3"
    );

    e.target.reset();

    alert("Mensagem enviada!!");
  };

  return (
    <section id="contact">
      <h5>Fale</h5>
      <h2>comigo!!</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>thiagomiottidev@gmail.com</h5>
            <a href="mailto:thiagomiottidev@gmail.com" target="_blank">
              Me mande uma messagem!
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>(15)97402-4634</h5>
            <a
              href="https://api.whatsapp.com/send?phone+5515974024634"
              target="_blank"
            >
              Me mande uma messagem!
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>linkedin</h4>
            <h5>Thiago Miotti</h5>
            <a
              href="https://www.linkedin.com/in/thiago-miotti-0380ba164/"
              target="_blank"
            >
              Me mande uma messagem!
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua menssagem"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Mandar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
