import logo from "../../../assets/img/logo-meowrentacar.png";

function Card() {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src={logo}
          className="header__logo--img"
          alt="Logo da Meow Rent a Car"
        />
      </div>

      <div className="card__info">
        <h3>Nome do carro</h3>

        <ul className="card__info--list">
          <li>Marca</li>
          <li>Modelo</li>
          <li>Ano</li>
          <li>Valor hora</li>
          <li>Combustível</li>
          <li>Limite porta-malas</li>
          <li>Categoria</li>
        </ul>

        <div className="card__info--action">
          <a className="card__info--main" href="#">
            Simular
          </a>

          <a className="card__info--snd" href="#">
            Agendar
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
