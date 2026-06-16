import { useNavigate } from "react-router-dom";
import './Header.css'
import logoImg from "../assets/LOGO_OD.png";

export default function Header(){

    const navigate = useNavigate();

    function goToSection(id){
        navigate("/");
        
        setTimeout(() => {
            const element = document.getElementById(id);
            if(element){
                element.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
    }

    return(
        <header className="header">
            <div className="header-logo-container">
                <img src={logoImg} alt="Logo OneDevs" />
                <h2 onClick={()=> goToSection("hero")}>OneDevsOS</h2>
            </div>

            <nav>
                <span onClick={() => goToSection("hero")}>
                    Início
                </span>

                <span onClick={() => goToSection("paraquem")}>
                    Para quem
                </span>

                <span onClick={() => goToSection("ferramentas")}>
                    Ferramentas
                </span>

                <span onClick={() => goToSection("porque")}>
                    Por que usar
                </span>

                <span onClick={() => goToSection("versoes")}>
                    Versões
                </span>

                <span onClick={() => goToSection("sobre")}>
                    Sobre
                </span>

                <span onClick={() => navigate("/integrantes")}>
                    Integrantes
                </span>

                <span onClick={() => navigate("/contato")}>
                    Contato
                </span>

                <span onClick={()=> navigate("/documentacao")}>
                    Documentação
                </span>
            </nav>
        </header>
    )
}