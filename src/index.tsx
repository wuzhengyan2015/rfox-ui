import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import Tabs from './components/tabs/index'

const TabPane = Tabs.TabPane;

ReactDOM.render(
  <div style={{margin: '20px'}}>
    <Tabs defaultActiveKey="2">
      <TabPane tab="Tab 1" key="12">Content of Tab Pane 1</TabPane>
      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>
  </div>,
  document.getElementById('root')
)