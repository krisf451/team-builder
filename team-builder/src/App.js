import React, { useState } from "react";
import "./App.css";
//for random ID's
import { v4 as uuid } from "uuid";

import Form from "./components/Form";

//mock data for sample team list
const initialTeamList = [
  {
    id: uuid(),
    name: "Kristian Fulkerson",
    email: "thisguy451@gmail.com",
    role: "Front End"
  },
  {
    id: uuid(),
    name: "Justin Fulkerson",
    email: "jfulky@yahoo.com",
    role: "Back End"
  },
  {
    id: uuid(),
    name: "Matt Widthrow",
    email: "mattymatt69@gmail.com",
    role: "UI/UX"
  }
];

function App() {
  //state for errors
  const [error, setError] = useState("");
  //state for the initial team list
  const [teamList, setTeamList] = useState(initialTeamList);
  //state to handle the forms
  const [formValues, setFormValues] = useState({
    id: uuid(),
    name: "",
    email: "",
    role: ""
  });

  //set up a function to handle the change to the inputs
  const change = e => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //handles the change to the inputs
  };

  //set up a function to handle the submit button that will add a newobject to our initial list
  const submit = e => {
    e.preventDefault();
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };
    //add the new team member to the original array of team members
    setTeamList(teamList.concat(newMember));
    //set the forms back to empty strings
    setFormValues({ name: "", email: "", role: "" });
    //handles the submit button on the form
    if (!newMember.name || !newMember.email || !newMember.role) {
      setError("Please Fill in all Fields!!");
      return;
    }
    setError("");
  };

  return (
    <div className="App">
      <h1>TESTING THAT ITS LINKED UP</h1>
      <h3>Current Team Members:</h3>
      {teamList.map((member, index) => {
        return (
          <div key={index} className="container">
            <p>
              This is team member at index {index}'s name: {member.name}
            </p>
            <p>Members email: {member.email}</p>
            <p>Members role: {member.role}</p>
          </div>
        );
      })}

      <Form values={formValues} change={change} submit={submit} error={error} />
    </div>
  );
}

export default App;
