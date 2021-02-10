import logo from "../../assets/img/logo-meowrentacar.png";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          src={logo}
          className="header__logo--img"
          alt="Logo da Meow Rent a Car"
        />
      </div>

      <div className="header__menu">
        <ul>
          <li>
            <a href="#">Meus Pedidos</a>
            <a href="#">Meus Check-ups</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Buscar</a>
          </li>
          <li>
            <a href="#">Logar</a>
            <a href="#">Sair</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
