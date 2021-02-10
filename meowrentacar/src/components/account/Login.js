import logo from "../../../assets/img/logo-meowrentacar.png";

function Login() {
  return (
    <div className="login">
      <div className="login__img">
        <img
          src={logo}
          className="header__logo--img"
          alt="Logo da Meow Rent a Car"
        />
      </div>

      <div className="login__form">
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button type="submit">Logar</button>
        </form>

        <a href="#">Cadastre-se</a>
      </div>
    </div>
  );
}

export default Login;
