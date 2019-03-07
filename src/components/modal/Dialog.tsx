import React, { Component, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'
import Button from '../button'
import Icon from '../icon'
import Loading from './loading'
import './styles/style.scss'

export interface IDialogProp {
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

interface IDialogState {
  visible: boolean;
}

class Dialog extends Component<IDialogProp, IDialogState> {
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
    this.state = {
      visible: true
    }
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

  closeDialog = () => {
    this.setState({
      visible: false,
    })
  }

  componentWillUnmount() {
    this.props.afterClose()
  }

  handleMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      this.closeDialog()
    }
  }

  handleCancelClick = (e) => {
    const { onCancel } = this.props
    this.closeDialog()
    onCancel(e)
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
      onOk,
      wrapClassName,
      bodyStyle,
      footer,
      confirmLoading
    } = this.props
    const { visible } = this.state;
    
    return (
      (visible || !destroyOnClose) ? (
        <div>
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
                      <Button onClick={this.handleCancelClick}>{ cancelText }</Button>
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
        </div>
      ) : null
    )
  }
}

export default Dialog
