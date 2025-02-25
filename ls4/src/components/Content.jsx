import { Component } from 'react';
import Counter from './Counter';

export default class Content extends Component {
    render() {
        const data = {
            title: 'Title',
            describe: 'Describe',
        };

        return (
            <div>
                <div>Content Class Components</div>
                <h1>{data.title}</h1>
                <p>{data.describe}</p>
                <hr />
                <Counter />
            </div>
        );
    }
};


