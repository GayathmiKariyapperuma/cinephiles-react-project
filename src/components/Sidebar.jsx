import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { GiFilmStrip } from "react-icons/gi";
import { BsGlobe, BsStarFill } from "react-icons/bs";
import { ImCalendar } from "react-icons/im";

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
        <BsGlobe />
        <span>
          <Link className="navigationLink" to="/genre">
            Language
          </Link>
        </span>
      </button>
      <button>
        <BsStarFill />
        <span>
          <Link className="navigationLink" to="/genre">
            Ratings
          </Link>
        </span>
      </button>
      <button>
        <ImCalendar />
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
