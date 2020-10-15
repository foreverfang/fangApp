import React, { Component } from 'react'
import { Tabs } from 'antd';
import MyQr from './myQr'
const TabPane = Tabs.TabPane;

class myTabs extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
    }
    // render前
    componentWillMount() { }
    // render后
    componentDidMount() { }

    handleChange(key) {
        this.props.onChange(key);
    }

    render() {
        const { defaultActiveKey } = this.props;
        return (
            <div>
                <Tabs defaultActiveKey={defaultActiveKey} onChange={this.handleChange}>
                    <TabPane tab="获取二维码" key="1">
                        <MyQr></MyQr>
                    </TabPane>
                    <TabPane tab="选项卡二" key="2">选项卡二内容2</TabPane>
                    <TabPane tab="选项卡三" key="3">选项卡三内容3</TabPane>
                </Tabs>
            </div>
        );
    }
}

export default myTabs;