import { mount, shallow, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Rate from '../index'

configure({ adapter: new Adapter() })

const mockRate = <Rate />

describe('Rate tests', () => { 
    it('renders correctly', () => {
        const tree = render(
            <Rate />
        )
        expect(tree).toMatchSnapshot()
    })
    it('default count prop test', () => {
        const wrapper = shallow(mockRate)
        expect(wrapper.find('.rfox-rate_item').length).toBe(5)
    })
    it('count prop test', () => {
        const wrapper = shallow(<Rate count={10} />)
        expect(wrapper.find('.rfox-rate_item').length).toBe(10)
    })
    it('allClear prop test', () => {
        const wrapper = mount(<Rate allClear/>)
        wrapper.find('.rfox-rate_item').at(2).simulate('click')
        expect(wrapper.find('.rfox-rate_item--hover').length).toBe(3)
        wrapper.find('.rfox-rate_item').at(2).simulate('click')
        expect(wrapper.find('.rfox-rate_item--hover').length).toBe(0)
    })
})