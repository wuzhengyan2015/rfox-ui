import React from 'react'
import Layout from '../index'

const { Header, Content, Footer, Sider } = Layout

class NormalLayout extends React.Component {
    render () {
        return (
            <div>
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
            </div>
        )
    }
}

export { NormalLayout }