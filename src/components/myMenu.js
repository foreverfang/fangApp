import React, { Component } from 'react'
import { Menu, Switch } from 'antd';
import { appstore } from '@ant-design/icons';
const SubMenu = Menu.SubMenu;

export default class MyMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light'
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeTheme = this.changeTheme.bind(this);
    }

    changeTheme(value) {
        this.setState({
            theme: value ? 'dark' : 'light'
        });
    }
    handleClick(e) {
        this.props.handleClick(e);
    }

    render() {
        const { current } = this.props;
        return (
            <div>
                <Switch onChange={this.changeTheme} checkedChildren="暗" unCheckedChildren="亮" />
                <br />
                <br />
                <Menu theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 240 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[current]}
                    mode="inline">
                    <SubMenu key="sub1" title={<span icon={<appstore />}><span>导航一</span></span>}>
                        <Menu.Item key="1">芳</Menu.Item>
                        <Menu.Item key="2">时间</Menu.Item>
                        <Menu.Item key="3">按钮</Menu.Item>
                        <Menu.Item key="4">列表</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span icon={<appstore />}><span>导航二</span></span>}>
                        <Menu.Item key="5">人情管理5</Menu.Item>
                        <Menu.Item key="6">选项6</Menu.Item>
                        <SubMenu key="sub3" title="三级导航">
                            <Menu.Item key="7">选项7</Menu.Item>
                            <Menu.Item key="8">选项8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span icon={<appstore />}><span>导航三</span></span>}>
                        <Menu.Item key="9">选项9</Menu.Item>
                        <Menu.Item key="10">选项10</Menu.Item>
                        <Menu.Item key="11">选项11</Menu.Item>
                        <Menu.Item key="12">选项12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}