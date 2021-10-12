import react, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "This is a state message",
    };
  }

  handleClick = () => {
    this.setState({ message: "Thank you for subscribing" });
  };

  render() {
    const {name, age} = this.props

    return (
      <div>
        <div>
          My Name is {name} and I am {age}
        </div>
        <div>{this.state.message}</div>
        <button onClick={this.handleClick}>Subscribe</button>
      </div>
    );
  }
}

export default Welcome;
