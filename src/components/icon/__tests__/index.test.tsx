import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Icon from '../index'

configure({ adapter: new Adapter() })

describe('Icon tests', () => { 
    it('renders correctly', () => {
        const tree = render(
            <Icon type="star" size={42} spin/>
        )
        expect(tree).toMatchSnapshot()
    })
})