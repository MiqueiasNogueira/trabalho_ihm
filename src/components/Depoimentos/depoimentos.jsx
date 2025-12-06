import React, { useState } from "react";
import "./Depoimentos.css";

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
    <section className="depoimentos">
      <div className="depoimentos__curve"></div>

      <div className="depoimentos__container">
        <span className="depoimentos__title">DEPOIMENTOS</span>

        <div className="depoimentos__content">
          <button
            onClick={() => navegar("anterior")}
            className="btn-nav btn-prev"
            aria-label="Anterior"
          >
            <SetaNavegacao direcao="prev" />
          </button>

          <p className="depoimentos__text fade-in" key={indice}>
            {texto}
          </p>

          <button
            onClick={() => navegar("proximo")}
            className="btn-nav btn-next"
            aria-label="Próximo"
          >
            <SetaNavegacao direcao="next" />
          </button>
        </div>

        <div className="depoimentos__author fade-in" key={`auth-${indice}`}>
          <img src={foto} alt={nome} className="author__img" />
          <div className="author__info">
            <strong>{nome}</strong>, {cargo}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
