import React, { useState } from "react";
import { Slide } from "react-slideshow-image";

function Home() {
  const [autoplay, setAutoplay] = useState(true);

  const style = {
    textAlign: "center",
    background: "teal",
    padding: "50px 0",
    fontSize: "18px"
  };

  return (
    <div>
      <div>
        <Slide autoplay={autoplay}>
          <div style={style}>First Slide</div>
          <div style={style}>Second Slide</div>
          <div style={style}>Third Slide</div>
        </Slide>
      </div>

      <div className="autoplay-buttons">
        Autplay is {autoplay ? "on" : "off"}
      </div>
      <div className="autoplay-buttons">
        <button type="button" onClick={() => setAutoplay(false)}>
          Pause
        </button>
        <button type="button" onClick={() => setAutoplay(true)}>
          Play
        </button>
      </div>
    </div>
  );
}

export default Home;
