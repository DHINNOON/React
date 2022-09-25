import React from "react";

/*
function Greet() {
  return <h1> Hello Dhins </h1>;
}
*/
const Greet = ({ name, nickName }) => (
  <div>
    <h1>
      Hello {name} <sub> {nickName} </sub>{" "}
    </h1>
  </div>
);

export default Greet;
