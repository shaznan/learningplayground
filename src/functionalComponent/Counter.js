import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //using prev state
  //   incrementHandler = () => {
  /** just so u know, u can pass in props as a second argument after prevstate and get access to props */
  //     this.setState((prevState) => ({
  //       count: prevState.count + 5,
  //     }));
  //   };

  //incrementing usually
  incrementHandler = () => {
    this.setState(
      {
        count: this.state.count + 5,
      },
      () => {
        console.log(this.state);
      },
    );
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={this.incrementHandler}>Increment</button>
      </div>
    );
  }
}

export default Counter;
