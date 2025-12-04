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
        <div className="AreaDestaques">
          <div className="iconsCards">
            <img id="CameraIcon" src={CameraIcon} alt="" />
            <span>Camera de Segurança</span>
          </div>
          <div className="iconsCards">
            <img id="TvIcon" src={TvIcon} alt="" />
            <span>Camera de Segurança</span>
          </div>
          <div className="iconsCards">
            <img id="PlayIcon" src={PlayIcon} alt="" />
            <span>Camera de Segurança</span>
          </div>
          <div className="iconsCards">
            <img id="AntenaIcon" src={AntenaIcon} alt="" />
            <span>Camera de Segurança</span>
          </div>
          <div className="iconsCards">
            <img id="IgrenagemIcon" src={IgrenagemIcon} alt="" />
            <span>Camera de Segurança</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InconsDestaques;
