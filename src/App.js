import React, { Component } from 'react';
import MyButton from './components/myButton'
import MyTabs from './components/myTabs'
import MyClock from './components/myClock'
import { Row, Col } from 'antd';

class App extends Component {
    handleChange(key) {
        console.log("当前点击的key：", key);
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="center" >
                    <Col><h1>hello fang</h1></Col>
                </Row>
                <Row type="flex" justify="center" >
                    <Col>
                        <MyClock></MyClock>
                    </Col>
                </Row>
                <Row type="flex" justify="center" >
                    <Col>
                        <MyButton></MyButton>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col>
                        <MyTabs defaultActiveKey={"1"} onChange={this.handleChange}></MyTabs>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
