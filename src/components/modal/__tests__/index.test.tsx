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
    it('render style props', () => {
        const tree = mount(<Modal
            style={{ fontSize: '20px' }}
            maskStyle={{ background: 'rgba(0, 0, 0, 0.6)' }}
            bodyStyle={{ color: '#f22' }}
            width={600}
            zIndex={999}
        ></Modal>)
        expect(tree.find('.rfox-modal__mask').prop('style')).toEqual({
            background: 'rgba(0, 0, 0, 0.6)',
            zIndex: 999
        })
        expect(tree.find('.rfox-modal').prop('style')).toEqual({
            fontSize: '20px',
            width: 600
        })
        expect(tree.find('.rfox-modal__body').prop('style').color).toBe('#f22')
        expect(tree.find('.rfox-modal__wrapper').prop('style').zIndex).toBe(999)
    })
    it('add wrapClassName correctly', () => {
        const tree = mount(<Modal
            wrapClassName="unit-test"
        ></Modal>)
        expect(tree.find('.rfox-modal__wrapper').prop('className')).toEqual(expect.stringContaining('unit-test'))
    })
    it('render footer button correctly', () => {
        const tree = mount(<Modal
            okText="Okay"
            cancelText="Cancel"
        ></Modal>)
        const btns = tree.find('.rfox-modal__footer').find('.rfox-btn')
        expect(btns.at(0).text()).toBe('Cancel')
        expect(btns.at(1).text()).toBe('Okay')
        tree.setProps({ okType: 'dash' })
        expect(tree.find('.rfox-modal__footer').find('.rfox-btn').at(1).prop('className')).toEqual(expect.stringContaining('rfox-btn-dash'));
    })
    it('render correctly for close icon', () => {
        const tree = mount(<Modal></Modal>)
        const treeWithoutCloseIcon = mount(<Modal closable={false}></Modal>)
        expect(tree.find('.rfox-modal__close').exists()).toBeTruthy()
        expect(treeWithoutCloseIcon.find('.rfox-modal__close').prop('className')).toEqual(expect.stringContaining('rfox-modal__close--hidden'))
    })
    it('render modal position according to centered prop', () => {
        const tree = mount(<Modal centered={true}></Modal>)
        expect(tree.find('.rfox-modal').prop('className')).toEqual(expect.stringContaining('rfox-modal--center'))
    })
})