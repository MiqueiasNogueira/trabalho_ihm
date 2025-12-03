import React, { useState } from "react";
import "./Banner-test.css";

import banner1 from "../image/Banner.png";
import banner2 from "../image/Banner2.png";

export default function Banner() {
  const images = [banner1, banner2];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="banner-container">
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
