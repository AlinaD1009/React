import {Component} from "react";


export default class Content extends Component {
    state = {
        rand: 0,
        isShow: true,
        count: 0

    }

    add = () => this.setState(({count}) => ({count: count+1}));
    min = () => this.setState(({count}) => ({count: count-1}));

    render() {
        return <div>
            <p>Counter </p>
            <button onClick={this.add}> ADD </button>
            <div>
                {this.state.count}
            </div>
            <button onClick={this.min}> MIN </button>
            
        </div>
    }
};