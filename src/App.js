import React, { Component } from 'react'
import MyButton from './components/myButton'
import MyTabs from './components/myTabs'
import MyClock from './components/myClock'
import { Row, Col } from 'antd'
import MyMenu from './components/myMenu'
import MyCarousel from './components/myCarousel'
import style from './style/main.module.css'
import emitter from './components/events'
// import flyBig from './utils/myMixin'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1'
        }
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.testButtonClick = emitter.on('TestButtonClick', (data) => {
            console.log("跨组件通信：", data);
        });
    }

    componentWillUnmount() {
        emitter.removeListener(this.testButtonClick);
    }

    handleChange(key) {
        console.log("当前点击的key：", key);
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <div className={style.fangApp}>
                <Row>
                    <Col span="4">
                        <MyMenu handleClick={this.handleClick} current={this.state.current}></MyMenu>
                    </Col>
                    <Col span="20">
                        <MyCarousel></MyCarousel>
                        <Row type="flex" justify="center" style={{ display: this.state.current === '1' ? '' : 'none' }}>
                            <Col><h1>hello fang</h1></Col>
                        </Row>
                        <Row type="flex" justify="left" style={{ display: this.state.current === '2' ? '' : 'none' }}>
                            <Col>
                                <MyClock></MyClock>
                            </Col>
                        </Row>
                        <Row type="flex" justify="left" style={{ display: this.state.current === '3' ? '' : 'none' }}>
                            <Col>
                                <MyButton></MyButton>
                            </Col>
                        </Row>
                        <Row type="flex" justify="left" style={{ display: this.state.current === '4' ? '' : 'none' }}>
                            <Col>
                                <MyTabs defaultActiveKey={"1"} onChange={this.handleChange}></MyTabs>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
