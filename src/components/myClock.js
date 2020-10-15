import React, { Component } from 'react'

export default class MyClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.tickCount = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.tickCount)
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                <p>
                    <span>现在时间：</span>
                    <span>{this.state.date.toLocaleString()}</span>
                </p>

            </div>
        )
    }
}