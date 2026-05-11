import { useState } from "react";
import WireShark from "../assets/WireShark.png";
import ParedeFire from "../assets/ParedeFire.png";
import FAIL from "../assets/FAIL.png";
import './Ferramentas.css'

export default function Ferramentas(){

    const ferramentas = [
        { nome: "Wireshark", imagem: WireShark },
        { nome: "Firewall", imagem: ParedeFire },
        {nome: "Fail2Ban", imagem: FAIL}
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

                <button onClick={atras} className="btn">←</button>

                <div className="tool">
                    <img 
                        src={ferramentas[index].imagem} 
                        alt={ferramentas[index].nome} 
                    />
                    <p>{ferramentas[index].nome}</p>
                </div>

                <button onClick={frente} className="btn">→</button>

            </div>

        </section>
    );
}