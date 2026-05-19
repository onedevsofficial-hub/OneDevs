import { GiPadlock } from "react-icons/gi"
import { FaUserClock } from "react-icons/fa"
import { FaBoltLightning } from "react-icons/fa6"
import { GoTools } from "react-icons/go"

export default function PorQue() {
  return (
    <section id="porque">
      <h2>Por que usar o OneDevs</h2>

      <div className="cards">
        <div className="card">

           <div className="icon-container">
              <GiPadlock className="icon"/>
            </div>

          <h3>Segurança Máxima</h3>
        </div>


       

        <div className="card">

           <div className="icon-container">
              <FaUserClock className="icon"/>
            </div>

          <h3>Disponibilidade</h3>
        </div>

        <div className="card">

          <div className="icon-container">
              <FaBoltLightning className="icon"/>
            </div>

          <h3>Performance Otimizada</h3>
        </div>

        <div className="card">

          <div className="icon-container">
              <GoTools className="icon"/>
            </div>

          <h3>Ferramentas Integradas</h3>
        </div>
      </div>
    </section>
  )
}