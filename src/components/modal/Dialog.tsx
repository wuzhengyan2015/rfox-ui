import React, { Component, ReactNode } from 'react'
import cx from 'classnames'
import Button from '../button'
import Icon from '../icon'
import Loading from './loading'
import { CSSTransition } from 'react-transition-group'

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
  content?: any;
  iconType?: string;
  onCancel?: (event) => void,
  onOk?: (event) => void,
}

interface IDialogState {
  visible: boolean;
  transition: boolean;
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
      visible: true,
      transition: false,
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

  closeDialog = (e) => {
    const { onCancel } = this.props
    this.changeVisible(false)
    onCancel(e)
  }

  componentWillUnmount() {
    this.props.afterClose()
  }

  componentDidMount() {
    const { visible, transition } = this.state
    if (transition !== visible) {
      this.setState({
        transition: visible
      })
    }
  }

  componentDidUpdate() {
    const { visible, transition } = this.state
    if (transition !== visible) {
      this.setState({
        transition: visible
      })
    }
  }

  handleMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      this.closeDialog(e)
    }
  }

  handleCancelClick = (e) => {
    this.closeDialog(e)
  }

  handleOkClick = (e) => {
    const { onOk } = this.props
    this.changeVisible(false)
    onOk(e)
  }

  changeVisible = (visible) => {
    if (!('visible' in this.props)) {
      this.setState({
        visible
      });
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
      wrapClassName,
      bodyStyle,
      footer,
      confirmLoading,
      content,
      iconType,
    } = this.props
    const { visible, transition } = this.state;
    const isSimpleDialog = wrapClassName && wrapClassName.includes('rfox-modal--simple');

    return (
      (visible || !destroyOnClose) ? (
        <div>
          <CSSTransition 
              in={transition}
              timeout={300}
              classNames="modal-mask">
            <div
              className={cx('rfox-modal__mask', {
                'rfox-modal__mask--hidden': !mask
              })}
              style={{ zIndex, ...maskStyle }}
            ></div>
          </CSSTransition>
          <CSSTransition 
              in={transition}
              timeout={300}
              classNames="modal">
            <div
              className={cx('rfox-modal__wrapper', {
                [wrapClassName]: !!wrapClassName,
              })}
              style={{ zIndex }}
              onClick={maskClosable && mask ? this.handleMaskClick : undefined}
            >
              <div
                className={cx('rfox-modal', {
                  'rfox-modal--center': centered
                })}
                style={{ width, ...style }}>
                <button className={cx('rfox-modal__close', {
                    'rfox-modal__close--hidden': !closable
                  })}
                  onClick={this.handleCancelClick}
                >
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
                  { isSimpleDialog ? (
                      <React.Fragment>
                        <Icon type={iconType} />
                        <span className="rfox-modal__simple-title">{ title }</span>
                        <div className="rfox-modal__simple-desc">{ content }</div>
                        <Button type="primary" onClick={this.handleOkClick}>知道了</Button>
                      </React.Fragment>
                    ) : children }
                </div>
                <div className="rfox-modal__footer">
                  { footer !== undefined ? footer : (
                      <React.Fragment>
                        <Button onClick={this.handleCancelClick}>{ cancelText }</Button>
                        <Button
                          className={cx({ 'rfox-btn__mask': confirmLoading })}
                          type={ okType }
                          onClick={this.handleOkClick}>
                          { confirmLoading ? <Loading /> : null }
                          { okText }
                        </Button>
                      </React.Fragment>
                    )
                  }
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      ) : null
    )
  }
}

export default Dialog
