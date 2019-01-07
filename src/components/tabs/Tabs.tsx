import React, { Component, ReactElement } from 'react'
import cx from 'classnames'
import TabPane from './TabPane'

export interface ITabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (activeKey: string) => void;
}

export interface ITabsState {
  activeKey: string;
  prevActiveKeyProp: string
}

class Tabs extends Component<ITabsProps, ITabsState> {
  static TabPane: typeof TabPane

  static defaultProps = {
    defaultActiveKey: undefined,
    onChange: () => {}
  }

  state = {
    activeKey: this.props.defaultActiveKey,
    prevActiveKeyProp: undefined
  }

  static getDerivedStateFromProps(props, state) {
    const activeKeyProps = props.activeKey
    if (activeKeyProps && activeKeyProps !== state.prevActiveKeyProp) {
      return {
        activeKey: activeKeyProps,
        prevActiveKeyProp: activeKeyProps
      }
    }
    return null
  }

  handleTabClick = (event) => {
    const { onChange } = this.props
    const activeKey = event.target.dataset.key
    this.setState({
      activeKey
    })
    onChange(activeKey)
  }

  isActiveKeyMatch = () => {
    const { children } = this.props
    const { activeKey } = this.state
    let isMatch = false
    React.Children.map(children, (child: ReactElement<any>, index: number) => {
      const key = child.key || index.toString()
      if (key === activeKey) {
        isMatch = true
      }
    })
    return isMatch
  }

  render() {
    const { children } = this.props
    let { activeKey } = this.state
    const isMatch = this.isActiveKeyMatch()
    return (
      <div className="rfox-tabs">
        <div className="rfox-tabs__nav">
          {
            React.Children.map(children as React.ReactNode, (child: ReactElement<any>, index: number) => {
              const key = child.key || index.toString()
              if (!isMatch && index === 0) {
                activeKey = (key as string)
              }
              const linkClass = cx('rfox-tabs__nav-link', {
                'rfox-tabs__nav-link__active': activeKey === key
              })
              return <a 
                className={linkClass} 
                data-key={key} 
                key={key}
                onClick={this.handleTabClick}>
                  {child.props.tab}
                </a>
            })
          }
        </div>
        <div className="rfox-tabs__contents">
          {
            React.Children.map(children, (child: ReactElement<any>, index: number) => {
              const key = child.key || index.toString()
              return activeKey === key ? <div className="rfox-tabs__content">{child}</div> : null
            })
          }
        </div>
      </div>
    )
  }
}

export default Tabs