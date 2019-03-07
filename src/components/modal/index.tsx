import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dialog, { IDialogProp } from './Dialog'

class Modal extends Component<IDialogProp> {
    static info: Function
    private el: HTMLElement

    constructor(props) {
        super(props);
        this.el = document.createElement('div')
    }

    componentDidMount() {
        document.body.appendChild(this.el)
    }

    componentWillUnmount() {
        document.body.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(<Dialog { ...this.props } />, this.el)
    }
}

const confirm = (config) => {
    let el = document.createElement('div')
    document.body.appendChild(el)
    let currentConfig = { ...config, visible: true }

    function close() {
        const unmountResult = ReactDOM.unmountComponentAtNode(el);
        if (unmountResult && el.parentNode) {
            el.parentNode.removeChild(el);
            el = null
        }
        // can't no close
        if (config.onCancel) {
            config.onCancel()
        }
    }

    function update(newConfig) {
        currentConfig = {
            ...currentConfig,
            ...newConfig
        }
        render(currentConfig)
    }

    function render(props) {
        ReactDOM.render(<Dialog {...props} />, el)
    }

    render(currentConfig)

    return {
        destory: close,
        update
    }
}

Modal.info = (config) => {
    return confirm(config)
}

Modal.info()



export default Modal
