// import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>"Adopt Me!"</h1>
      <Pet name="white" animal="cat" breed="persian" />
      <Pet name="sadaus" animal="dog" breed="mastiff" />
      <Pet name="flaus" animal="bird" breed="parrot" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

/* 
// without JSX  
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
*/
