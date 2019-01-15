import React, { Component, ReactNode } from 'react'
import Icon from '../icon/index'
import cx from 'classnames'
import './styles/style.scss'

export interface IRateProps {
  allClear?: boolean;
  count?: number;
  character?: ReactNode;
  className?: string;
  defaultValue?: number;
  value?: number;
  disabled?: boolean;
  activeColor?: string;
  onBlur?: () => any;
  onChange?: (value: number) => any;
  onFocus?: () => any;
  onHoverChange?: (value: number) => any;
}

export interface IRateState {
  value: number;
  prevValue: number;
  hoverIndex: number;
}

class Rate extends Component<IRateProps, IRateState> {
  static defaultProps = {
    allClear: false,
    character: <Icon type="icon-fillstar" />,
    className: '',
    count: 5,
    defaultValue: 0,
    disabled: false,
    value: 0,
    activeColor: '#fadb14',
    onBlur: () => {},
    onChange: (value) => {},
    onFocus: () => {},
    onHoverChange: (value) => {},
  }
  state = {
    value: this.props.value || this.props.defaultValue,
    prevValue: this.props.value,
    hoverIndex: undefined
  }
  static getDerivedStateFromProps(props, state) {
    const { value: valueProps } = props
    const { prevValue } = state
    if (valueProps !== prevValue) {
      return {
        value: valueProps,
        prevValue: valueProps
      }
    }
    return null;
  }
  handleItemClick = (event) => {
    const { onChange, disabled, allClear } = this.props
    const { value: currentValue } = this.state
    if (disabled) {
      return
    }
    const target = event.currentTarget
    let value = parseInt(target.dataset.index, 10) + 1
    if (allClear && value === currentValue) {
      value = undefined
    }
    this.setState({
      value
    })
    onChange(value)
  }
  handleMouseOut = () => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    this.setState({
      hoverIndex: undefined
    })
  }
  handleOver = (event) => {
    const { onHoverChange, disabled } = this.props
    if (disabled) {
      return
    }
    const target = event.currentTarget
    const hoverIndex = parseInt(target.dataset.index, 10) + 1
    this.setState({
      hoverIndex
    })
    onHoverChange(hoverIndex)
  }
  handleRateFocus = () => {
    const { onFocus } = this.props
    onFocus()
  }
  handleRateBlur = () => {
    const { onBlur } = this.props
    onBlur()
  }
  render() {
    const { character, count, disabled, className, activeColor } = this.props
    const { value, hoverIndex } = this.state
    return (
      <div 
        className="rfox-rate"
        tabIndex={0}
        onFocus={this.handleRateFocus} 
        onBlur={this.handleRateBlur}>
        <ul className="rfox-rate__list">
          {
            Array.apply(null, Array(count)).map((_, index) => {
                const isActive = (hoverIndex && hoverIndex > index) || (value && value > index)
                const style = isActive ? {color: activeColor} : {}
                return (
                  <li 
                    className={cx('rfox-rate__item', {
                      'rfox-rate__item--hover': isActive, 
                      'rfox-rate__item--disabled': disabled,
                      [className]: !!className
                    })}
                    style={style}
                    data-index={index} 
                    key={index}
                    onMouseOver={this.handleOver}
                    onMouseOut={this.handleMouseOut}
                    onClick={this.handleItemClick}>
                    { character }
                  </li>
                )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Rate