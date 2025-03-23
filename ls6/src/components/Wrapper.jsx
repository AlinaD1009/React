import React, { Component } from "react";
import Navbar from "./Navbar"; 
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";
import Content1 from "./Content1";


class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: true,
      showComponentOne: false,
      showComponentTwo: false,
      showComponentThree: false,
    };
  }

  toggleComponent = (key) => {
    this.setState((prevState) => ({ [key]: !prevState[key] }));
  };

  render() {
    return (
      <div>
        <button onClick={() => this.toggleComponent("showNavbar")}>
          {this.state.showNavbar ? "Сховати Navbar" : "Показати Navbar"}
        </button>
        <button onClick={() => this.toggleComponent("showComponentOne")}>
          Перемикач ComponentOne
        </button>
        <button onClick={() => this.toggleComponent("showComponentTwo")}>
          Перемикач ComponentTwo
        </button>
        <button onClick={() => this.toggleComponent("showComponentThree")}>
          Перемикач ComponentThree
        </button>
        <button onClick={() => this.toggleComponent("showContent1")}>
          Перемикач Content1
        </button>
        

        {this.state.showNavbar && <Navbar />}
        {this.state.showComponentOne && <ComponentOne />}
        {this.state.showComponentTwo && <ComponentTwo />}
        {this.state.showComponentThree && <ComponentThree />}
        {this.state.showContent1 && <Content1 />}  
      </div>
    );
  }
}

export default Wrapper;
