import { MdOutlineSecurity } from "react-icons/md"
import { CgCodeSlash } from "react-icons/cg"
import { FaBuilding } from "react-icons/fa"
import { CgCoffee } from "react-icons/cg"

export default function ParaQuem(){
    return(
        <section id="paraquem">
            <h2>Para quem?</h2>

            <p>Desenvolvido para profissionais e entusiastas que trabalham com segurança cibernética</p>
            <br />

            <div className="cards">
        <div className="card" >
          
          <div className="icon-container">
          <CgCoffee className="icon"/>
            </div>

          <h3>Profissionais de TI e Segurança </h3>
          <p>Trabalhe e pratique num ambiente profissional</p>
        </div>

        <div className="card">

          <div className="icon-container">
          <MdOutlineSecurity className="icon"/>
            </div>

          <h3>Pentesters e Analstas Soc</h3>
          <p>Ferramentas voltadas à segurança</p>
        </div>

        <div className="card">

           <div className="icon-container">
          <FaBuilding className="icon"/>
            </div>

          <h3>Empresas de Tecnologia</h3>
          <p>Ambiente confiável para testes</p>
        </div>

        <div className="card">

           <div className="icon-container">
          <CgCodeSlash className="icon"/>
            </div>

          <h3>Entusiastas Linux</h3>
          <p>Explore ferramentas avançadas</p>
        </div>
      </div>
        </section>
    )
}