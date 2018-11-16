import React, { Component } from 'react'
import TabPane from './TabPane'

export interface ITabs {
  defaultActiveKey?: string;
  onChange?: (activeKey: string) => void;
}

class Tabs extends Component<ITabs, {}> {
  static TabPane: typeof TabPane
}

export default Tabs