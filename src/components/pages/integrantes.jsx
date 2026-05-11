import './integrantes.css';
import Luis from "./imgs/Luis.jpg"
import Fernando from "./imgs/Fernando.jpg"
import Kaue from "./imgs/Kaue.jpg"
import Alber from "./imgs/Alber.jpg"
import Gabriel from "./imgs/Gabriel.jfif"
import Caike from "./imgs/Caike.jfif"

const teamMembers = [
  {
    nome: "Luis Otavio",
    titulo: "Desenvolvedor Web",
    descricao: "Responsável pela Desenvolvimento Web.",
    foto: Luis
  },
  {
    nome: "Fernando Henrique ",
    titulo: "Product Owner(P.O)",
    descricao: "Repnsável por Estruturar e Organizar documentação do projeto.",
    foto: Fernando
  }, 
  {
    nome: "Kauê Lemos",
    titulo: "Designer Gráfico",
    descricao: "Responsável por Cuidar das Artes do Projeto e as Apresentações.",
    foto: Kaue
  }, 
  {
    nome: "Caike Batista",
    titulo: "Desenvolvedor BackEnd",
    descricao: "Responsável pela Desenvolvimento BackEnd e implementação do Banco de Dados.",
    foto: Caike
  }, 
  {
    nome: "Alber Tolin",
    titulo: "Desenvolvedor BackEnd ",
    descricao: "Responsável pela Desenvolvimento BackEnd e implementação do Banco de Dados.",
    foto: Alber
  }, 
  {
    nome: "Gabriel Santana",
    titulo: "Administrador de Sistemas Linux",
    descricao: "Desenvolveu um sistema completo em Linux, realizando implementação, testes e documentação do sistema.",
    foto: Gabriel
  }
];

export default function Time() {

  return (

    <section id="integrantes" className="team-section">
      <div className="team-container">

        <h2 className="team-title">Equipe OneDevs</h2>

        <p className="team-subtitle">Conheça as mentes por trás do projeto OneDevs.</p>

        <div className="team-list">
          {teamMembers.map((member, index) => (
    
            <div key={index} className={`member-card ${index % 2 !== 0 ? 'reverse' : ''}`}>

              <div className="avatar-wrapper">
                <div className="avatar-circle">
                  <img
                    src={member.foto}
                    alt={`Foto de ${member.nome}`}
                    className="avatar-img"
                  />
                </div>
              </div>

              <div className={`membro-info ${index % 2 === 0 ? '' : 'text-right-md'}`}>
                <h3 className="membro-nome">{member.nome}</h3>
                <p className="membro-titulo">{member.titulo}</p>
                <p className="membro-descricao">
                  <span className="highlight">Contribuições: </span>
                  {member.descricao}
                </p>
                <p className="membro-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}