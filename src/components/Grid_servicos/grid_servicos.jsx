import React from "react";
import "./grid_servicos.css";
import IconeCasa from "../image/icons/casa.png";
import { Link } from "react-router-dom";

const Grid_Servicos = ({ mostrarHeader = true, repetirUltimos = false }) => {

  const cards = [
    {
      titulo: "Instalação Residencial",
      descricao:
        "Instalação completa e configuração de sistemas de monitoramento para casas, garantindo a proteção da sua família e do patrimônio.",
      link: "/Contato",
      icone: IconeCasa
    },
    {
      titulo: "Instalação Empresarial",
      descricao:
        "Soluções customizadas de CFTV para empresas, escritórios e estabelecimentos comerciais, com foco em monitoramento estratégico.",
      link: "/Contato",
      icone: IconeCasa
    },
    {
      titulo: "Manutenção Preventiva",
      descricao:
        "Visitas técnicas periódicas para limpeza, ajuste e verificação de hardware e software, assegurando o funcionamento ininterrupto do seu sistema.",
      link: "/Contato",
      icone: IconeCasa
    },
    {
      titulo: "Configuração Remota",
      descricao:
        "Configuração de acesso via smartphone, tablets e PCs. Permite visualização e controle total das câmeras de qualquer lugar via aplicativo.",
      link: "/Contato",
      icone: IconeCasa
    },
    {
      titulo: "Venda De Equipamentos",
      descricao:
        "Câmeras, DVRs, NVRs e acessórios de alta qualidade (Full HD, 4K, Wi-Fi). Venda direta com suporte técnico especializado.",
      link: "/Contato",
      icone: IconeCasa
    },
    {
      titulo: "Suporte Técnico 24/7",
      descricao:
        "Atendimento prioritário para resolução rápida de falhas, problemas de conexão ou dúvidas, disponível 24 horas por dia, 7 dias por semana.",
      link: "/Contato",
      icone: IconeCasa
    }
  ];

  // Se a prop repetirUltimos for true -> repete os 3 últimos
  const cardsFinais = repetirUltimos
    ? [...cards, ...cards.slice(-3)]
    : cards;

  return (
    <section id="secao-servicos">
      <div className="servicos">

        {mostrarHeader && (
          <header className="header">
            <div className="titulo-wrapper">
              <span className="titulo">NOSSOS SERVIÇOS</span>
              <p className="subtitulo">
                Escolha o serviço ideal e solicite seu orçamento sem
                <br /> compromisso.
              </p>
            </div>
            <Link to="/servicos" className="ver-mais">
              VER MAIS
            </Link>
          </header>
        )}

        <div className="servicos-grid">
          {cardsFinais.map((card, index) => (
            <div className="servico-card" key={index}>
              <img
                src={card.icone}
                alt="Icone Serviço"
                className="servico-icone-img"
              />
              <h3>{card.titulo}</h3>
              <p>{card.descricao}</p>

              <Link to={card.link} className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Grid_Servicos;
