import React from "react";
import CV from "../../assets/Curriculum.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn" target="_blank">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Vamos conversar!
      </a>
    </div>
  );
};

export default CTA;
