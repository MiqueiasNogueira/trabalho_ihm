import Banner from "../components/Banner/Banner.jsx";
import BarraDesTaque from "../components/Barra_red/barra.js";
import Produtos from "../components/Produtos/produtos.jsx";
import Quem_Somos from "../components/Quem_somos/quem_somos.jsx";
import Grid_Servicos from "../components/Grid_servicos/grid_servicos.jsx";
import CabecalhoItem from "../components/CabecalhoItems/cabecalhoItems.jsx";
import FormularioContato from "../components/Formulario_contato/formulario_contato.jsx";
import CabesalhoSection from "../components/CabesalhoSection/CabesalhoSection.jsx";
import InconsDestaques from "../components/InconsDestaques/InconsDestaques.jsx";
import DuvidasFrequentes from "../components/Duvidas_frequentes/duvidas_frequentes.jsx";
import Depoimentos from "../components/Depoimentos/depoimentos.jsx";
import "@fontsource/saira-stencil-one";

function Home() {
  return (
    <div>
      <Banner />
      <BarraDesTaque />
      <InconsDestaques />
      <Quem_Somos />
      <CabesalhoSection title="NOSSOS PRODUTOS " />
      <CabecalhoItem title="Camera" />
      <Produtos type="produtos" />
      <CabecalhoItem title="Acessorio" />
      <Produtos type="acessorios" />
      <Grid_Servicos />
      <Depoimentos />
      <FormularioContato />
      <DuvidasFrequentes />
    </div>
  );
}

export default Home;
