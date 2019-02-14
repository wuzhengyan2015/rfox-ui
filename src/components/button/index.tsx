import React, { Component } from 'react'
import cx from 'classnames'
import './styles/index.scss'

export interface IButtonProps {
    disabled?: boolean;
    href?: string;
    htmlType?: string;
    target?: string;
    type?: string;    // primary dashed danger
    onClick?: (event) => void;
    block?: boolean;
    size?: string;
    shape?: string;
}

class Button extends Component<IButtonProps> {
  static defaultProps = {
      disabled: false,
      htmlType: 'button',
      type: '',
      onClick: (event) => {},
      block: false,
      size: 'default'
  }
  render() {
    const { children, htmlType, type } = this.props
    return (
      <button
        className={ cx('rfox-btn', {
          [`rfox-btn-${type}`]: !!type
        }) }
        type={htmlType}>
        { children }
      </button>
    )
  }
}

export default Button
