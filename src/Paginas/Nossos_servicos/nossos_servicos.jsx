import React from "react";
import "./nossos_servicos.css";
import IconeCasa from "../../components/image/Casaa.png"; 
import Divisor from "../../components/Divisor/divisor";
import { Link } from "react-router-dom";
import TopPages from "../../components/TopPages/top_pages";


const NossosServicos = () => {
  return (
    <>
      <TopPages title="NOSSOS SERVIÇOS" />

      <section id="secao-servicos">
        <div className="servicos">
          <header className="header">
              <p className="subtitulo">
                Escolha o serviço ideal e solicite seu orçamento sem <br />
                compromisso.
              </p>
          </header>
            <Divisor className="espacamento-divisor" />

          <div className="servicos-grid">
            
            {/* Card 1 */}
            <div className="servico-card">
              <img src={IconeCasa} alt="Icone Serviço" className="servico-icone-img" />
              <h3>Instalação Residencial</h3>
              <p>
                Instalação completa e configuração de sistemas de monitoramento
                para casas, garantindo a proteção da sua família e do patrimônio.
              </p>
              {/* 2. Link corrigido para não recarregar a página */}
              <Link to="/contato" className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>

            {/* Card 2 */}
            <div className="servico-card">
              <img src={IconeCasa} alt="Icone Serviço" className="servico-icone-img" />
              <h3>Instalação Empresarial</h3>
              <p>
                Soluções customizadas de CFTV para empresas, escritórios e
                estabelecimentos comerciais, com foco em monitoramento
                estratégico.
              </p>
              <Link to="/contato" className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>

            {/* Card 3 */}
            <div className="servico-card">
              <img src={IconeCasa} alt="Icone Serviço" className="servico-icone-img" />
              <h3>Manutenção Preventiva</h3>
              <p>
                Visitas técnicas periódicas para limpeza, ajuste e verificação de
                hardware e software, assegurando o funcionamento ininterrupto do
                seu sistema.
              </p>
              <Link to="/contato" className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>

            {/* Card 4 */}
            <div className="servico-card">
              <img src={IconeCasa} alt="Icone Serviço" className="servico-icone-img" />
              <h3>Configuração Remota</h3>
              <p>
                Configuração de acesso via smartphone, tablets e PCs. Permite
                visualização e controle total das câmeras de qualquer lugar via
                aplicativo.
              </p>
              <Link to="/contato" className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>

            {/* Card 5 */}
            <div className="servico-card">
              <img src={IconeCasa} alt="Icone Serviço" className="servico-icone-img" />
              <h3>Venda De Equipamentos</h3>
              <p>
                Câmeras, DVRs, NVRs e acessórios de alta qualidade (Full HD, 4K,
                Wi-Fi). Venda direta com suporte técnico especializado.
              </p>
              <Link to="/contato" className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>

            {/* Card 6 */}
            <div className="servico-card">
              <img src={IconeCasa} alt="Icone Serviço" className="servico-icone-img" />
              <h3>Suporte Técnico 24/7</h3>
              <p>
                Atendimento prioritário para resolução rápida de falhas, problemas
                de conexão ou dúvidas, disponível 24 horas por dia, 7 dias por
                semana.
              </p>
              <Link to="/contato" className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>

            <div className="servico-card">
              <img src={IconeCasa} alt="Icone Serviço" className="servico-icone-img" />
              <h3>Configuração Remota</h3>
              <p>
                Configuração de acesso via smartphone, tablets e PCs. Permite
                visualização e controle total das câmeras de qualquer lugar via
                aplicativo.
              </p>
              <Link to="/contato" className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>

            {/* Card 5 */}
            <div className="servico-card">
              <img src={IconeCasa} alt="Icone Serviço" className="servico-icone-img" />
              <h3>Venda De Equipamentos</h3>
              <p>
                Câmeras, DVRs, NVRs e acessórios de alta qualidade (Full HD, 4K,
                Wi-Fi). Venda direta com suporte técnico especializado.
              </p>
              <Link to="/contato" className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>

            {/* Card 6 */}
            <div className="servico-card">
              <img src={IconeCasa} alt="Icone Serviço" className="servico-icone-img" />
              <h3>Suporte Técnico 24/7</h3>
              <p>
                Atendimento prioritário para resolução rápida de falhas, problemas
                de conexão ou dúvidas, disponível 24 horas por dia, 7 dias por
                semana.
              </p>
              <Link to="/contato" className="servico-cta">
                SOLICITAR SERVIÇO →
              </Link>
            </div>
          </div>
          <Divisor/>
        </div>
      </section>
    </> 
  );
};

export default NossosServicos;