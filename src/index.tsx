import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import Tabs from './components/tabs/index'
import Icon from './components/icon/index'
import Rate from './components/rate/index'
import Affix from './components/affix/index'

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
    <div style={{'width': '300px', 'height': '200px', 'overflow-y': 'auto', 'border': '1px solid #ccc'}}>
      <br/><br/><br/><br/>
      <Affix offsetBottom={10} onChange={() => console.log('change affix status')}>
        <button>1231</button>
      </Affix>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
    </div>
  </div>,
  document.getElementById('root')
)
