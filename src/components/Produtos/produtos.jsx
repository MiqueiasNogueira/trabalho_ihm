import { useRef } from "react";
import CardProdutos from "./Card_Produto/cardProdutos.jsx";
import setaImg from "../image/setas/esquerdo.png";
import "./produtos.css";

// 1. Estrutura de DADOS Original (Simplificada para uso interno)
const DADOS_ORIGINAL = {
  produtos: {
    label: "Produtos",
    itens: [
      { id: 1, title: "Câmera Externa Dupla", price: "R$ 100,00" },
      { id: 2, title: "Câmera Externa Simples", price: "R$ 80,00" },
      { id: 3, title: "Câmera Noturna", price: "R$ 120,00" },
      { id: 4, title: "Câmera 360°", price: "R$ 150,00" },
      { id: 5, title: "Kit Câmeras", price: "R$ 500,00" },
      { id: 6, title: "Kit Câmeras", price: "R$ 500,00" },
      { id: 7, title: "Kit Câmeras", price: "R$ 500,00" },
    ],
  },
  acessorios: {
    label: "Acessórios",
    itens: [
      { id: 1, title: "Fonte 12V 2A", price: "R$ 40,00" },
      { id: 2, title: "Cabo Coaxial 50m", price: "R$ 60,00" },
      { id: 3, title: "Conector BNC", price: "R$ 5,00" },
      { id: 4, title: "Suporte Câmera", price: "R$ 25,00" },
      { id: 5, title: "HD 1TB DVR", price: "R$ 250,00" },
      { id: 6, title: "HD 1TB DVR", price: "R$ 250,00" },
      { id: 7, title: "HD 1TB DVR", price: "R$ 250,00" },
    ],
  },
};

const produtosItens = DADOS_ORIGINAL.produtos.itens;

const acessoriosItens = DADOS_ORIGINAL.acessorios.itens.map((item) => ({
  ...item,
  id: item.id + produtosItens.length,
}));

const todosItens = [...produtosItens, ...acessoriosItens];

const DADOS_FINAL = {
  produtos: DADOS_ORIGINAL.produtos,
  acessorios: {
    label: DADOS_ORIGINAL.acessorios.label,
    itens: acessoriosItens,
  },
  todos: {
    label: "Todos",
    itens: todosItens,
  },
};

const Produtos = ({
  type = "produtos",
  semFundo = false,
  isCarrossel = true,
}) => {
  const listaRef = useRef(null);

  // Usa a chave 'type' (ex: "produtos", "acessorios" ou "todos") no DADOS_FINAL
  const categoriaAtual = DADOS_FINAL[type] || { label: "Lista", itens: [] };

  const rolarLista = (direcao) => {
    if (!listaRef.current) return;

    const DESLOCAMENTO = 266;

    listaRef.current.scrollBy({
      left: direcao === "esquerda" ? -DESLOCAMENTO : DESLOCAMENTO,
      behavior: "smooth",
    });
  };

  const sectionClasses = `secao-produtos ${semFundo ? "sem-fundo" : ""}`;
  const listClasses = isCarrossel ? "lista-cards" : "lista-grid";

  return (
    <section className={sectionClasses}>
      <div
        className="container-carrossel"
        aria-label={`Lista de ${categoriaAtual.label}`}
      >
        {isCarrossel && (
          <button
            className="btn-seta seta-esquerda"
            onClick={() => rolarLista("esquerda")}
            aria-label="Anterior"
          >
            <img src={setaImg} alt="" />
          </button>
        )}

        <div
          className={listClasses}
          ref={isCarrossel ? listaRef : null}
          role="list"
        >
          {categoriaAtual.itens.map((item) => (
            <CardProdutos
              key={item.id}
              titulo={item.title}
              preco={item.price}
            />
          ))}
        </div>

        {isCarrossel && (
          <button
            className="btn-seta seta-direita"
            onClick={() => rolarLista("direita")}
            aria-label="Próximo"
          >
            <img src={setaImg} alt="" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Produtos;
