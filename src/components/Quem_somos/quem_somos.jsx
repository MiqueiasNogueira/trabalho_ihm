import React from "react";
import "./quem_somos.css";
import ImagemPrincipal from "../image/Membros.png";
import { Link } from "react-router-dom";


const Quem_Somos = () => {
  return (
    <section id="secao-quem-somos">
      
      {/* Container que irá segurar as duas colunas */}
      <div className="quem-somos-container">
        
        <div className="coluna-midia">
            <img 
            src={ImagemPrincipal}
            alt="Membros da equipe MikService" />
        </div>
        

        <div className="coluna">
          
          <h2 className="titulo">QUEM SOMOS</h2>
          
          <div className="texto">
            <p>A MikService nasceu em 2024 com o objetivo de oferecer soluções completas em segurança eletrônica. O que começou com a instalação de câmeras para proteção familiar tornou-se uma empresa de confiança, reconhecida pela dedicação e pelo crescimento construído através das indicações de clientes satisfeitos.</p>
            
            <p>Hoje, a MikService atua com instalação de câmeras, venda de acessórios, manutenção especializada e produção de conteúdos sobre segurança. Nosso propósito é garantir proteção, tranquilidade e resultados, sempre com profissionalismo e atenção aos detalhes, buscando ser referência no setor e parceira de quem valoriza a segurança de verdade.</p>
          </div>
          
          {/* Área de Estatísticas (Flexbox) */}
          <div className="estatisticas">
            
            {/* Item 1 */}
            <div className="estatistica-item">
              <span className="valor">10.000</span>
              <span className="descricao">Clientes <br /> Atendidos</span>
            </div>
            
            {/* Item 2 */}
            <div className="estatistica-item">
              <span className="valor">12.000</span>
              <span className="descricao">Serviços <br /> Prestados</span>
            </div>
            
            {/* Item 3 */}
            <div className="estatistica-item">
              <span className="valor">5</span>
              <span className="descricao">Cidades Cobertas</span>
            </div>
          </div>
          <Link to="/sobre">
           <button className="btn-saiba-mais">SAIBA MAIS</button>
           </Link>
        </div>
      </div>
    </section>
  );
}

export default Quem_Somos;