import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
    console.log("Navbar: constructor");
  }

  componentDidMount() {
    console.log("Navbar: componentDidMount");
    this.timer = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Navbar: shouldComponentUpdate");
    return this.state.time !== nextState.time;
  }

  componentDidUpdate() {
    console.log("Navbar: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Navbar: componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    console.log("Navbar: render");
    return (
      <nav>
        <h2>Навігація</h2>
        <p>Поточний час: {this.state.time}</p>
      </nav>
    );
  }
}

export default Navbar;
