import './VersoesSobre.css'
export default function Versoes(){

    // QUANDO O USUÁRIO CLICAR NO BOTÃO JÁ FAZ O DOWLOAD NA PRÓPRIA MÁQUINA 
//     function baixarArquivo() {
//     const link = document.createElement('a');

//     link.href = '/onedevsos-alberteinstein-1.0-amd64.iso';
//     link.download = 'onedevsos-alberteinstein-1.0-amd64.iso';

//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }


    return(
        <section id="versoes">
            <h2>Versões</h2>

            <div className="card">
                <p className="versoes-p">Versão 1.0 (BETA)</p>
                <br />
                <p className="versoes-p">Data de lançamento: 23/06/2026 </p>
                <br />  
                <p className="versoes-p">Tamanho - 3.1 GB </p>
                <br />
                <button className="btn-versoes" onClick={baixarArquivo}>Download</button>
                
            </div>
        </section>
    )
}
