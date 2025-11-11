import React from 'react';
import './Banner_Principal.css'; 
import CameraImage from '../image/Fundo.png'; 

function Banner_Principal() {
  return (
    <section className="banner-hero">
      {/*Fundo e a Imagem */}
      <div className="banner-content-wrapper" style={{ backgroundImage: `url(${CameraImage})` }}>
        
        {/* Ícone de Seta Esquerda (Carrossel) */}
        <button className="banner-slider-arrow left-arrow" aria-label="Slide anterior">
          &lt;
        </button>
        
        {/* Ícone de Seta Direita (Carrossel) */}
        <button className="banner-slider-arrow right-arrow" aria-label="Próximo slide">
          &gt;
        </button>
      </div>
      
      {/* Barra de Destaque Inferior (Vermelha) */}
      <div className="banner-bottom-bar">
        <p className="bottom-bar-text">
          Veja tudo o que está acontecendo em sua casa ou empresa com as câmeras de monitoramento via celular.
        </p>
      </div>
    </section>
  );
}

export default Banner_Principal;