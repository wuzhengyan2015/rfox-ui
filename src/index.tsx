import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import Tabs from './components/tabs/index'
import Icon from './components/icon/index'
import Rate from './components/rate/index'
import Affix from './components/affix/index'
import Progress from './components/progress/index'

const TabPane = Tabs.TabPane;

ReactDOM.render(
  <div style={{margin: '20px', height: '1500px'}}>
    <Tabs defaultActiveKey="2" activeKey="12">
      <TabPane tab="Tab 1" key="12">Content of Tab Pane 1</TabPane>
      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>
    <Icon type="icon-fillstar" size="28px" color="#f0f"/>
    <Rate />
    <Affix offsetTop={10} onChange={console.log}>
      <button>button</button>
    </Affix>
    <Progress type="circle" percent={30} strokeWidth={16} strokeColor='#f23'/>
  </div>,
  document.getElementById('root')
)
