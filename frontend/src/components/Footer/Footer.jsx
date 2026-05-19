import { useState } from 'react';
import './Footer.css'

export default function Footer(){

    const [email, setEmail] = useState("")

    async function cadastrarEmail() {
        if (!email) return
            try {
            const response = await fetch('http://localhost:3000/newsletter/cadastrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const resultado = await response.json();

            if (response.ok) {
                alert('Inscrição feita com sucesso! Verifique sua caixa de entrada.');

            } else {
                alert(`Erro: ${resultado.message}`);
            }
        } catch (error) {
            console.error('Erro de conexão:', error);
            alert('Não foi possível conectar ao servidor do backend.');
        }
    }

    return(
        <>
        <div className="footer">
            <div>
                <h3>OneDevsOS</h3>
                <p>Segurança e tecnologia</p>
            </div>

            <div className="navegacao-footer">
                <h4>Navegação</h4>
                <a href="#hero">Início</a>
                <br />
                <a href="#sobre">Sobre</a>
                <br />
                <a href="#paraquem">Para Quem</a>
                <br />
                <a href="#ferramentas">Ferramentas Utilizadas</a>
                <br />
                <a href="#porque">Por Que usar?</a>
                <br />
                <a href="#versoes">Versões</a>
                <br />
                <a href="/integrantes">Integrantes</a>
            </div>

            <div className="card-news">
                <h4>NewsLatter</h4>
                <p>Você receberá novidades sobre o nosso projeto!</p>
                <input type="email" placeholder="Digite seu email" value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
                <button className="btn-footer" onClick={cadastrarEmail} >Enviar</button>
            </div>
            
        </div>
        


        
            </>
    )
}