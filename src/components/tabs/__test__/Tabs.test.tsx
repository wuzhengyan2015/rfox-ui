import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react'
import Tabs from '../index'
import TabPane from '../TabPane'

configure({ adapter: new Adapter() });

describe('Tabs tests', () => {
  test('Tabs has a static property TabPane', () => {
    const staticProperty = Tabs.TabPane
    expect(staticProperty).toBe(TabPane)
  })
  test('render three tabPanes', () => {
    const wrapper = shallow(
      <Tabs>
        <TabPane tab="tab 1" key="1">content 1</TabPane>
        <TabPane tab="tab 2" key="2">content 2</TabPane>
        <TabPane tab="tab 3" key="3">content 3</TabPane>
      </Tabs>
    )
    expect(wrapper.find('.rfox-tabs__nav-link').length).toBe(3)
  })
})