import React, { useState, useEffect, useRef } from "react";
import "./formulario_contato.css";
import FundoCidade from "../image/fundo-cidade.png";

const FormularioContato = () => {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: "",
  });

  const [erros, setErros] = useState({});
  const mapRef = useRef(null);

  const alterar = (e) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });

    if (erros[name]) {
      setErros({ ...erros, [name]: null });
    }
  };

const validar = () => {
  const errosTemp = {};
  let valido = true;

  // Nome
  if (!dados.nome.trim()) {
    errosTemp.nome = "Digite seu nome.";
    valido = false;
  }

  // Email
  if (!dados.email.trim()) {
    errosTemp.email = "Digite seu e-mail.";
    valido = false;
  } else if (!/\S+@\S+\.\S+/.test(dados.email)) {
    errosTemp.email = "E-mail inválido.";
    valido = false;
  }

  // Telefone
  if (!dados.telefone.trim()) {
    errosTemp.telefone = "Digite seu telefone.";
    valido = false;
  }

  // Mensagem
  if (!dados.mensagem.trim()) {
    errosTemp.mensagem = "Escreva sua mensagem.";
    valido = false;
  }

  setErros(errosTemp);
  return valido;
};


  const enviar = (e) => {
    if (!validar()) {
      e.preventDefault();
      return;
    }
  };

  // MAPA
  useEffect(() => {
    const local = { lat: -14.227784, lng: -42.619647 };
    const element = document.getElementById("mapa");

    let tentar = setInterval(() => {
      if (element && window.google?.maps?.Map) {
        clearInterval(tentar);

        if (!mapRef.current) {
          const mapa = new window.google.maps.Map(element, {
            center: local,
            zoom: 15,
          });

          new window.google.maps.Marker({
            position: local,
            map: mapa,
            title: "Localização",
          });

          mapRef.current = mapa;
        }
      }
    }, 120);

    return () => clearInterval(tentar);
  }, []);

  return (
    <div
      id="fundo"
      style={{
        backgroundImage: `url(${FundoCidade})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <section id="contato-secao">
        <div className="contato-caixa">
          {/* FORMULÁRIO */}
          <div className="coluna-form">
            <h2 className="titulo-form">Contato</h2>

            <form
              action="https://formsubmit.co/miqueiasnogueirasantos567@gmail.com"
              method="POST"
              onSubmit={enviar}
              className="form"
            >
              {/* Anti-spam obrigatório no FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Novo contato do site!" />
              <input type="hidden" name="_template" value="box" />

              <div className="linhaa">
                <div className="campo">
                  <input
                    type="text"
                    name="nome"
                    placeholder="NOME"
                    value={dados.nome}
                    onChange={alterar}
                    className={erros.nome ? "erro" : ""}
                  />
                  {erros.nome && <p className="msg-erro">{erros.nome}</p>}
                </div>

                <div className="campo">
                  <input
                    type="email"
                    name="email"
                    placeholder="EMAIL"
                    value={dados.email}
                    onChange={alterar}
                    className={erros.email ? "erro" : ""}
                  />
                  {erros.email && <p className="msg-erro">{erros.email}</p>}
                </div>
              </div>

              <div className="linhaa">
                <input
                  type="tel"
                  name="telefone"
                  placeholder="TELEFONE"
                  value={dados.telefone}
                  onChange={alterar}
                  className={erros.telefone ? "erro" : ""}
                />

                <select name="servico" value={dados.servico} onChange={alterar}>
                  <option value="" disabled> SERVIÇO </option>
                  <option value="residencial">Instalação Residencial</option>
                  <option value="empresarial">Instalação Empresarial</option>
                  <option value="manutencao">Manutenção</option>
                </select>
              </div>

              {erros.telefone && <p className="msg-erro">{erros.telefone}</p>}

              <textarea
                name="mensagem"
                placeholder="DETALHES DO SERVIÇO"
                value={dados.mensagem}
                onChange={alterar}
                rows="4"
                className={erros.mensagem ? "erro" : ""}
              />

              {erros.mensagem && <p className="msg-erro">{erros.mensagem}</p>}

              <button type="submit" className="botao-enviar">ENVIAR</button>
            </form>
          </div>

          {/* MAPA */}
          <div className="coluna-mapa">
            <div id="mapa"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormularioContato;
