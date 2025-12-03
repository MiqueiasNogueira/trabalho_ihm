import React, { useState } from 'react';
import './duvidas_frequentes.css'; 

// Dados estáticos para o FAQ
const faqData = [
  {
    id: 1,
    pergunta: "A câmera funciona à noite?",
    resposta: "Sim, todas as nossas câmeras são equipadas com visão noturna infravermelha, garantindo monitoramento completo mesmo na escuridão total."
  },
  {
    id: 2,
    pergunta: "As câmeras têm áudio?",
    resposta: "Sim, a maioria dos nossos modelos de câmeras IP possui microfones embutidos para captação de áudio de alta qualidade, que pode ser acessado remotamente."
  },
  {
    id: 3,
    pergunta: "As câmeras funcionam com Wi-Fi 5GHz?",
    resposta: "Nossas câmeras são otimizadas para a banda de 2.4GHz, que oferece maior alcance e estabilidade para sistemas de segurança. Modelos específicos de 5GHz estão disponíveis mediante consulta."
  },
  {
    id: 4,
    pergunta: "As câmeras gravam apenas em cartão de memória?",
    resposta: "Nossas soluções oferecem múltiplas opções de gravação, incluindo cartão de memória (local) e armazenamento em nuvem, garantindo redundância e segurança dos dados."
  },
  {
    id: 5,
    pergunta: "Se faltar internet, a câmera continua gravando?",
    resposta: "Sim, desde que esteja com um cartão de memória (até 128GB). Nesse caso, as gravações ficam salvas localmente e podem ser acessadas depois."
  }
];

const DuvidasFrequentes = () => {
  const [openId, setOpenId] = useState(null); 
  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="secao-faq">
      
      <div className="faq-wrapper">
        
        <h2 className="faq-titulo">DÚVIDAS FREQUENTES</h2>
        
        <div className="faq-lista">
          
          {faqData.map((item) => (
            <div className="faq-item" key={item.id}>
              
              <button 
                className="faq-pergunta"
                onClick={() => toggleFAQ(item.id)}
                aria-expanded={openId === item.id}
                aria-controls={`resposta-${item.id}`} 
              >

                <span>{item.pergunta}</span>
                
                {/* Ícone de Expansão (Muda dependendo do estado) */}
                <span className="faq-icone">
                  {openId === item.id ? '−' : '+'}
                </span>
              </button>
              
              <div 
                id={`resposta-${item.id}`}
                className={`faq-resposta ${openId === item.id ? 'aberta' : ''}`}
              >
                <p>{item.resposta}</p>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default DuvidasFrequentes;