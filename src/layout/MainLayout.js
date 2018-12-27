import React, { Component } from 'react';
import { Layout } from 'antd';

const {
    Header, Content, Sider
} = Layout

class MainLayout extends Component {
    render(){
        return(
            <Layout>
                <Header>This is header</Header>
                <Layout>
                    <Sider theme="light">This is sider</Sider>
                    <Content>this is content</Content>
                </Layout>
            </Layout>
        )
    }
}

export default MainLayout;
