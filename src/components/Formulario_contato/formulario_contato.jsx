import React, { useState, useEffect, useRef } from 'react';
import './formulario_contato.css';

/* global google */


const FormularioContato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        servico: '',
        mensagem: ''
    });

    const [errors, setErrors] = useState({});
    const [statusMessage, setStatusMessage] = useState('');
    const mapRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

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
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            console.log("Dados Enviados:", formData);
            setStatusMessage('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                servico: '',
                mensagem: ''
            });
        } else {
            setStatusMessage('Por favor, preencha todos os campos obrigatórios.');
        }
    };
    
  
    useEffect(() => {
        const defaultLocation = { lat: -14.227721, lng: -42.619614 }; 
        const mapElement = document.getElementById("google-map");

        // Verifica se a API do Google Maps (objeto 'google') foi carregada globalmente
        if (mapElement && typeof google !== 'undefined') {
            const map = new google.maps.Map(mapElement, {
                center: defaultLocation,
                zoom: 18,
            });

            mapRef.current = map;

            new google.maps.Marker({
                position: defaultLocation,
                map,
                title: "Localização da MikService"
            });
        }
        
        return () => {
            if (mapRef.current) {
                // Remove a referência ao objeto do mapa para liberar a memória
                mapRef.current = null; 
            }
        };
 }, []);

    return (
        <section id="secao-contato">
            <div className="contato-wrapper">
                <div className="formulario-coluna">
                    <h2 className="formulario-titulo">Contato</h2>

                    {statusMessage && <p className={`status-message ${errors.nome ? 'error' : 'success'}`}>{statusMessage}</p>}

                    <form onSubmit={handleSubmit} className="contato-form">
                        <div className="input-row">
                            <input
                                type="text"
                                name="nome"
                                placeholder="NOME"
                                value={formData.nome}
                                onChange={handleChange}
                                className={errors.nome ? 'input-error' : ''}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="EMAIL"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'input-error' : ''}
                            />
                        </div>

                        {errors.nome && <span className="error-text">{errors.nome}</span>}
                        {errors.email && <span className="error-text">{errors.email}</span>}

                        <div className="input-row">
                            <input
                                type="tel"
                                name="telefone"
                                placeholder="Numero de celular"
                                value={formData.telefone}
                                onChange={handleChange}
                                className={errors.telefone ? 'input-error' : ''}
                            />

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

                <div className="mapa-coluna">
                    <div id="google-map">
                        {/* Mapa inserido com javaScript*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

    export default FormularioContato;