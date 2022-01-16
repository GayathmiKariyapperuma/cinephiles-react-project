import React from "react";
import { FaMusic } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";

function Genre() {
  return (
    <div class="row">
      <div class="column">
        <div class="card">
          <img
            src="https://cdn1.vectorstock.com/i/thumb-large/06/80/action-adventure-literature-glyph-icon-vector-40860680.jpg"
            alt="Action"
            width="308px"
            height="250px"
          />
          <div class="cContainer">
            <h2>Action / Adventure</h2>
            <p>
              <button class="button">Visit</button>
            </p>
          </div>
        </div>
      </div>
      <button>
        <FaMusic /> <span>Musical</span>
      </button>
      <button>
        <BsPersonBoundingBox /> <span>Biography</span>
      </button>
      <button>
        <FaMusic /> <span>Fantacy</span>
      </button>
      <button>
        <FaMusic /> <span>Family</span>
      </button>
      <button>
        <FaMusic /> <span>Drama</span>
      </button>
      <button>
        <FaMusic /> <span>Sport</span>
      </button>
      <button>
        <FaMusic /> <span>Western</span>
      </button>
      <button>
        <FaMusic /> <span>Mystery</span>
      </button>
      <button>
        <FaMusic /> <span>Thriller</span>
      </button>
      <button>
        <FaMusic /> <span>Horror</span>
      </button>
      <button>
        <FaMusic /> <span>War</span>
      </button>
      <button>
        <FaMusic /> <span>Action</span>
      </button>
      <button>
        <FaMusic /> <span>Comedy</span>
      </button>
      <button>
        <FaMusic /> <span>Sci-Fi</span>
      </button>
      <button>
        <FaMusic /> <span>Romance</span>
      </button>
      <button>
        <FaMusic /> <span>History</span>
      </button>
      <button>
        <FaMusic /> <span>Documentary</span>
      </button>
      <button>
        <FaMusic /> <span>TV-Series</span>
      </button>
    </div>
  );
}

export default Genre;
