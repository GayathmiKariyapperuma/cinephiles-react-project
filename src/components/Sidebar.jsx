import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { GiFilmStrip } from "react-icons/gi";
import { SiImdb } from "react-icons/si";
import { BsTv, BsCameraReelsFill } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">
      <button>
        <GiFilmStrip />
        <span>
          <Link className="sideLink" to="/genre">
            Genre
          </Link>
        </span>
      </button>
      <button>
        <SiImdb />
        <span>
          <Link className="sideLink" to="/genre">
            Top 50
          </Link>
        </span>
      </button>
      <button>
        <BsTv />
        <span>
          <Link className="sideLink" to="/genre">
            TV Series
          </Link>
        </span>
      </button>
      <button>
        <BsCameraReelsFill />
        <span>
          <Link className="sideLink" to="/genre">
            Best Films
          </Link>
        </span>
      </button>
    </div>
  );
}

export default Sidebar;
