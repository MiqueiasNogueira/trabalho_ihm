import "@fontsource/saira-stencil-one";
import TopPages from "../../components/TopPages/top_pages.jsx";
import "./produtos.css";
import Divisor from "../../components/Divisor/divisor.jsx";
import Produtos from "../../components/Produtos/produtos.jsx";

function ProdutoPages() {
  return (
    <div>
      <TopPages title="Nossos produtos" />
      <main id="produtosPages">
        <section id="topProdutos">
          <h1>Shop</h1>
          <p>
            As melhores câmeras de segurança do mercado à sua disposição, com
            garantia de qualidade e entrega rápida em até 3 dias úteis. Garanta
            já a proteção que você merece com tecnologia de ponta e suporte
            especializado
          </p>
        </section>
        <section id="filtro">
          <form id="filtroSelect">
            <label for="item-type-select">PRODUTOS:</label>
            <select id="item-type-select" onchange="filterItems(this.value)">
              <option value="all">TODOS</option>
              <option value="produto">CAMERAS</option>
              <option value="acessorio">ACESSORIOS</option>
            </select>
          </form>
          <span className="titleProdutos">
            <strong>30</strong> Modelos disponíveis
          </span>
        </section>
      </main>
      <Divisor marginTop="10px" marginBottom="" />
      <Produtos type="todos" isCarrossel={false} semFundo={true} />
      <Divisor marginBottom="100px" tamanho="100%" espessura="1px" />
    </div>
  );
}

export default ProdutoPages;
