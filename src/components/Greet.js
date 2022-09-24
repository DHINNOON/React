import React from "react";

/*
function Greet() {
  return <h1> Hello Dhins </h1>;
}
*/
const Greet = (props) => (
  <div>
    <h1>
      Hello {props.name} <sub>{props.nickName}</sub>
    </h1>
    {props.children}
  </div>
);

export default Greet;
