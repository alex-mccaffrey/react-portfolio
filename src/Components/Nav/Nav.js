import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../Pics/Amac-logo.png";

function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1 className="alex">Alex McCaffrey</h1>
      </Link>
      {/* <a class="amac-logo" href="/">
                    <img src={logo} id="amac-logo" alt="Alex logo"/>
                </a> */}
      <ul className="nav-links">
      <Link to="/">
          <li className="nav-li">Home</li>
        </Link>
        <Link to="/about">
          <li className="nav-li">About</li>
        </Link>
        <Link to="/projects">
          <li className="nav-li">Projects</li>
        </Link>
        <Link to="/contact">
          <li className="nav-li">Contact</li>
        </Link>
        <Link to="/">
          {" "}
            <img src={logo} id="amac-logo" alt="Alex logo" />
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
