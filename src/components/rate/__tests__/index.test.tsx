import { mount, shallow, render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Rate from '../index'
import Icon from '../../icon';

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
        expect(wrapper.find('.rfox-rate__item').length).toBe(5)
    })
    it('count prop test', () => {
        const wrapper = shallow(<Rate count={10} />)
        expect(wrapper.find('.rfox-rate__item').length).toBe(10)
    })
    it('allClear prop test', () => {
        const wrapper = mount(<Rate allClear/>)
        wrapper.find('.rfox-rate__item').at(2).simulate('click')
        expect(wrapper.find('.rfox-rate__item--hover').length).toBe(3)
        wrapper.find('.rfox-rate__item').at(2).simulate('click')
        expect(wrapper.find('.rfox-rate__item--hover').length).toBe(0)
    })
    it('character prop test', () => {
        const wrapper = shallow(mockRate)
        expect(wrapper.find(Icon).at(0).prop('type')).toBe('icon-star-fill')
        const customWrapper = shallow(<Rate character={<Icon type='icon-heart-fill' />}/>)
        expect(customWrapper.find(Icon).at(0).prop('type')).toBe('icon-heart-fill')
    })
    it('className prop test', () => {
        const wrapper = shallow(<Rate className="unit-test" />)
        expect(wrapper.find('.rfox-rate__item').at(0).hasClass('unit-test')).toBe(true)
    })
    it('count prop test', () => {
        const defaultWrapper = shallow(mockRate)
        expect(defaultWrapper.find('.rfox-rate__item').length).toBe(5)
        const wrapper = shallow(<Rate count={10} />)
        expect(wrapper.find('.rfox-rate__item').length).toBe(10)
    })
    it('count prop test', () => {
        const wrapper = shallow(<Rate defaultValue={2} />)
        expect(wrapper.find('.rfox-rate__item--hover').length).toBe(2)
    })
    it('disabled prop test', () => {
        const wrapper = mount(<Rate disabled/>)
        wrapper.find('.rfox-rate__item').at(0).simulate('mouseover')
        expect(wrapper.find('.rfox-rate__item--hover').length).toBe(0)
        wrapper.find('.rfox-rate__item').at(0).simulate('mouseout')
        expect(wrapper.find('.rfox-rate__item--hover').length).toBe(0)
        wrapper.find('.rfox-rate__item').at(2).simulate('click')
        expect(wrapper.find('.rfox-rate__item--hover').length).toBe(0)
    })
    it('value prop test', () => {
        const wrapper = shallow(<Rate value={3}/>)
        expect(wrapper.find('.rfox-rate__item--hover').length).toBe(3)
        const defaultWrapper = shallow(mockRate)
        defaultWrapper.setProps({value: 3})
        expect(defaultWrapper.find('.rfox-rate__item--hover').length).toBe(3)
    })
    it('activeColor prop test', () => {
        const wrapper = shallow(<Rate value={1} activeColor='#ff0000'/>)
        expect(wrapper.find('.rfox-rate__item').at(0).props().style.color).toBe('#ff0000')
    })
    it('onChange prop test', () => {
        const onChange = jest.fn()
        const wrapper = mount(<Rate onChange={onChange}/>)
        wrapper.find('.rfox-rate__item').at(0).simulate('click')
        expect(onChange).toHaveBeenCalledWith(1)
    })
    it('onFocus prop test', () => {
        const onFocus = jest.fn()
        const wrapper = mount(<Rate onFocus={onFocus}/>)
        wrapper.find('.rfox-rate').at(0).simulate('focus')
        expect(onFocus).toHaveBeenCalled()
    })
    it('onBlur prop test', () => {
        const onBlur = jest.fn()
        const wrapper = mount(<Rate onBlur={onBlur}/>)
        wrapper.find('.rfox-rate').at(0).simulate('blur')
        expect(onBlur).toHaveBeenCalled()
    })
    it('onHoverChange prop test', () => {
        const onHoverChange = jest.fn()
        const wrapper = mount(<Rate onHoverChange={onHoverChange}/>)
        wrapper.find('.rfox-rate__item').at(0).simulate('mouseover')
        expect(onHoverChange).toHaveBeenCalledWith(1)
    })
    it('onMouseOut test', () => {
        const defaultWrapper = mount(mockRate)
        defaultWrapper.find('.rfox-rate__item').at(0).simulate('mouseover')
        expect(defaultWrapper.find('.rfox-rate__item--hover').length).toBe(1)
        defaultWrapper.find('.rfox-rate__item').at(0).simulate('mouseout')
        expect(defaultWrapper.find('.rfox-rate__item--hover').length).toBe(0)
    })
})