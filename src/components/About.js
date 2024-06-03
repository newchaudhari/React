import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="text-center m-4">
        <h1 className="text-3xl font-bold">About</h1>
        <h2 className="text-xl font-bold">Namaste React Course</h2>
        <UserClass name={"First"} location={"Pune"} contact={"@newchaudhari"} />
      </div>
    );
  }
}

export default About;
