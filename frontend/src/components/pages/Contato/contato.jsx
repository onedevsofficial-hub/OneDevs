import "./contato.css";
import { AiFillMail } from "react-icons/ai";
import React, { useState } from 'react';

export default function Contato() {

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('https://onedevs.onrender.com/contato', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if(response.ok) {
        setStatus('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', mensagem: '' });
      } else {
        setStatus(`Erro: ${data.message}`);
      }
    } catch (error) {
      console.error('Erro na requisição: ', error);
      setStatus('Erro de conexão. Tente novamente.');
    }
  };

  return (
    <div className="contato-pagina">
      <div className="contato-esquerda">
        <h1>Contate-nos</h1>

        <div className="info">
          <p>Caso queira nos enviar uma sugestão!</p>
          <br />
          <p><strong>Email:</strong></p>    
          <p className="email-linha"> 
            <AiFillMail className="icon-contato"/> onedevsofficial@gmail.com
          </p>
        </div>
      </div>

      <div className="contato-direita">
        <div className="card-branco">
          <h1>Envie-nos uma mensagem</h1>

          <form onSubmit={handleSubmit}> 
            <input 
            type="text"
            name="nome" 
            placeholder="Nome"
            value={formData.nome}
            onChange={handleChange}
            required
            />
            <input
            type="email"
            name="email" 
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            />
            <textarea
            name="mensagem"
            placeholder="Mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
            ></textarea>

            <button type="submit" disabled={status === 'Enviando...'}>
              {status === 'Enviando...' ? 'Enviando...' : 'Enviar'}</button>
              
            {status && <p style={{ marginTop: '10px', color: status.includes('Erro') ? 'red' : 'green' }}>{status}</p>}

          </form>
        </div>
      </div>
    </div>
  );
}