import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Progress from '../index'

configure({ adapter: new Adapter() })

describe('Progress tests', () => { 
    it('renders correctly', () => {
        const tree = render(
            <Progress type="line" percent={80} gapDegree={90} />
        )
        expect(tree).toMatchSnapshot()
    })
})