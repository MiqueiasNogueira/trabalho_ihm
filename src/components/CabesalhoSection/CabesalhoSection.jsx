import React from "react";
import "../CabesalhoSection/CabesalhoSection.css";

const CabesalhoSection = ({ title }) => {
  return (
    <section id="cabecalhoSection">
      <div className="textSection">
        <spam>{title}</spam>
      </div>
    </section>
  );
};

export default CabesalhoSection;
