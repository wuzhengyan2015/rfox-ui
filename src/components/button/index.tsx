import React, { Component } from 'react'
import './styles/index.scss'

export interface IButtonProps {
    disabled?: boolean;
    href?: string;
    htmlType?: string;
    target?: string;
    type?: string;
    onClick?: (event) => void;
    block?: boolean;
    size?: string;
    shape?: string;
}

class Button extends Component<IButtonProps> {
  static defaultProps = {
      disabled: false,
      htmlType: 'button',
      type: 'default',
      onClick: (event) => {},
      block: false,
      size: 'default'
  }
  render() {
    const { children, htmlType } = this.props
    return (
      <button
        className="rfox-btn"
        type={htmlType}>
        { children }
      </button>
    )
  }
}

export default Button
