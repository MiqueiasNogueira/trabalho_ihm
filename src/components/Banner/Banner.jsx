import React, { useState } from "react";
import "./Banner.css";

import banner1 from "../image/Banner.png";
import banner2 from "../image/Banner2.png";

export default function Banner() {
  const images = [banner1, banner2];

  const colors = [
    "linear-gradient(90deg, rgb(257, 80, 0) 0%, rgb(257, 200,0) 60%, rgb(250, 105, 0) 100%)",  
    "linear-gradient(90deg, rgb(140, 140, 140) 0%, rgb(210, 210, 210) 60%, rgb(180, 180, 180) 100%"    // banner cinza claro
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div
      className="banner-container"
      style={{ background: colors[current] }}
    >
      <div className="banner-content">
        <img
          src={images[current]}
          alt="Banner"
          className="banner-image"
        />

        {/* SETA ESQUERDA */}
        <button
          className="banner-arrow left-arrow"
          onClick={prevSlide}
        >
          &lt;
        </button>

        {/* SETA DIREITA */}
        <button
          className="banner-arrow right-arrow"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
