import React from "react";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";



export default function NavbarUser() {
  return (
    <nav className="nav">
            <a className="brand-name">
        aiztra
      </a>
      <ul>
        <li>
          <Link to="/Usuario">Usuario</Link>
        </li>
        <li>
          <Link to="/Consultas">Consultas</Link>
        </li>
        <li>
          <Link to="/Salir">Salir</Link>
        </li>
      </ul>
    </nav>
  );
}
