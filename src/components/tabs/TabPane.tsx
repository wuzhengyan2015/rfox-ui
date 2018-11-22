import React, { Component } from 'react'

export interface ITabPane {
  tab: string;
  key: string;
}

class TabPane extends Component<ITabPane, {}> {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default TabPane