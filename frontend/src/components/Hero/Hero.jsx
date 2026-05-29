import { CgImport } from "react-icons/cg";
import { AiFillRead } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import './Hero.css'

export default function Hero() {

    const handleDownload = () => {


    //  TESTE 
     const downloadLink = "https://sourceforge.net/projects/ventoy/files/v1.1.11/Ventoy%201.1.11%20release%20(6th%20Anniversary%20Ver.)%20source%20code.zip/download";

     // abre o download em nova aba
    window.open(downloadLink, "_blank");
    };

  const navigate = useNavigate(); 

  return (
    <section id="hero" className="hero">
      <h1>Bem vindo ao OneDevsOS</h1>

      <p className="paragrafo">
        Onde a tecnologia encontra a proteção
      </p>

      <p className="paragrafo">
        Um sistema operacional focado em segurança cibernética,
        desenvolvido para profissionais e entusiastas
      </p>

      <br />

      <button onClick={handleDownload} > <CgImport /> Baixe Agora </button>  
      {/* onClick={handleDownload}  ----  ISSO TEM QUE TER ACIMA NA TAG BUTTON */}
      <br /><br />
      <button className="btn-doc"onClick={() => navigate("/documentacao")}><AiFillRead/>Documentação</button>
    </section>
  );
}
