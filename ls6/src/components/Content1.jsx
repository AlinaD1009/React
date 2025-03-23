import React, { Component } from "react";

class Content1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Компонент створено");
  }

  componentDidMount() {
    console.log("componentDidMount: Компонент змонтовано");
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Перевірка оновлення компонента");
    return nextState.count % 2 === 0; 
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Компонент оновлено");
    if (prevState.count !== this.state.count) {
      document.title = `Лічильник: ${this.state.count}`;
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Компонент видалено");
    clearInterval(this.interval);
  }

  render() {
    console.log("Render: Компонент відмальовується");
    return (
      <div>
        <h2>Лічильник: {this.state.count}</h2>
      </div>
    );
  }
}

export default Content1;
