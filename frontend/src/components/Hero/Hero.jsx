import { CgImport } from "react-icons/cg";
import './Hero.css'

export default function Hero() {

  //  const handleDownload = () => {
     //  COLOCAR AQUI O LINK DO APP
     // Pode ser .iso, .apk, .exe ou link da nuvem (Drive, AWS, etc)

    //  TESTE 
    //  const downloadLink = "https://sourceforge.net/projects/ventoy/files/v1.1.11/Ventoy%201.1.11%20release%20(6th%20Anniversary%20Ver.)%20source%20code.zip/download";

     // abre o download em nova aba
  //    window.open(downloadLink, "_blank");
  //  };

  return (
    <section id="hero" className="hero">
      <h1>Bem vindo ao OneDevs</h1>

      <p className="paragrafo">
        Onde a tecnologia encontra a proteção
      </p>

      <p className="paragrafo">
        Um sistema operacional focado em segurança cibernética,
        desenvolvido para profissionais e entusiastas
      </p>

      <br />

      <button > <CgImport /> Baixe Agora </button>  
      {/* onClick={handleDownload}  ----  ISSO TEM QUE TER ACIMA NA TAG BUTTON */}
    </section>
  );
}
