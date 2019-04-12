import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/reset.css'
import './assets/styles/global.css'
import { ModalMethod, NormalModal, UncontrollerModal } from './components/modal/demo'
import { NormalGrid, FlexGrid, ResponsiveGrid } from './components/grid/demo'
import Layout from './components/layout'

const { Header, Content, Footer, Sider } = Layout


ReactDOM.render(
    <div>
        {/* <NormalModal /> */}
        { <NormalGrid/> }
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>

        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>

        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>

        <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
    </div>,
    document.getElementById('root')
)