import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    const { greetHandler } = this.props;
    const people = [
      { name: "shaznan", age: 23 },
      { name: "shazzy", age: 24 },
    ];

    const person = people.map((pers, i) => {
      return <h1 key={i}>{pers.name}</h1>;
    });

    return (
      <div>
        <div>{person}</div>
        {/* <button onClick={greetHandler}>Greet Parent</button> */}
      </div>
    );
  }
}

export default Child;
