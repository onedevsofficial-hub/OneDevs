import './integrantes.css'

import Luis from '../imgs/Luis.jpg'
import Fernando from "../imgs/Fernando.jpg";
import Kaue from "../imgs/Kaue.jpg";
import Alber from "../imgs/Alber.jpg";
import Gabriel from "../imgs/Gabriel.jfif";
import Caike from "../imgs/Caike.jfif";

const teamMembers = [
  {
    nome: "Luis Otavio",
    titulo: "Desenvolvedor Web",
    descricao: "Responsável pelo desenvolvimento e implementação da interface web do projeto. Atuou na criação de componentes reutilizáveis, integração das funcionalidades da aplicação e otimização da experiência do usuário, contribuindo para uma plataforma moderna, responsiva e de fácil manutenção.",
    foto: Luis
  },
  {
    nome: "Fernando Henrique",
    titulo: "Product Owner (P.O)",
    descricao: "Atuou como responsável pela definição e priorização dos requisitos do projeto, garantindo o alinhamento entre as necessidades dos stakeholders e os objetivos da equipe. Contribuiu para a organização do backlog, validação das entregas e tomada de decisões estratégicas, assegurando que o produto desenvolvido agregasse valor ao usuário final e atendesse aos requisitos propostos.",
    foto: Fernando
  },
  {
    nome: "Kauê Lemos",
    titulo: "Designer Gráfico",
    descricao: "Foi responsável pela identidade visual do projeto, desenvolvendo materiais gráficos que contribuíram para a clareza e profissionalismo das entregas. Elaborou os slides e estruturou as apresentações, organizando o conteúdo de forma visualmente atrativa e objetiva. Também atuou na preparação das apresentações, garantindo uma comunicação eficaz dos resultados e das principais propostas do projeto.",
    foto: Kaue
  },
  {
    nome: "Caike Batista",
    titulo: "Desenvolvedor BackEnd",
    descricao: "Atuou no desenvolvimento da arquitetura Back-End do projeto, sendo responsável pela implementação das regras de negócio e pela integração entre os diferentes módulos do sistema. Também participou da modelagem e implementação do banco de dados, garantindo uma estrutura organizada, segura e eficiente para o armazenamento e a recuperação das informações essenciais ao funcionamento da aplicação.",
    foto: Caike
  },
  {
    nome: "Alber Tolin",
    titulo: "Desenvolvedor BackEnd",
    descricao: "Foi responsável pelo desenvolvimento da arquitetura Back-End do projeto, implementando as regras de negócio e garantindo a integração entre os diferentes componentes do sistema. Também atuou na modelagem e implementação do banco de dados, assegurando a organização, integridade e eficiência no armazenamento e recuperação das informações necessárias para o funcionamento da aplicação.",
    foto: Alber
  },
  {
    nome: "Gabriel Santana",
    titulo: "Administrador de Sistemas Linux",
    descricao:"Foi responsável pela administração e configuração do ambiente Linux utilizado no projeto, garantindo sua estabilidade, segurança e desempenho. Desenvolveu e implementou um sistema completo em Linux, realizando a instalação, configuração e integração dos componentes necessários. Também conduziu testes para validação do funcionamento da solução e elaborou a documentação técnica, contribuindo para a manutenção, replicação e continuidade do projeto.",
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