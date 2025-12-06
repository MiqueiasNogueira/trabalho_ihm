import React from "react";
import "../TopPages/top_pages.css";
import ImgTop from "../image/gradeFundo.png";
const top_pages = ({ title }) => {
  return (
    <div id="topPages">
      <img src={ImgTop} alt="" />
      <div>
        <span id="topTitle">{title}</span>
      </div>
    </div>
  );
};

export default top_pages;
