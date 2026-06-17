import './VersoesSobre.css'
export default function Versoes(){

     // QUANDO O USUÁRIO CLICAR NO BOTÃO JÁ FAZ O DOWLOAD NA PRÓPRIA MÁQUINA 
    function baixarArquivo() {
    window.open(
    'https://drive.google.com/uc?export=download&id=1ycG8OJZzN-R7pokse0lcXOE6ClPxxtKS',
    '_blank'
  );
}


    return(
        <section id="versoes">
            <h2>Versões</h2>

            <div className="card">
                <p className="versoes-p">Versão 1.0 (BETA)</p>
                <br />
                <p className="versoes-p">Data de lançamento: 23/06/2026 </p>
                <br />  
                <p className="versoes-p">Tamanho - 3.0 GB </p>
                <br />
                <button className="btn-versoes" onClick={baixarArquivo}>Download</button>
                
            </div>
        </section>
    )
}
