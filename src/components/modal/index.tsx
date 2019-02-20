import React, { Component, ReactNode } from 'react'
import './styles/style.scss'
import Button from '../button'

export interface IModalProp {
  afterClosr: () => {};
  bodyStyle: CSSStyleDeclaration;
  cancelText: string;
  centered: boolean;
  closable: boolean;
  confirmLoading: boolean;
  destroyOnClose: boolean;
  footer: string | ReactNode;
  mask: boolean;
  maskClosable: boolean;
  maskStyle: CSSStyleDeclaration;
  okText: string;
  okType: string;
  title: string;
  visible: boolean;
  width: string | number;
  wrapClassName: string;
  zIndex: number;
  onCancel: (event) => {},
  onOk: (event) => {}
}

class Modal extends Component {
  static defaultProps = {
    cancelText: '取消',
    centered: false,
    closable: true,
    destroyOnClose: false,
    mask: true,
    maskClosable: true,
    maskStyle: {},
    okText: '确定',
    okType: 'primary',
    width: 520,
    zIndex: 1000,
    onCancel: () => {},
    onOk: () => {}
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default Modal
