import './Footer.css'

export default function Footer(){
    return(
        <>
        <div className="footer">
            <div>
                <h3>OneDevs</h3>
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
                <input type="email" placeholder="Digite seu email" />
                <button className="btn-footer">Enviar</button>
            </div>
            
        </div>
        


        
            </>
    )
}