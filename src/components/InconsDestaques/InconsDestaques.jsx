import React from "react";
import "../InconsDestaques/InconsDestaques.css"; // Verifique se o caminho está correto
import CameraIcon from "../image/icons/camera.png";
import IgrenagemIcon from "../image/icons/igrenagem.png";
import PlayIcon from "../image/icons/play.png";
import TvIcon from "../image/icons/tv.png";
import AntenaIcon from "../image/icons/antena.png";

const InconsDestaques = () => {
  return (
    <section>
      <div id="IconsDestaques">
        <div className="AreaDestaques">
          <div className="iconsCards">
            {/* Adicionei a classe icon-img em todos */}
            <img className="icon-img" src={CameraIcon} alt="Câmera" />
            <span>Segurança</span>
          </div>

          <div className="iconsCards">
            <img className="icon-img" src={TvIcon} alt="TV" />
            <span>Monitoramento</span>
          </div>

          <div className="iconsCards">
            <img className="icon-img" src={PlayIcon} alt="Play" />
            <span>Reprodução</span>
          </div>

          <div className="iconsCards">
            <img className="icon-img" src={AntenaIcon} alt="Antena" />
            <span>Conectividade</span>
          </div>

          <div className="iconsCards">
            <img className="icon-img" src={IgrenagemIcon} alt="Configuração" />
            <span>Configuração</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InconsDestaques;
