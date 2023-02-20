import React from 'react';

export default class ClassClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
        console.log('consturture')
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.timerID = setInterval(
            () => this.tick(),
            10000
        );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerID);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    tick() {
        console.log('tick')
        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
