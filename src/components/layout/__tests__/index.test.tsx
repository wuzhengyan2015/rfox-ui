import { render, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Layout from '../index'

configure({ adapter: new Adapter() })
const { Header, Content, Footer, Sider } = Layout

describe('Layout tests', () => { 
    it('renders normal layout', () => {
        const tree = render(
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
        )
        expect(tree).toMatchSnapshot()
    })
    it('renders normal layout with sider', () => {
        const tree = render(
            <Layout>
              <Sider>Sider</Sider>
              <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
              </Layout>
            </Layout>
        )
        expect(tree).toMatchSnapshot()
    })
})