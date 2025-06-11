import React from "react";

class Content1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
        this.contentRef = React.createRef();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            nextProps.someProp !== this.props.someProp ||
            Math.abs(nextState.windowWidth - this.state.windowWidth) > 50
        );
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);

        if (this.contentRef.current) {
            this.contentRef.current.style.backgroundColor = "#f0f8ff";
        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.someProp !== this.props.someProp && this.contentRef.current) {
            this.contentRef.current.style.color =
            this.props.someProp % 2 === 0 ? "green" : "blue";
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
    }

    handleResize = () => {
        this.setState({ windowWidth: window.innerWidth });
    };

    render() {
        return (
            <section
            ref={this.contentRef}
            style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}
            >
            <h4>Content1</h4>
            <p>Ширина вікна: {this.state.windowWidth}px</p>
            <p>Проп someProp: {this.props.someProp}</p>
            <p>Колір тексту залежить від парності someProp</p>
            </section>
    );
  }
}

export default Content1;
