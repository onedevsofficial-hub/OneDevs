import './VersoesSobre.css'

export default function Versoes(){
    return(
        <section id="versoes">
            <h2>Versões</h2>

            <div className="card">
                <p className="versoes-p">Versão 1.0</p>
                <br />
                <p className="versoes-p">Data de lançamento:</p>
                <br />  
                <p className="versoes-p">Tamanho - </p>
                <br />
                <button className="btn-versoes">Dowload</button>
                
            </div>
        </section>
    )
}