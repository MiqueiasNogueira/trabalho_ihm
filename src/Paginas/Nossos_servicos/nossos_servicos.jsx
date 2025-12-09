import React from "react";
import "./nossos_servicos.css";
import Divisor from "../../components/Divisor/divisor";
import { Link } from "react-router-dom";
import TopPages from "../../components/TopPages/top_pages";
import Grid_Servicos from "../../components/Grid_servicos/grid_servicos";

const NossosServicos = () => {
  return (
    <>
      <TopPages title="NOSSOS SERVIÇOS" />
      <section id="secao-servicos" className="pagina-servicos">
        <div className="servicos">
          <header className="header">
            <p className="subtitulo">
              Escolha o serviço ideal e solicite seu orçamento sem <br />
              compromisso.
            </p>
          </header>
          <Divisor  marginBottom="" tamanho="95%" />
          <Grid_Servicos mostrarHeader={false} repetirUltimos={true} />
          <Divisor />
        </div>
      </section>
    </>
  );
};

export default NossosServicos;