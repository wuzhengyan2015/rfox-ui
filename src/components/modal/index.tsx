import React, { Component, ReactNode } from 'react'
import ReactDOM from 'react-dom';
import Button from '../button'
import './styles/style.scss'

export interface IModalProp {
  afterClose?: () => {};
  bodyStyle?: CSSStyleDeclaration;
  cancelText?: string;
  centered?: boolean;
  closable?: boolean;
  confirmLoading?: boolean;
  destroyOnClose?: boolean;
  footer?: string | ReactNode;
  mask?: boolean;
  maskClosable?: boolean;
  maskStyle?: CSSStyleDeclaration;
  okText?: string;
  okType?: string;
  title?: string | ReactNode;
  visible?: boolean;
  width?: string | number;
  wrapClassName?: string;
  zIndex?: number;
  children?: any;
  onCancel?: (event) => {},
  onOk?: (event) => {}
}

class Modal extends Component<IModalProp> {
  private el: Element
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
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  render() {
    const { 
      children,
      okText,
      cancelText,
      okType, 
      width,
      title
     } = this.props
    return (
      ReactDOM.createPortal((
        <React.Fragment>
          <div className="rfox-modal__mask"></div>
          <div className="rfox-modal__wrapper">
            <div className="rfox-modal" style={{ width }}>
              <div className="rfox-modal__header">
                <div className="rfox-modal__title">
                  { title }
                </div>
              </div>
              <div className="rfox-modal__body">
                { children }
              </div>
              <div className="rfox-modal__footer">
                <Button>{ cancelText }</Button>
                <Button
                  type={ okType }>
                  { okText }
                </Button>
              </div>
            </div>
          </div>
        </React.Fragment>
      ), this.el)
    )
  }
}

export default Modal
