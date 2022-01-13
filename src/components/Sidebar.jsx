import React from "react";
import "./sidebar.css";
import { GiFilmStrip } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">
      <button>
        <GiFilmStrip /> <span>Genre</span>
      </button>
    </div>
  );
}

export default Sidebar;
