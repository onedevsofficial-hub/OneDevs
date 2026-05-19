import './integrantes.css';

import Luis from "./imgs/Luis.jpg";
import Fernando from "./imgs/Fernando.jpg";
import Kaue from "./imgs/Kaue.jpg";
import Alber from "./imgs/Alber.jpg";
import Gabriel from "./imgs/Gabriel.jfif";
import Caike from "./imgs/Caike.jfif";

const teamMembers = [
  {
    nome: "Luis Otavio",
    titulo: "Desenvolvedor Web",
    descricao: "Responsável pelo desenvolvimento Web.",
    foto: Luis
  },
  {
    nome: "Fernando Henrique",
    titulo: "Product Owner (P.O)",
    descricao: "Responsável por estruturar e organizar a documentação do projeto.",
    foto: Fernando
  },
  {
    nome: "Kauê Lemos",
    titulo: "Designer Gráfico",
    descricao: "Responsável pelas artes do projeto e apresentações.",
    foto: Kaue
  },
  {
    nome: "Caike Batista",
    titulo: "Desenvolvedor BackEnd",
    descricao: "Responsável pelo desenvolvimento BackEnd e implementação do banco de dados.",
    foto: Caike
  },
  {
    nome: "Alber Tolin",
    titulo: "Desenvolvedor BackEnd",
    descricao: "Responsável pelo desenvolvimento BackEnd e implementação do banco de dados.",
    foto: Alber
  },
  {
    nome: "Gabriel Santana",
    titulo: "Administrador de Sistemas Linux",
    descricao:"Desenvolveu um sistema completo em Linux, realizando implementação, testes e documentação.",
    foto: Gabriel
  }
];

export default function Time() {
  return (
    <section id="integrantes" className="team-section">
      <div className="team-container">

        <h2 className="team-title">Equipe OneDevs</h2>

        <p className="team-subtitle">
          Conheça as mentes por trás do projeto OneDevs.
        </p>

        <div className="team-list">
          {teamMembers.map((member, index) => (

            <div
              key={index}
              className={`member-card ${index % 2 !== 0 ? 'reverse' : ''}`}
            >

              <div className="avatar-wrapper">
                <img
                  src={member.foto}
                  alt={`Foto de ${member.nome}`}
                  className="avatar-img"
                />
              </div>

              <div className="membro-info">

                <h3 className="membro-nome">
                  {member.nome}
                </h3>

                <p className="membro-titulo">
                  {member.titulo}
                </p>

                <p className="membro-descricao">
                  <span className="highlight-label">
                    Contribuições:
                  </span>{" "}
                  {member.descricao}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}