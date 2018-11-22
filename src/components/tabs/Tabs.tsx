import React, { Component, ReactElement } from 'react'
import classNames from 'classnames'
import TabPane from './TabPane'

export interface ITabsProps {
  defaultActiveKey?: string;
  onChange?: (activeKey: string) => void;
}

export interface ITabsState {
  activeKey: string
}

class Tabs extends Component<ITabsProps, ITabsState> {
  static TabPane: typeof TabPane

  state = {
    activeKey: undefined
  }

  handleTabClick = (event) => {
    this.setState({
      activeKey: event.target.dataset.key
    })
  }

  render () {
    const { defaultActiveKey, children } = this.props
    const { activeKey = defaultActiveKey } = this.state
    return (
      <div className="rfox-tabs">
        <div className="rfox-tabs__nav">
          {
            React.Children.map(children, (child: ReactElement<any>) => {
              const key = child.key
              const linkClass = classNames('rfox-tabs__nav-link', { 
                'rfox-tabs__nav-link__active': activeKey === key
              })
              return <a className={linkClass} data-key={key} key={key} onClick={this.handleTabClick}>{child.props.tab}</a>
            })
          }
        </div>
        <div className="rfox-tabs__content">
          {
            React.Children.map(children, (child: ReactElement<any>) => {
              return activeKey === child.key ? <div>{child}</div> : null
            })
          }
        </div>
      </div>
    )
  }
}

export default Tabs