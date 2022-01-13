import React from "react";
import "./sidebar.css";
import { FaMusic } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <button>
        <FaMusic /> <span>Musical</span>
      </button>
      <button>
        <FaMusic /> <span>Amazon</span>
      </button>
      <button>
        <FaMusic /> <span>Amazon</span>
      </button>
      <button>
        <FaMusic /> <span>Amazon</span>
      </button>
    </div>
  );
}

export default Sidebar;
