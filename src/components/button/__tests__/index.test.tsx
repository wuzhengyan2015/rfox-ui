import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Button from '../index'

configure({ adapter: new Adapter() })

describe('Button tests', () => {
    it('render correctly', () => {
        const treeOne = render(
            <Button type='primary' size="large" onClick={() => {}} shape="round">Button</Button>
        )
        const treeTwo = render(
            <Button href="http://www.baidu.com" target="_blank">Link</Button>
        )
        expect(treeOne).toMatchSnapshot()
        expect(treeTwo).toMatchSnapshot()
    })
 })