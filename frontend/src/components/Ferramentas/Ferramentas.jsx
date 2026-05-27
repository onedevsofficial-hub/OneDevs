import { useState } from "react";
import './Ferramentas.css'

export default function Ferramentas(){

    const ferramentas = [
        {nome: "Wireshark", imagem:"https://images.icon-icons.com/159/PNG/256/wireshark_22388.png" },

        {nome: "Firewall", imagem: "https://cdn-icons-png.flaticon.com/512/811/811683.png" },

        {nome: "Fail2Ban", imagem: "https://cybergladius.com/wp-content/uploads/2021/07/fail2ban-1-981x1024.png"}, 

        {nome: "VSCode", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"}, 

        {nome: "NPM",imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg"}, 

        {nome: "NodeJS", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"}, 

        {nome:"Python", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},

        {nome: "Go", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"},

        {nome: "Git", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"}, 
        
        {nome: "Podman", imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/podman/podman-original.svg"}
    ];

    const [index, setIndex] = useState(0);

    const atras = () => {
        setIndex((prev) => (prev - 1 + ferramentas.length) % ferramentas.length);
    };

    const frente = () => {
        setIndex((prev) => (prev + 1) % ferramentas.length);
    };

    return(
        <section id="ferramentas">

            <h2>Ferramentas Utilizadas</h2>

            <p className="p-ferramentas">
                Principais ferramentas de segurança cibernética
            </p>

            <div className="carrosel">

                <button onClick={atras} className="btn">
                    ←
                </button>

                <div className="tool-container">

                    <div className="tool">

                        <img 
                            src={ferramentas[index].imagem} 
                            alt={ferramentas[index].nome} 
                        />

                    </div>

                    <p className="tool-name">
                        {ferramentas[index].nome}
                    </p>

                </div>

                <button onClick={frente} className="btn">
                    →
                </button>

            </div>

        </section>
    );
}