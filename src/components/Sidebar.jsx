import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { GiFilmStrip } from "react-icons/gi";
import { SiImdb } from "react-icons/si";
import { BsTv, BsCameraReelsFill } from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
      <button style={{ top: "15%" }}>
        <GiFilmStrip />
        <span>
          <Link className="sideLink" to="/genre">
            Genre
          </Link>
        </span>
      </button>
      <button style={{ top: "25%" }}>
        <SiImdb />
        <span>
          <Link className="sideLink" to="/top-50">
            Top 50
          </Link>
        </span>
      </button>
      <button style={{ top: "35%" }}>
        <BsCameraReelsFill />
        <span>
          <Link className="sideLink" to="/best-picture">
            Best Films
          </Link>
        </span>
      </button>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <br />
      <br />
      <div className="footer">
        Copyright
        <AiOutlineCopyrightCircle />
        Cinephiles 2022
      </div>
    </div>
  );
}

export default Sidebar;
