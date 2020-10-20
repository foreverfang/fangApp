import React, { Component } from 'react'
import { Button, Tag } from 'antd'
import style from '../style/button.module.css'
import emitter from './events'
class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleCssClick = this.handleCssClick.bind(this);
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

    handleCssClick(e) {
        const params = {
            value: e.target.value,
            name: '测试跨组件通信'
        };
        // 测试跨组件通信
        emitter.emit("TestButtonClick", params);
    }


    render() {
        return (
            <div>
                <p>
                    <Tag color="green">{this.state.count}</Tag>
                </p>
                <Button type="primary" className="btn" onClick={this.handleClick}>更新计数</Button>
                <Button className="btn" onClick={this.handleReset}>重置</Button>
                <button className={style.color} onClick={this.handleCssClick}>Test Css Modules</button>
                <div className={style.out}>
                    <span className={style.inner}>test父子样式</span>
                </div>
            </div>
        );
    }
};

export default MyButton;