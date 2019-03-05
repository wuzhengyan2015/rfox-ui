import React, { Component, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import Button from '../button'
import Icon from '../icon'
import Loading from './loading'
import './styles/style.scss'

export interface IModalProp {
  afterClose?: () => {};
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  cancelText?: string;
  centered?: boolean;
  closable?: boolean;
  confirmLoading?: boolean;
  destroyOnClose?: boolean;
  footer?: string | ReactNode;
  mask?: boolean;
  maskClosable?: boolean;
  maskStyle?: React.CSSProperties;
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

interface IModalState {
  visible: boolean;
}

class Modal extends Component<IModalProp, IModalState> {
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
    onOk: () => {},
    afterClose: () => {}
  }
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
    this.state = {
      visible: true
    }
  }

  componentDidMount() {
    document.body.appendChild(this.el)
  }

  static getDerivedStateFromProps(props) {
    const { visible } = props;
    if (visible !== undefined) {
      return {
        visible
      }
    }
    return null
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  closeModal = () => {
    const { afterClose } = this.props
    this.setState({
      visible: false,
    })
    afterClose()
  }

  handleMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      this.closeModal()
    }
  }

  render() {
    const { 
      children,
      okText,
      cancelText,
      okType, 
      width,
      title,
      centered,
      style,
      mask,
      maskStyle,
      maskClosable,
      closable,
      destroyOnClose,
      zIndex,
      onCancel,
      onOk,
      wrapClassName,
      bodyStyle,
      footer,
      confirmLoading
    } = this.props
    const { visible } = this.state;
    
    return (
      (visible || !destroyOnClose) ? ReactDOM.createPortal((
        <React.Fragment>
          <div
            className={cx('rfox-modal__mask', {
              'rfox-modal__mask--hidden': !visible || !mask
            })}
            style={{ zIndex, ...maskStyle }}
            ></div>
          <div
            className={cx('rfox-modal__wrapper', {
              'rfox-modal__wrapper--hidden': !visible,
              [wrapClassName]: !!wrapClassName,
            })}
            style={{ zIndex }}
            onClick={maskClosable ? this.handleMaskClick : undefined}
          >
            <div
              className={cx('rfox-modal', {
                'rfox-modal--center': centered
              })}
              style={{ width, ...style }}>
              <button className={cx('rfox-modal__close', {
                'rfox-modal__close--hidden': closable
              })}>
                <span className="rfox-modal__close-x">
                  <Icon type="icon-close" color="#8c8c8c" size={16} />
                </span>
              </button>
              <div className="rfox-modal__header">
                <div className="rfox-modal__title">
                  { title }
                </div>
              </div>
              <div
                className="rfox-modal__body"
                style={ bodyStyle }
              >
                { children }
              </div>
              <div className="rfox-modal__footer">
                { footer !== undefined ? footer : (
                    <React.Fragment>
                      <Button onClick={onCancel}>{ cancelText }</Button>
                      <Button
                        className={cx({ 'rfox-btn__mask': confirmLoading })}
                        type={ okType }
                        onClick={onOk}>
                        { confirmLoading ? <Loading /> : null }
                        { okText }
                      </Button>
                    </React.Fragment>
                  )
                }
              </div>
            </div>
          </div>
        </React.Fragment>
      ), this.el) : null
    )
  }
}

export default Modal
