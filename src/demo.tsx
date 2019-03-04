import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import Modal from './components/modal'
import Rate from './components/rate'
import Icon from './components/icon'
import Tabs from './components/tabs'

const TabPane = Tabs.TabPane;

ReactDOM.render(
    <div>
        <Modal
            visible={false}
            title="Basic Modal"
            style={{ top: '200px' }}
        >
            modal components
        </Modal>
        <Icon type="icon-cloud-upload"/>
        <Rate character={<Icon type='icon-heart-fill'/>} activeColor="#e02d2d" />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
    </div>,
    document.getElementById('root')
)