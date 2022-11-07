import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";



export default function Navbar() {
  return (
    <nav className="nav">
            <a className="brand-name">
        aiztra
      </a>
      <ul>
        <li>
          <Link to="/acerca de">Acerca de</Link>
        </li>
        <li>
          <Link to="/registrarse">Registrarse</Link>
        </li>
        <li>
          <Link to="/ingresar">ingresar</Link>
        </li>
      </ul>
    </nav>
  );
}
