import './VersoesSobre.css'
import { useNavigate } from "react-router-dom";

export default function Versoes(){

    const handleDownload = () => {


    //  TESTE 
     const downloadLink = "https://sourceforge.net/projects/ventoy/files/v1.1.11/Ventoy%201.1.11%20release%20(6th%20Anniversary%20Ver.)%20source%20code.zip/download";

     // abre o download em nova aba
    window.open(downloadLink, "_blank");
    };

  const navigate = useNavigate(); 

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
                <button className="btn-versoes" onClick={handleDownload}>Download</button>
                
            </div>
        </section>
    )
}