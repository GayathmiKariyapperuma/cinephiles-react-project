import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { GiFilmStrip } from "react-icons/gi";

function Sidebar() {
  return (
    <div className="sidebar">
      <button>
        <GiFilmStrip />
        <span>
          <Link className="navigationLink" to="/get-help">
            Genre
          </Link>
        </span>
      </button>
    </div>
  );
}

export default Sidebar;
