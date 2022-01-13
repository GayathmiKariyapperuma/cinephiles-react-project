import React, { useState } from "react";

function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h1>Getting Started with React</h1>
      {toggle && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          voluptatibus eligendi assumenda culpa odio maxime veritatis aperiam.
          Cupiditate, enim, provident eaque officiis iusto eligendi, modi unde
          voluptatum officia asperiores incidunt.
        </p>
      )}
      <button onClick={() => setToggle(!toggle)}>add 1</button>
    </>
  );
}

export default Home;
