import logo from "../../assets/img/logo-meowrentacar.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img
          src={logo}
          className="footer__logo--img"
          alt="Logo da Meow Rent a Car"
        />
      </div>
    </div>
  );
}

export default Footer;
