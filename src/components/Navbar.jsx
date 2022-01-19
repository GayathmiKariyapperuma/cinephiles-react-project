import React from "react";
import "./navbar.css";
import { GiFilmSpool } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <GiFilmSpool className="webLogo" />
      <h1 className="webName">Cinephiles</h1>
      <div className="links">
        <Link className="navigationLink" to="/">
          Home
        </Link>
        <Link className="navigationLink" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
