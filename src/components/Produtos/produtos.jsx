import { useRef, useCallback } from "react";
import CardProdutos from "./Card_Produto/cardProdutos.jsx";
import seta from "../image/setas/esquerdo.png";
import "./produtos.css";

const Produtos = ({ type = "produtos" }) => {
  const listaRef = useRef(null);

  const scroll = useCallback((direction) => {
    const container = listaRef.current;
    if (!container) return;

    const card = container.querySelector(".card-produto");
    const baseWidth = 250;
    const gap = 16;

    const cardWidth = card?.offsetWidth || baseWidth;
    const amount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }, []);

  const produtos = [
    { id: 1, title: "Câmera de Segurança Externa Dupla", price: "R$ 100,00" },
    { id: 2, title: "Câmera de Segurança Externa Dupla", price: "R$ 80,00" },
    { id: 3, title: "Câmera de Segurança Externa Dupla", price: "R$ 120,00" },
    { id: 4, title: "Câmera de Segurança Externa Dupla°", price: "R$ 150,00" },
    { id: 5, title: "Câmera de Segurança Externa Dupla", price: "R$ 500,00" },
  ];

  const acessorios = [
    { id: 1, title: "Fonte 12V 2A", price: "R$ 40,00" },
    { id: 2, title: "Cabo Coaxial 50m", price: "R$ 60,00" },
    { id: 3, title: "Conector BNC", price: "R$ 5,00" },
    { id: 4, title: "Suporte para Câmera", price: "R$ 25,00" },
    { id: 5, title: "HD 1TB para DVR", price: "R$ 250,00" },
  ];

  const lista =
    type === "produtos" ? produtos : type === "acessorios" ? acessorios : [];

  const ariaLabel =
    type === "produtos"
      ? "Lista de produtos em carrossel"
      : "Lista de acessórios em carrossel";

  return (
    <section id="fundo">
      <div id="produtos" aria-label={ariaLabel}>
        <div className="carrossel-produtos">
          <button
            type="button"
            className="seta seta-esquerda"
            onClick={() => scroll("left")}
            aria-label="Itens anteriores"
          >
            <img src={seta} alt="Seta para a esquerda" />
          </button>

          <div
            id="lista-produtos"
            ref={listaRef}
            role="list"
            aria-label={ariaLabel}
          >
            {lista.map((item) => (
              <CardProdutos
                key={item.id}
                title={item.title}
                prece={item.price}
              />
            ))}
          </div>

          <button
            type="button"
            className="seta seta-direita"
            onClick={() => scroll("right")}
            aria-label="Próximos itens"
          >
            <img src={seta} alt="Seta para a direita" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Produtos;
