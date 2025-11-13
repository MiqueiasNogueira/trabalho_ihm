import {LuMoon, LuSun} from "react-icons/lu"

import './menu.css'
import logo from '../image/logo.png'

const menu = () => {
  return (
   <nav id='menu'>
    <div id='menu-content'>
    <div id="logo">
      <img src={logo} alt="" />
    </div>
    <ul>
      <li><a href="/">HOME</a></li>
      <li><a href="/">SOBRE-NOS</a></li>
      <li><a href="/">PRODUTOS</a></li>
      <li><a href="/">SERVIÇOS</a></li>
    </ul>
    <div id="botoes">
      <button className="btnContato"><a href="/">CONTATO</a></button>
      <LuSun className="icon-sun"/>
    </div>
    </div>
    
  </nav>)
}

export default menu