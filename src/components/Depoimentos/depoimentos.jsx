import React, { useState } from "react";
import "./depoimentos.css";

const DADOS_DEPOIMENTOS = [
  {
    id: 1,
    texto:
      "Contratei a instalação das câmeras de segurança e fiquei impressionado com a qualidade do serviço. A equipe foi super atenciosa, explicou todo o funcionamento e deixou tudo pronto em poucas horas. Hoje acompanho minha casa pelo celular, com imagens nítidas mesmo à noite.",
    nome: "Marcos A.",
    cargo: "Cliente Satisfeito",
    foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    texto:
      "Serviço impecável! A equipe chegou no horário combinado e fez a instalação sem bagunça. O aplicativo é muito fácil de usar e me sinto muito mais segura agora. Recomendo para todos os meus vizinhos de olhos fechados.",
    nome: "Juliana S.",
    cargo: "Empresária",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    texto:
      "O melhor investimento que fiz para a minha loja. O suporte pós-venda deles é excelente, tiraram todas as minhas dúvidas sobre o monitoramento remoto. Nota 10 pela agilidade e competência.",
    nome: "Roberto F.",
    cargo: "Comerciante",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
];

const SetaNavegacao = ({ direcao }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {direcao === "prev" ? (
      <path d="M15 18l-6-6 6-6" />
    ) : (
      <path d="M9 18l6-6-6-6" />
    )}
  </svg>
);

const Depoimentos = () => {
  const [indice, setIndice] = useState(0);

  const { texto, nome, cargo, foto } = DADOS_DEPOIMENTOS[indice];

  const navegar = (direcao) => {
    setIndice((prev) => {
      const total = DADOS_DEPOIMENTOS.length - 1;
      if (direcao === "proximo") return prev === total ? 0 : prev + 1;
      return prev === 0 ? total : prev - 1;
    });
  };

  return (
    <section className="depoimentos" aria-label="Depoimentos de Clientes">
      <div className="depoimentos__curve"></div>

      <div className="depoimentos__container">
        <h2 className="depoimentos__title">DEPOIMENTOS</h2>

        <figure className="depoimentos__figure">
          <div className="depoimentos__content">
            <button
              onClick={() => navegar("anterior")}
              className="btn-nav btn-prev"
              aria-label="Depoimento anterior"
            >
              <SetaNavegacao direcao="prev" />
            </button>

            <blockquote className="depoimentos__text fade-in" key={indice}>
              "{texto}"
            </blockquote>

            <button
              onClick={() => navegar("proximo")}
              className="btn-nav btn-next"
              aria-label="Próximo depoimento"
            >
              <SetaNavegacao direcao="next" />
            </button>
          </div>

          <figcaption
            className="depoimentos__author fade-in"
            key={`auth-${indice}`}
          >
            <img src={foto} alt={`Foto de ${nome}`} className="author__img" />
            <div className="author__info">
              <cite className="author__name">{nome}</cite>
              <span className="author__role">, {cargo}</span>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Depoimentos;
