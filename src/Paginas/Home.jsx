import Banner_Principal from "../components/Cabecalho/banner_principal.jsx";
import Menu from "../components/Menu/menu.jsx";
import BarraDesTaque from "../components/Barra_red/barra.js";
import Produtos from "../components/Produtos/produtos.jsx";
import Quem_Somos from "../components/Quem_somos/quem_somos.jsx";
import Grid_Servicos from "../components/Grid_servicos/grid_servicos.jsx";
import CabecalhoItem from "../components/CabecalhoItems/cabecalhoItems.jsx";
import "@fontsource/saira-stencil-one";
import FormularioContato from "../components/Formulario_contato/formulario_contato.jsx";
import CabesalhoSection from "../components/CabesalhoSection/CabesalhoSection.jsx";
import InconsDestaques from "../components/InconsDestaques/InconsDestaques.jsx";
import DuvidasFrequentes from "../components/Duvidas_frequentes/duvidas_frequentes.jsx";
import Footer from "../components/Footer/footer.jsx";

function App() {
  return (
    <div className="site-container">
      <Menu />
      <Banner_Principal />
      <BarraDesTaque />
      <InconsDestaques />
      <Quem_Somos />
      <CabesalhoSection title="NOSSOS PRODUTOS " />;
      <CabecalhoItem title="Camera" />
      <Produtos type="produtos" />
      <CabecalhoItem title="Acessorio" />
      <Produtos type="acessorios" />
      <Grid_Servicos />
      <FormularioContato />
      <DuvidasFrequentes />
      <Footer />
    </div>
  );
}

export default App;
