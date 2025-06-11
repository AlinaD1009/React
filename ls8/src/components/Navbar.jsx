
import React from "react";

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
        this.startTime = Date.now(); 
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextState.clicks !== this.state.clicks ||
            nextProps.title !== this.props.title
        );
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            console.log(`Navbar живе ${(Date.now() - this.startTime) / 1000} секунд`);
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.clicks !== this.state.clicks) {
            console.log(`Кількість кліків змінилася: ${this.state.clicks}`);
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
        console.log("Navbar демонтується, таймер зупинено");
    }

    handleClick = () => {
        this.setState((state) => ({ clicks: state.clicks + 1 }));
    };

    render() {
        return (
            <nav style={{ border: "1px solid black", padding: "10px", marginBottom: 10 }}>
            <h3>{this.props.title}</h3>
            <button onClick={this.handleClick}>
              Натиснули {this.state.clicks} разів
            </button>
            </nav>
        );
    }
}

export default Navbar;
