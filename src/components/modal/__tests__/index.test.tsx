import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Modal from '../index'
import React from 'react'

configure({ adapter: new Adapter() })

describe('Modal tests', () => {
    it('should render title prop', () => {
        const tree = mount(
            <Modal title="testModal"></Modal>
        )
        expect(tree.find('.rfox-modal__title').text()).toBe('testModal');
    })
    it('should render children correctly', () => {
        const children = <div>modal components</div>
        const tree = mount(
            <Modal>{ children }</Modal>
        )
        expect(tree.contains(children)).toBeTruthy()
    })
    it('render footer', () => {
        const tree = mount(<Modal></Modal>)
        const footer = <div>Footer</div>
        const customTree = mount(<Modal footer={footer}></Modal>)
        expect(tree.find('.rfox-btn').length).toBe(2)
        expect(tree.find('.rfox-btn.rfox-btn-primary').exists()).toBeTruthy()
        expect(customTree.contains(footer)).toBeTruthy()
        expect(customTree.find('.rfox-btn').length).toBe(0)
    })
})