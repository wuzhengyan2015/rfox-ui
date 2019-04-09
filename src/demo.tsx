import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import { ModalMethod, NormalModal, UncontrollerModal } from './components/modal/demo'
import Rate from './components/rate'
import Icon from './components/icon'
import Tabs from './components/tabs'
import Grid from './components/grid'

const TabPane = Tabs.TabPane;
const { Row, Col } = Grid

ReactDOM.render(
    <div>
        {/* <NormalModal /> */}
        <Icon type="icon-cloud-upload"/>
        <Rate character={<Icon type='icon-heart-fill'/>} activeColor="#e02d2d"/>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
        </Tabs>
        <Row gutter={3}>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
        </Row>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8} offset={8}>col-8</Col>
        </Row>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="gutter-box">col-6</div>
          </Col>
        </Row>
        <Row>
          <Col span={18} push={6}>col-18 col-push-6</Col>
          <Col span={6} pull={18}>col-6 col-pull-18</Col>
        </Row>
    </div>,
    document.getElementById('root')
)