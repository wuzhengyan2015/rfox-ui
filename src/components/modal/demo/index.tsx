import React, { Component } from 'react'
import Modal from '../index'

/* tslint:disable  */
class ModalMethod extends Component {
    componentDidMount() {
        Modal.info({
            title: 'This is a notification message',
            content: (
              <div>
                <p>some messages...some messages...</p>
                <p>some messages...some messages...</p>
              </div>
            ),
            onOk() {},
        })
    }
    render() {
        return null;
    }
}

/* tslint:disable  */
class NormalModal extends Component {
    state = {
        visible: true
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    handleOk = () => {
        this.setState({
            visible: false,
        });
        console.log('Ok')
    }
    render() {
        const { visible } = this.state
        return (
            <Modal
                visible={visible}
                closable={true}
                okText="同意"
                title="Basic Modal"
                onCancel={this.handleCancel}
                onOk={this.handleOk}
                okType="dash"
                style={{ top: '200px' }}
            >
                modal components
            </Modal>
        )
    }
}

/* tslint:disable  */
class UncontrollerModal extends Component {
    handleCancel = () => {
        console.log('Cancel')
    }
    handleOk = () => {
        console.log('Ok')
    }
    render() {
        return (
            <Modal
                closable={true}
                okText="同意"
                title="Basic Modal"
                onCancel={this.handleCancel}
                onOk={this.handleOk}
                okType="dash"
                style={{ top: '200px' }}
            >
                modal components
            </Modal>
        )
    }
}

export { ModalMethod, NormalModal, UncontrollerModal }
