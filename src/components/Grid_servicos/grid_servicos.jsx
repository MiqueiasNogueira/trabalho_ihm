import React from 'react';
import './Grid_Servicos.css'; 

const Grid_Servicos = () => {
  return (
    <section id="secao-servicos">
      
      <div className="servicos">
        <header className="header">
          <div className="titulo-wrapper">
                <h2 className="titulo">NOSSOS SERVIÇOS</h2>
                <p className="subtitulo">
                    Escolha o serviço ideal e solicite seu orçamento sem compromisso.
                </p>
            </div>
            <a href="/servicos" className="ver-mais">VER MAIS</a>
        </header>

        <div className="servicos-grid">
          <div className="servico-card">
            <span className="icone">🏠</span> 
            <h3>Instalação Residencial</h3>
            <p>Instalação completa e configuração de sistemas de monitoramento para casas, garantindo a proteção da sua família e do patrimônio.</p>
            <a href="#" className="servico-cta">SOLICITAR SERVIÇO →</a>
          </div>
          
          <div className="servico-card">
            <span className="icone">🏢</span>
            <h3>Instalação Empresarial</h3>
            <p>Soluções customizadas de CFTV para empresas, escritórios e estabelecimentos comerciais, com foco em monitoramento estratégico.</p>
            <a href="#" className="servico-cta">SOLICITAR SERVIÇO →</a>
          </div>
          
          {/* Card 3: Manutenção Preventiva */}
          <div className="servico-card">
            <span className="icone">🛠️</span>
            <h3>Manutenção Preventiva</h3>
            <p>Visitas técnicas periódicas para limpeza, ajuste e verificação de hardware e software, assegurando o funcionamento ininterrupto do seu sistema.</p>
            <a href="#" className="servico-cta">SOLICITAR SERVIÇO →</a>
          </div>
          
          {/* Card 4: Configuração Remota */}
          <div className="servico-card">
            <span className="icone">📱</span>
            <h3>Configuração Remota</h3>
            <p>Configuração de acesso via smartphone, tablets e PCs. Permite visualização e controle total das câmeras de qualquer lugar via aplicativo.</p>
            <a href="#" className="servico-cta">SOLICITAR SERVIÇO →</a>
          </div>
          
          {/* Card 5: Venda De Equipamentos */}
          <div className="servico-card">
            <span className="icone">🛒</span>
            <h3>Venda De Equipamentos</h3>
            <p>Câmeras, DVRs, NVRs e acessórios de alta qualidade (Full HD, 4K, Wi-Fi). Venda direta com suporte técnico especializado.</p>
            <a href="#" className="servico-cta">SOLICITAR SERVIÇO →</a>
          </div>

          {/* Card 6: Suporte Técnico 24/7 */}
          <div className="servico-card">
            <span className="icone">📞</span>
            <h3>Suporte Técnico 24/7</h3>
            <p>Atendimento prioritário para resolução rápida de falhas, problemas de conexão ou dúvidas, disponível 24 horas por dia, 7 dias por semana.</p>
            <a href="#" className="servico-cta">SOLICITAR SERVIÇO →</a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Grid_Servicos;