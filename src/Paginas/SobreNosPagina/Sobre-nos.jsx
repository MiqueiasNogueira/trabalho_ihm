import React from "react";
import "./Sobre-nos.css";
import "@fontsource/saira-stencil-one";
import img1 from "../../components/image/mik.png";
import img2 from "../../components/image/Taylo.png";
import img3 from "../../components/image/Mik2.png";
import TopPages from "../../components/TopPages/top_pages";

function SOBRE() {
  return (
    <div>
      <TopPages title="Sobre-nos" />
      <div className="sobre-container">
        <div className="sobre-section">
          <img
            src={img1}
            alt="Instalação no teto"
            className="sobre-img leaf-style-1"
          />
          <div className="sobre-text-box box-um">
            <p>
              A MikService nasceu com o propósito de oferecer soluções completas
              em segurança eletrônica, unindo qualidade, confiança e
              profissionalismo. Nosso compromisso é proteger o que mais importa
              para você, sua residência, sua família ou o seu negócio.
            </p>
            <br />
            <p>
              A história da MikService começou em 2024, a partir de uma
              necessidade pessoal: instalar câmeras de segurança para garantir a
              proteção de um lar. O resultado despertou o interesse de amigos e
              vizinhos, que passaram a solicitar o mesmo serviço. De forma
              natural, um trabalho feito com dedicação transformou-se em uma
              empresa reconhecida, que cresce a cada dia por meio da confiança e
              da indicação de clientes satisfeitos.
            </p>
          </div>
        </div>

        <div className="sobre-section reverse">
          <div className="sobre-text-box box-dois">
            <p>Atualmente, a MikService oferece:</p>
            <ul>
              <li>- Instalação de câmeras de segurança;</li>
              <li>- Venda de acessórios especializados;</li>
              <li>- Manutenção completa após a instalação.</li>
            </ul>
            <p>
              Nosso foco é atender clientes que buscam soluções eficazes e
              profissionais para proteger seus ambientes. Trabalhamos com
              atenção a cada detalhe, garantindo sistemas confiáveis, práticos e
              que tragam tranquilidade no dia a dia.
            </p>
          </div>
          <img
            src={img2}
            alt="Mulher instalando câmera"
            className="sobre-img leaf-style-2"
          />
        </div>

        <div className="sobre-section">
          <img
            src={img3}
            alt="Manutenção no quadro"
            className="sobre-img leaf-style-1"
          />
          <div className="sobre-text-box box-tres">
            <p>
              A missão da MikService é ser referência no setor de segurança
              eletrônica, entregando produtos, serviços e conhecimento que
              impactem positivamente a vida de nossos clientes. Mais do que
              vender, acreditamos em construir confiança e em promover ambientes
              mais seguros.
            </p>
            <br />
            <p>
              A MikService é o seu parceiro na busca por segurança e proteção de
              verdade.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SOBRE;
