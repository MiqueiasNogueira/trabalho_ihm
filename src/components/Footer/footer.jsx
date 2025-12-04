import React from "react";
import "./footer.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../image/logo.png";
import FundoGrade from "../image/gradeFundo.png";
import InconeInsta from "../image/icons/Instagram.png";
import IconeLinkedin from "../image/icons/Linkedln.png";
import IconeWeb from "../image/icons/Site.png";
import IconeEmail from "../image/icons/Email.png";
import IconeTell from "../image/icons/Tell.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollDuvidas = (e) => {
    e.preventDefault(); 
    
    const targetId = "secao-faq";

      if (location.pathname === "/") {
        const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
      } else {
        navigate("/", { state: { targetId: targetId } });
    }
  };



  return (
    <div id="fundo-rodape" style={{ backgroundImage: `url(${FundoGrade})` }}>
      <footer id="rodape">
        <div className="footer-wrapper">
          <div className="footer-conteudo-principal">
            <div className="logo-e-slogan">
              <img src={Logo} alt="MikService Logo" className="footer-logo" />
            </div>

            <nav className="footer-nav">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/servicos">Serviços</Link>
                </li>
                <li>
                  <Link to="/sobre">Sobre-nos</Link>
                </li>
                <li>
                  <a href="#secao-faq" onClick={handleScrollDuvidas}>Dúvidas</a>
                </li>
                <li>
                  <Link to="/contato">Contact me</Link>
                </li>
              </ul>
            </nav>

            <div className="icones-sociais">
              <a
                href="https://www.instagram.com/miqueias__nogueira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={InconeInsta}
                  alt="Instagram"
                  className="social-icon instagram"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/miqueias-nogueira-santos-42bab92bb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={IconeLinkedin}
                  alt="LinkedIn"
                  className="social-icon linkedin"
                />
              </a>

              <a href="https://miqueiasnogueira.github.io/trabalho_ihm/">
                <img
                  src={IconeWeb}
                  alt="Website"
                  className="social-icon globe"
                />
              </a>
            </div>

            <div className="footer-contatos">
              <div className="contato-item">
                <img src={IconeEmail} alt="Email" className="contato-img" />
                <span> miqueiasnogueirasantos567@gmail.com</span>
              </div>
              <div className="contato-item">
                <img src={IconeTell} alt="Telefone" className="contato-img" />
                <span> (77) 9 8159-7626</span>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} MikService. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Barra Laranja Inferior */}
      <div className="footer-barra-laranja"></div>
    </div>
  );
};

export default Footer;
