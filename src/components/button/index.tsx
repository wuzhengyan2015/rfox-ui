import React, { Component } from 'react'
import cx from 'classnames'
import './styles/index.scss'

const sizeMap = new Map([
  ['default', ''],
  ['small', 'sm'],
  ['large', 'lg'],
])

export interface IButtonProps {
    disabled?: boolean;
    href?: string;
    htmlType?: string;
    target?: string;
    type?: string;    // primary dash danger
    onClick?: (event) => void;
    block?: boolean;
    size?: string;  // default small large
    shape?: string;
    className?: string;
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
    const { 
      children, htmlType, type, size, disabled, block, onClick, shape, href, target, className
    } = this.props
    const btnClassName = cx('rfox-btn', {
      [className]: !!className,
      [`rfox-btn-${type}`]: !!type,
      [`rfox-btn-${sizeMap.get(size)}`]: !!sizeMap.get(size),
      'rfox-btn-disabled': disabled,
      'rfox-btn-block': block,
      [`rfox-btn-${shape}`]: !!shape,
    })
    return (
      !!href ?
        <a
          className={ btnClassName }
          href={ href }
          target={target}
          onClick={ onClick }>
          { children }
        </a> 
        : <button
          className={ btnClassName }
          type={ htmlType }
          onClick={ onClick }>
          { children }
        </button>
    )
  }
}

export default Button
