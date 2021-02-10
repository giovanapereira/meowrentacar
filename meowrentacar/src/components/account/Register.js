import logo from "../../../assets/img/logo-meowrentacar.png";

function Register() {
  return (
    <div className="register">
      <div className="register__img">
        <img
          src={logo}
          className="header__logo--img"
          alt="Logo da Meow Rent a Car"
        />
      </div>

      <div className="register__form">
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Cadastrar</button>
        </form>

        <a href="#">Logar</a>
      </div>
    </div>
  );
}

export default Register;
