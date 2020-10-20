// 高阶组件 属性代理
import React, { Component } from 'react'

const MyContainer = (WarppedComponent) => {
    class extends Component {
        proc(warppedComponentInstance) {
            warppedComponentInstance.method();
        }
        render() {
            const newProps = {
                text: newText
            }
            const props = Object.assign({}, this.props, { ref: this.proc.bind(this) });
            return <WarppedComponent {...this.props} {...newProps} />
        }
    }
}

export default MyContainer