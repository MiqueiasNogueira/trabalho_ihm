import React from "react";
import "./nossos_servicos.css";
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
          <Grid_Servicos mostrarHeader={false} repetirUltimos={true} />
        </div>
      </section>
    </>
  );
};

export default NossosServicos;