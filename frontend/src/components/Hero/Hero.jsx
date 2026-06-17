import { CgImport } from "react-icons/cg";
import { AiFillRead } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import './Hero.css'

export default function Hero() {

  // QUANDO O USUÁRIO CLICAR NO BOTÃO JÁ FAZ O DOWLOAD NA PRÓPRIA MÁQUINA 
    function baixarArquivo() {
  window.open(
    'https://drive.google.com/uc?export=download&id=1ycG8OJZzN-R7pokse0lcXOE6ClPxxtKS',
    '_blank'
  );
}

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

      <button onClick={baixarArquivo} > <CgImport /> Baixe Agora </button>  
      <br /><br />
      <button className="btn-doc"onClick={() => navigate("/documentacao")}><AiFillRead/>Documentação</button>
    </section>
  );
}
