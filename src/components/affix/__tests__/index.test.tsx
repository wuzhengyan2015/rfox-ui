import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Affix from '../index'

configure({ adapter: new Adapter() })

describe('Affix tests', () => { 
    it('renders correctly', () => {
        const tree = render(
            <Affix offsetTop={10} onChange={console.log}>
                <button>button</button>
            </Affix>
        )
        expect(tree).toMatchSnapshot()
    })
})