import React from "react";
import "../CabesalhoSection/CabesalhoSection.css";

const CabesalhoSection = ({ title }) => {
  return (
    <section id="cabecalhoSection">
      <div className="textSection">
        <h1>{title}</h1>
      </div>
      <div className="teste"></div>
    </section>
  );
};

export default CabesalhoSection;
