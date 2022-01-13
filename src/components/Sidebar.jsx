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
          <Link className="navigationLink" to="/genre">
            Genre
          </Link>
        </span>
      </button>
      <button>
        <GiFilmStrip />
        <span>
          <Link className="navigationLink" to="/genre">
            Language
          </Link>
        </span>
      </button>
      <button>
        <GiFilmStrip />
        <span>
          <Link className="navigationLink" to="/genre">
            Ratings
          </Link>
        </span>
      </button>
      <button>
        <GiFilmStrip />
        <span>
          <Link className="navigationLink" to="/genre">
            Year
          </Link>
        </span>
      </button>
    </div>
  );
}

export default Sidebar;
