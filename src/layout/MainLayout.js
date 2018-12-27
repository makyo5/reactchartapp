import React, { Component } from "react";
import { Layout, Menu } from "antd";
import AppRouter from "../routes";
import AccountArea from "../component/accountarea";

const { Header, Content, Sider } = Layout;

class MainLayout extends Component {
  render() {
    return (
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>nav.1</Menu.Item>
            <Menu.Item>nav.2</Menu.Item>
          </Menu>
          <AccountArea/>
        </Header>
        <Layout>
          <Sider theme="light">This is sider</Sider>
          <Content>
            <AppRouter />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
