import React, { Component } from 'react'
import { Button } from 'antd'
// 图片通过import引入，且在src目录下
import imgUrl from '../images/qr.jpg'

export default class MyQr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            inputValue: 'fang'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener("click", e => {
            if (e.target && e.target.matches('div.code')) {
                return;
            }

            this.setState({
                active: false
            })
        });

        document.querySelector('.code').addEventListener('click', e => {
            e.stopPropagation();
        });
    }

    componentWillUnmount() {
        document.body.removeEventListener("click");
        document.querySelector('.code').removeEventListener('click');
    }

    handleClick() {
        this.setState({
            active: !this.state.active
        });
    }

    handleClickQr(e) {
        e.stopPropagation();
    }

    render() {
        return (
            <div className="qr-wrapper">
                <Button type="primary" onClick={this.handleClick}>二维码</Button>
                <div onClick={this.handleClickQr} className="code" style={{ display: this.state.active ? 'block' : 'none' }} >
                    <img src={imgUrl} alt="qr" width="250" height="150" />
                </div>
                <input value={this.state.inputValue} onChange={e => this.setState({ inputValue: e.target.value.toUpperCase() })}></input>
            </div>
        );
    }
}