import React, { Component, ReactNode } from 'react'
import Icon from '../icon/index'
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

class Rate extends Component<IRateProps> {
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
  render() {
    const { character, count } = this.props
    return (
      <div className="rfox-rate">
        <ul className="rfox-rate__list">
          {
            Array.apply(null, Array(count)).map(() => {
                return (
                  <li className="rfox-rate_item">
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