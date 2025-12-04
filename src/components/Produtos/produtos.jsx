import { useRef } from "react";
import CardProdutos from "./Card_Produto/cardProdutos.jsx";
import setaImg from "../image/setas/esquerdo.png";
import "./produtos.css";

// Dados constantes (idealmente viriam de uma API ou arquivo separado)
const DADOS = {
  produtos: {
    label: "Produtos",
    itens: [
      { id: 1, title: "Câmera Externa Dupla", price: "R$ 100,00" },
      { id: 2, title: "Câmera Externa Simples", price: "R$ 80,00" },
      { id: 3, title: "Câmera Noturna", price: "R$ 120,00" },
      { id: 4, title: "Câmera 360°", price: "R$ 150,00" },
      { id: 5, title: "Kit Câmeras", price: "R$ 500,00" },
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
    ],
  },
};

const Produtos = ({ type = "produtos" }) => {
  const listaRef = useRef(null);

  // Seleciona a categoria correta ou retorna array vazio para evitar erros
  const categoriaAtual = DADOS[type] || { label: "Lista", itens: [] };

  const rolarLista = (direcao) => {
    if (!listaRef.current) return;

    // Valor fixo aproximado (largura card + gap) para performance
    const DESLOCAMENTO = 266;

    listaRef.current.scrollBy({
      left: direcao === "esquerda" ? -DESLOCAMENTO : DESLOCAMENTO,
      behavior: "smooth",
    });
  };

  return (
    <section className="secao-produtos">
      <div
        className="container-carrossel"
        aria-label={`Carrossel de ${categoriaAtual.label}`}
      >
        <button
          className="btn-seta seta-esquerda"
          onClick={() => rolarLista("esquerda")}
          aria-label="Anterior"
        >
          <img src={setaImg} alt="" />
        </button>

        <div className="lista-cards" ref={listaRef} role="list">
          {categoriaAtual.itens.map((item) => (
            <CardProdutos
              key={item.id}
              titulo={item.title}
              preco={item.price}
            />
          ))}
        </div>

        <button
          className="btn-seta seta-direita"
          onClick={() => rolarLista("direita")}
          aria-label="Próximo"
        >
          <img src={setaImg} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Produtos;
