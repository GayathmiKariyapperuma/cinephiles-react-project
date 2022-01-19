import React from "react";
import { MdLiveHelp } from "react-icons/md";
import SearchField from "react-search-field";

function GetHelp() {
  return (
    <div className="helpContainer">
      <center>
        <h1>
          <MdLiveHelp /> Need some help? <MdLiveHelp />{" "}
        </h1>
        <SearchField placeholder="Search item" />
      </center>
    </div>
  );
}

export default GetHelp;
