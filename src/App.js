// import React from "react";
import { render } from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      {/* <h1>"Adopt Me!"</h1>
      <Pet name="white" animal="cat" breed="persian" />
      <Pet name="sadaus" animal="dog" breed="mastiff" />
      <Pet name="flaus" animal="bird" breed="parrot" /> */}
      <h1>"Adopt Me!"</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
