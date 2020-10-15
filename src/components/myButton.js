import React, { Component } from 'react'
import { Button, Tag } from 'antd'

class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            count: this.state.count + 1
        });
    }

    handleReset(e) {
        e.preventDefault();
        this.setState({
            count: 0
        })
    }

    render() {
        return (
            <div>
                <p>
                    <Tag color="green">{this.state.count}</Tag>
                </p>
                <Button type="primary" className="btn" onClick={this.handleClick}>更新计数</Button>
                <Button className="btn" onClick={this.handleReset}>重置</Button>
            </div>
        );
    }
};

export default MyButton;