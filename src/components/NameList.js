import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "DA",
      age: 22,
      skill: "Java",
    },
    {
      id: 2,
      name: "AD",
      age: 23,
      skill: "PYTHON",
    },
    {
      id: 3,
      name: "Dhins",
      age: 25,
      skill: "SQL",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  // <h2>
  //   I am {person.name} of {person.age} years old. I know {person.skill}
  // </h2>
  // Or
  return <div>{personList}</div>;
}

export default NameList;
