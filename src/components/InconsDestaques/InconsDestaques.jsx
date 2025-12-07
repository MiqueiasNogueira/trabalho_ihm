import React from "react";
import "../InconsDestaques/InconsDestaques.css";
import CameraIcon from "../image/icons/camera.png";
import IgrenagemIcon from "../image/icons/igrenagem.png";
import PlayIcon from "../image/icons/play.png";
import TvIcon from "../image/icons/tv.png";
import AntenaIcon from "../image/icons/antena.png";

const InconsDestaques = () => {
  return (
    <section>
      <div id="IconsDestaques">
        <ul className="AreaDestaques">
          <li className="iconsCards">
            <img id="CameraIcon" src={CameraIcon} alt="Ícone de Câmera" />
            <span>Camera de Segurança</span>
          </li>
          <li className="iconsCards">
            <img id="TvIcon" src={TvIcon} alt="Ícone de TV" />
            <span>Camera de Segurança</span>
          </li>
          <li className="iconsCards">
            <img id="PlayIcon" src={PlayIcon} alt="Ícone de Play" />
            <span>Camera de Segurança</span>
          </li>
          <li className="iconsCards">
            <img id="AntenaIcon" src={AntenaIcon} alt="Ícone de Antena" />
            <span>Camera de Segurança</span>
          </li>
          <li className="iconsCards">
            <img
              id="IgrenagemIcon"
              src={IgrenagemIcon}
              alt="Ícone de Configuração"
            />
            <span>Camera de Segurança</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default InconsDestaques;
