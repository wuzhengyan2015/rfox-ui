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
  onBlur?: () => {};
  onChange?: (value: number) => {};
  onFocus?: () => {};
  onHoverChange?: (value: number) => {};
}

export interface IRateState {
  value: number;
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
    onBlur: () => {},
    onChange: (value) => {},
    onFocus: () => {},
    onHoverChange: (value) => {},
  }
  state = {
    value: undefined,
    prevValue: undefined,
    hoverIndex: undefined
  }
  static getDerivedStateFromProps(props, state) {
    const { value: valueProps } = props
    const { prevValue } = state
    if (valueProps && valueProps !== prevValue) {
      return {
        value: valueProps,
        preValue: valueProps
      }
    }
    return null;
  }
  handleItemClick = (event) => {
    const target = event.currentTarget
    const index = parseInt(target.dataset.index)
    this.setState({
      value: index + 1
    })
  }
  handleMouseOut = () => {
    this.setState({
      hoverIndex: undefined
    })
  }
  handleOver = (event) => {
    const target = event.currentTarget
    const index = parseInt(target.dataset.index)
    this.setState({
      hoverIndex: index + 1
    })
  }
  render() {
    const { character, count } = this.props
    const { value, hoverIndex } = this.state
    return (
      <div className="rfox-rate">
        <ul className="rfox-rate__list">
          {
            Array.apply(null, Array(count)).map((_, index) => {
                console.log(value,  index)
                const isActive = (hoverIndex && hoverIndex > index) || (value && value > index)
                return (
                  <li 
                    className={cx('rfox-rate_item', {'rfox-rate_item--hover ': isActive})}
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