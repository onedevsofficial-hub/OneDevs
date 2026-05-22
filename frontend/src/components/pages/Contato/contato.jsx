import "./contato.css";
import { AiFillMail } from "react-icons/ai";

export default function Contato() {
  return (
    <div className="contato-pagina">
      <div className="contato-esquerda">
        <h1>Contate-nos</h1>

        <div className="info">
          <p>Caso queira nos enviar uma sugestão!</p>
          <br />
          <p><strong>Email:</strong></p>    
          <p className="email-linha"> 
            <AiFillMail className="icon-contato"/> onedevsofficial@gmail.com
          </p>
        </div>
      </div>

      <div className="contato-direita">
        <div className="card-branco">
          <h1>Envie-nos uma mensagem</h1>

          <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Mensagem"></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}