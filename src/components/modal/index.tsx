import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Dialog, { IDialogProp } from './Dialog'
import './styles/style.scss'

type quickModal = (IDialogProp) => ({
    update: (IDialogProp) => void
    destory: () => void
})

class Modal extends Component<IDialogProp> {
    static info: quickModal
    static success: quickModal
    static error: quickModal
    static warn: quickModal
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
    const trasitionTime = 260
    let el = document.createElement('div')
    document.body.appendChild(el)
    let currentConfig = { 
        ...config,
        visible: true,
        onOk() {
            if (config.onOk) {
                config.onOk()
            }
            close()
        }
    }

    function close() {
        currentConfig = {
            ...currentConfig,
            visible: false
        }
        render(currentConfig);
        setTimeout(() => {
            const unmountResult = ReactDOM.unmountComponentAtNode(el);
            if (unmountResult && el.parentNode) {
                el.parentNode.removeChild(el);
                el = null
            }
            if (config.onCancel) {
                config.onCancel()
            }
        }, trasitionTime)
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

const baseQuickModalConfig = {
    width: 416,
    closable: false,
    wrapClassName: 'rfox-modal--simple'

}

Modal.info = (config: IDialogProp) => {
    return confirm({ 
        ...config,
        ...baseQuickModalConfig,
        iconType: 'icon-info-circle',
    })
}

Modal.success = (config: IDialogProp) => {
    return confirm({ 
        ...config,
        ...baseQuickModalConfig,
        iconType: 'icon-check-circle',
    })
}

Modal.error = (config: IDialogProp) => {
    return confirm({ 
        ...config,
        ...baseQuickModalConfig,
        iconType: 'icon-close-circle',
    })
}

Modal.warn = (config: IDialogProp) => {
    return confirm({ 
        ...config,
        ...baseQuickModalConfig,
        iconType: 'icon-warning-circle',
    })
}

export default Modal
