import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Grid from '../index'

configure({ adapter: new Adapter() })
const { Row, Col } = Grid

describe('Grid render', () => {
    const tree = render(
        <div>
            <Row type="flex" justify="center" align="center">
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
            </Row>
            <Row gutter={{ xs: 8, sm: 16, md: 24}}>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">col-12</div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">col-12</div>
              </Col>
            </Row>
            <Row>
              <Col span={18} push={6}>col-18 col-push-6</Col>
              <Col span={6} pull={18}>col-6 col-pull-18</Col>
            </Row>
        </div>
    )
    expect(tree).toMatchSnapshot()
})