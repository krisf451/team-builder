import React from "react";

export default function Form(props) {
  const { values, submit, change, error } = props;
  //   console.log("values", values);
  return (
    <div className="container">
      <h1>This is the Form component</h1>
      <h4>{error}</h4>
      <form onSubmit={submit}>
        <input
          value={values.name}
          onChange={change}
          name="name"
          type="text"
          placeholder="Name:"
        />
        <input
          value={values.email}
          onChange={change}
          name="email"
          type="email"
          placeholder="Email:"
        />
        <select name="role" value={values.role} onChange={change}>
          <option value="">--SELECT A ROLE--</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="UI/UX">UI/UX</option>
          <option value="Instructor">Instructor</option>
          <option value="Student">Student</option>
        </select>
        <input type="submit" value="CREATE A NEW TEAM MEMBER" />
      </form>
    </div>
  );
}
