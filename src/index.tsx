import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import Tabs from './components/tabs/index'
import Icon from './components/icon/index'
import Rate from './components/rate/index'

const TabPane = Tabs.TabPane;

ReactDOM.render(
  <div style={{margin: '20px'}}>
    <Tabs defaultActiveKey="2" activeKey="12">
      <TabPane tab="Tab 1" key="12">Content of Tab Pane 1</TabPane>
      <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
      <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>
    <Icon type="icon-fillstar" size="28px" color="#f0f"/>
    <Rate value={3} allClear onFocus={() => {console.log('focus')}} count={10} activeColor={'red'} character={<Icon type='icon-favorite' />}/>
  </div>,
  document.getElementById('root')
)
