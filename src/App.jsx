import Banner_Principal from "./components/Cabecalho/banner_principal"
import Menu from "./components/Menu/menu.jsx"
import BarraDesTaque from "./components/Barra_red/barra.jsx"
import Produtos from "./components/Produtos/produtos.jsx"
function App() {
  return (
    <div className="site-container">
      <Menu />
      <Banner_Principal /> 
      <BarraDesTaque />
      <Produtos />

    </div>
  );
}

export default App;