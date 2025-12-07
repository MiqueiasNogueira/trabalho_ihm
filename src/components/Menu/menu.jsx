import { useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom"; // 1. IMPORTAÇÃO DO LINK
import logo from "../image/logo.png";
import "./menu.css";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav id="menu">
      <div id="menu-content">
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <GiHamburgerMenu />
        </button>

        <ul className={open ? "menu-links open" : "menu-links"}>
          <li>
            <Link to="/">HOME</Link>{" "}
          </li>
          <li>
            <Link to="/sobre">SOBRE</Link>
          </li>
          <li>
            <Link to="/produtos">PRODUTOS</Link>{" "}
          </li>
          <li>
            <Link to="/servicos">SERVIÇOS</Link>{" "}
          </li>
          <li className="item-contato-mobile">
            <Link to="/contato">CONTATO</Link>{" "}
          </li>
        </ul>
        <div id="botoes">
          <button className="btnContato">
            <Link to="/contato">Whatzapp</Link>{" "}
          </button>
          <LuSun className="icon-sun" />
        </div>
      </div>
    </nav>
  );
};

export default Menu;
