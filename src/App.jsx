import Menu from "./components/Menu/menu.jsx";
import Footer from "./components/Footer/footer.jsx";
import Home from "./Paginas/Home.jsx";
import Contato from "./Paginas/Contato.jsx";
import Sobre from "./Paginas/SobreNosPagina/Sobre-nos.jsx";
import { Routes, Route } from "react-router-dom";
import "@fontsource/saira-stencil-one";
import Produtos from "./Paginas/Produtos/produtos.jsx";

function App() {
  return (
    <div className="site-container">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/servicos" element="" />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
