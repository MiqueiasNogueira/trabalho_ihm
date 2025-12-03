import React, { useState, useEffect, useRef } from 'react';
import './formulario_contato.css';
import FundoCidade from '../image/fundo-cidade.png';



const FormularioContato = () => {
    // 1. Estados do Formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        servico: '',
        mensagem: ''
    });

    const [errors, setErrors] = useState({});
    const [statusMessage, setStatusMessage] = useState('');
    
    // Referência para guardar o mapa e não recriar a cada renderização
    const mapRef = useRef(null);

    // 2. Lógica de Atualização dos Campos
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Limpa o erro ao digitar
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    // 3. Validação
    const validate = () => {
        let currentErrors = {};
        let isValid = true;

        if (!formData.nome.trim()) {
            currentErrors.nome = 'O nome é obrigatório.';
            isValid = false;
        }
        if (!formData.email.trim()) {
            currentErrors.email = "O e-mail é obrigatório.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            currentErrors.email = "E-mail inválido.";
            isValid = false;
        }
        if (!formData.telefone.trim()) {
            currentErrors.telefone = "O telefone é obrigatório.";
            isValid = false;
        }
        if (!formData.mensagem.trim()) {
            currentErrors.mensagem = "Os detalhes são obrigatórios.";
            isValid = false;
        }

        setErrors(currentErrors);
        return isValid;
    };
    
    // 4. Envio do Formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log("Dados Enviados:", formData);
            setStatusMessage('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            setFormData({ nome: '', email: '', telefone: '', servico: '', mensagem: '' });
        } else {
            setStatusMessage('Por favor, preencha todos os campos obrigatórios.');
        }
    };
    
    // 5. Integração com Google Maps (Lógica de Espera)
    // ---------------------------------------------------------
    // LÓGICA DO MAPA COM VERIFICAÇÃO DE CARREGAMENTO
    // ---------------------------------------------------------
    useEffect(() => {
        const defaultLocation = { lat: -14.227784, lng: -42.619647 }; // Sua localização
        const mapElement = document.getElementById("google-map");

        const initializeMap = () => {
            // Verifica se o elemento existe e se a API já carregou a classe Map
            if (mapElement && window.google && window.google.maps && window.google.maps.Map) {
                
                // Evita recriar o mapa se já existir
                if (!mapRef.current) {
                    const map = new window.google.maps.Map(mapElement, {
                        center: defaultLocation,
                        zoom: 15,
                    });

                    mapRef.current = map;

                    new window.google.maps.Marker({
                        position: defaultLocation,
                        map,
                        title: "Localização da MikService"
                    });
                }
                return true; // Sucesso
            }
            return false; // Ainda não carregou
        };

        // Tenta inicializar imediatamente
        if (!initializeMap()) {
            // Se falhar, tenta a cada 100ms até conseguir
            const checkGoogle = setInterval(() => {
                if (initializeMap()) {
                    clearInterval(checkGoogle); // Para de tentar quando der certo
                }
            }, 100);

            // Limpeza do intervalo se o usuário sair da página
            return () => clearInterval(checkGoogle);
        }

        // Limpeza do mapa ao desmontar
        return () => {
            if (mapRef.current) {
                mapRef.current = null;
            }
        };
    }, []);

    // 6. Renderização (JSX)
    return (
        <div id="wrapper-fundo" style={{ 
            backgroundImage: `url(${FundoCidade})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            width: '100%'
        }}>
            <section id="secao-contato">
                <div className="contato-wrapper">
                    
                    {/* Coluna Esquerda: Formulário */}
                    <div className="formulario-coluna">
                        <h2 className="formulario-titulo">Contato</h2>

                        {statusMessage && <p className={`status-message ${Object.keys(errors).length === 0 ? 'success' : 'error'}`}>{statusMessage}</p>}

                        <form onSubmit={handleSubmit} className="contato-form">
                            <div className="input-row">
                                <div style={{width: '100%'}}>
                                    <input
                                        type="text"
                                        name="nome"
                                        placeholder="NOME"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        className={errors.nome ? 'input-error' : ''}
                                    />
                                </div>
                                <div style={{width: '100%'}}>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="EMAIL"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'input-error' : ''}
                                    />
                                </div>
                            </div>
                            {errors.nome && <span className="error-text">{errors.nome}</span>}
                            {errors.email && <span className="error-text">{errors.email}</span>}

                            <div className="input-row">
                                <div style={{width: '100%'}}>
                                    <input
                                        type="tel"
                                        name="telefone"
                                        placeholder="NÚMERO DE CELULAR"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        className={errors.telefone ? 'input-error' : ''}
                                    />
                                </div>
                                <div style={{width: '100%'}}>
                                    <select
                                        name="servico"
                                        value={formData.servico}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>SERVIÇO</option>
                                        <option value="instalacao-res">Instalação Residencial</option>
                                        <option value="instalacao-emp">Instalação Empresarial</option>
                                        <option value="manutencao">Manutenção Preventiva</option>
                                    </select>
                                </div>
                            </div>
                            {errors.telefone && <span className="error-text">{errors.telefone}</span>}

                            <textarea
                                name="mensagem"
                                placeholder="DETALHES DA INSTALAÇÃO"
                                value={formData.mensagem}
                                onChange={handleChange}
                                className={errors.mensagem ? 'input-error' : 'input-mensagem'}
                                rows="4"
                            />
                            {errors.mensagem && <span className="error-text">{errors.mensagem}</span>}

                            <button type="submit" className="btn-enviar">
                                ENVIAR
                            </button>
                        </form>
                    </div>

                    {/* Coluna Direita: Mapa */}
                    <div className="mapa-coluna">
                        <div id="google-map"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FormularioContato;