import React from "react";
import "../Divisor/divisor.css";

const Divisor = ({ marginTop, marginBottom, tamanho, espessura }) => {
  const containerStyle = {
    marginTop: marginTop || "0",
    marginBottom: marginBottom || "0",
  };

  const lineStyle = {
    width: tamanho || "100%",
    borderBottomWidth: espessura || "1px",
    margin: "0 auto",
  };

  return (
    <div id="divisor" style={containerStyle}>
      <div className="linha" style={lineStyle}></div>
    </div>
  );
};

export default Divisor;
