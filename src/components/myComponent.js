import React, { Component } from 'react'
import MyContainer from './myContainer' // 高阶组件

@MyContainer
export default class MyComponent extends Component {
    render() { }
}