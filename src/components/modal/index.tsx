import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dialog, { IDialogProp } from './Dialog'

class Modal extends Component<IDialogProp> {
    private el: HTMLElement

    constructor(props) {
        super(props);
        this.el = document.createElement('div')
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(<Dialog { ...this.props } />, this.el)
    }
}

export default Modal
