import React, { Component } from 'react'
import Grid from '../index'

const { Row, Col } = Grid

/* tslint:disable  */
class NormalGrid extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={8}>col-8</Col>
          <Col span={8} offset={8}>col-8</Col>
        </Row>
        <Row>
          <Col span={18} push={6}>col-18 col-push-6</Col>
          <Col span={6} pull={18}>col-6 col-pull-18</Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24}}>
          <Col className="gutter-row" span={12}>
            <div className="gutter-box">col-12</div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div className="gutter-box">col-12</div>
          </Col>
        </Row>
      </div>
    )
  }
}

/* tslint:disable  */
class FlexGrid extends Component {
    render() {
      return (
        <div>
            <Row type="flex" justify="center" align="center">
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
            </Row>
        </div>
      )
    }
}

/* tslint:disable  */
class ResponsiveGrid extends Component {
    render() {
        return (
            <Row>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
              <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
              <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>Col</Col>
            </Row>
        )
    }
}

export { NormalGrid, FlexGrid, ResponsiveGrid }
