import React from 'react';
import './banner_principal.css'; 
import banner from '../image/Banner.png'; 

function Banner_Principal() {
  return (
    <section id="cabecalho">
      {/*Fundo e a Imagem */}
      <div className="banner-content-wrapper" style={{ backgroundImage: `url(${banner})` }}>
        
        {/* Ícone de Seta Esquerda (Carrossel) */}
        <button className="banner-slider-arrow left-arrow" aria-label="Slide anterior">
          &lt;
        </button>
        
        {/* Ícone de Seta Direita (Carrossel) */}
        <button className="banner-slider-arrow right-arrow" aria-label="Próximo slide">
          &gt;
        </button>
      </div>
      
      {/* Linha Separadora Preta */}
      <div className="banner-separator-line"></div>

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